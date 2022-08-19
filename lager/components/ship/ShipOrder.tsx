import { View, Text } from "react-native";
import { Base, Typography, Map } from "../../styles";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

export default function ShipOrder({ route }) {
    const { order } = route.params;

    return (
        <View style={Base.container}>
        <Text style={Typography.header2}>Skicka order</Text>
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 56.1612,
                    longitude: 15.5869,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1,
                }}
            />
            <Marker
                coordinate={{ latitude: 56.17, longitude: 15.59 }}
                title="Min första markör"
            />
        </View>
    </View>
    );
}

import { StyleSheet } from "react-native";

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