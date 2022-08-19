import { useState, useEffect } from "react";
import * as Location from "expo-location";
import { View, Text, StyleSheet } from "react-native";
import { Base, Typography, Map } from "../../styles";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import getCoordinates from "../../models/nominatim";

export default function ShipOrder({ route }) {
    const { order } = route.params;
    const [marker, setMarker] = useState(null);

    const [locationMarker, setLocationMarker] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        (async () => {
            const results = await getCoordinates(
                `${order.address}, ${order.city}`
            );

            setMarker(
                <Marker
                    coordinate={{
                        latitude: parseFloat(results[0].lat),
                        longitude: parseFloat(results[0].lon),
                    }}
                    title={results[0].display_name}
                />
            );
        })();
    }, []);

    return (
        <View style={Base.container}>
            <Text style={Typography.header2}>Skicka order</Text>
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 41.3821171,
                        longitude: 2.1854822,
                        latitudeDelta: 0.1,
                        longitudeDelta: 0.1,
                    }}
                >
                    {marker}
                </MapView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
