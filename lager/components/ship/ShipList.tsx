import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { Base, Typography } from "../../styles";

import orderModel from "../../models/orders";

export default function ShipList({ route, navigation }) {
    const { reload } = route.params || true;
    const [allOrders, setAllOrders] = useState([]);

    if (reload) {
        console.log("RELOAD");
        reloadOrders();
    }
    async function reloadOrders() {
        setAllOrders(await orderModel.getOrders());
    }
    useEffect(() => {
        reloadOrders();
    }, []);

    const listOfOrders = allOrders
        .filter((order) => order.status === "Packad")
        .map((order, index) => {
            return (
                <TouchableOpacity
                    style={Base.button}
                    key={index}
                    onPress={() => {
                        navigation.navigate("Order", {
                            order: order,
                        });
                    }}
                >
                    <Text style={Typography.btnText}>
                        ID: {order.id} {"\n"}
                        NAME: {order.name} {"\n"}
                        STATUS: {order.status}
                    </Text>
                </TouchableOpacity>
            );
        });

    return (
        <ScrollView>
            <Text style={Typography.title}>Orders to be shipped</Text>
            <View>{listOfOrders}</View>
        </ScrollView>
    );
}
