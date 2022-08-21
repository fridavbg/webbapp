import { useState, useEffect } from "react";
import * as Location from "expo-location";
import { View, Text, StyleSheet, ScrollView } from "react-native";
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

    useEffect(() => {
        (async () => {
            const { status } =
                await Location.requestForegroundPermissionsAsync();

            if (status !== "granted") {
                setErrorMessage("Permission to access location was denied");
                return;
            }

            const currentLocation = await Location.getCurrentPositionAsync({});

            setLocationMarker(
                <Marker
                    coordinate={{
                        latitude: currentLocation.coords.latitude,
                        longitude: currentLocation.coords.longitude,
                    }}
                    title="Min plats"
                    pinColor="blue"
                />
            );
        })();
    }, []);

    return (
        <View style={Base.container}>
            <View style={Base.wrapper}>
                <Text style={Typography.text}>
                    Namn: {order.name}
                    {"\n"}
                    Order status: {order.status_id}
                    {"\n"}
                    Order id: {order.id}
                    {"\n"}
                    Order address: {order.address}
                    {"\n"}
                    Post kod: {order.zip}
                    {"\n"}
                    Stad: {order.city}
                </Text>
            </View>
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 59.6749712,
                        longitude: 14.5208584,
                        latitudeDelta: 0.1,
                        longitudeDelta: 0.1,
                    }}
                >
                    {marker}
                    {locationMarker}
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
