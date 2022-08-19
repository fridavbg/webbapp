import { useState, useEffect } from "react";
import { ScrollView, View, Text } from "react-native";
import config from "../../config/config.json";
import { getCoordinates } from "../../models/nominatim"
import { Base, Typography } from "../../styles";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";


export default function Test() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`${config.base_url}/orders?api_key=${config.api_key}`)
            .then((response) => response.json())
            .then((result) => setOrders(result.data));
    }, []);

    const list = orders.map((order, index) => (
        <Text key={index}>{order.address}</Text>
    ));

    return (
        <ScrollView style={Base.container}>
            <View style={Base.center}>
                <Text style={Typography.title}>Fridas Personal Playground</Text>
                <Text style={Typography.text}>
                    There is no friend as loyal {"\n"}as a book
                </Text>
                <Text style={Typography.text}>
                    {"\n"} Something to try out goes here
                </Text>
            </View>
        </ScrollView>
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
