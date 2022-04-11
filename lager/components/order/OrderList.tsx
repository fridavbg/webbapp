import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Base, Typography } from "../../styles";

import orderModel from '../../models/orders';

export default function OrderList({ route, navigation }) {
    const { reload } = route.params || true;
    const [allOrders, setAllOrders] = useState([]);

    if (reload) {
        console.log('RELOAD'); 
        reloadOrders();
    }
    async function reloadOrders() {
        setAllOrders(await orderModel.getOrders());
    }
    useEffect(() => {
        reloadOrders();
    }, []);

    const listOfOrders = allOrders
        .filter((order) => order.status === "Ny")
        .map((order, index) => {
            return (
                <TouchableOpacity
                    style={Base.button}
                    key={index}
                    onPress={() => {
                        navigation.navigate("Details", {
                            order: order,
                        });
                    }}
                >
                    <Text style={Typography.btnText}>
                        ID: {order.id} {"\n"}
                        NAME: {order.name} {"\n"}
                        STATUS: { order.status }
                    </Text>
                </TouchableOpacity>
            );
        });

    return (
        <ScrollView>
            <View>
                <Text style={Typography.title}>Ordrar redo att plockas</Text>
                {listOfOrders}
            </View>
        </ScrollView>
    );
}
