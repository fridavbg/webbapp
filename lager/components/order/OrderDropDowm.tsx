import { Picker } from "@react-native-picker/picker";
import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import orderModel from "../../models/orders";
import { Base, Typography } from "../../styles";

export default function OrderDropDown(props) {
    const [orders, setOrders] = useState<Orders[]>([]);
    let orderHash: any = {};

    useEffect(async () => {
        setOrders(await orderModel.getOrders());
    });

    const orderList = orders.map((order, index) => {
        if (order.status !== "Fakturerad") {
            return (
                <Picker.Item key={index} label={order.name} value={order.id} />
            );
        }
        return <Text>All orders have been invoiced</Text>;
    });

    if (orderList.length > 1) {
        return (
            <Picker
                selectedValue={props.order?.order_id}
                onValueChange={(itemValue) => {
                    props.setOrders({ ...props.order, order_id: itemValue });
                    props.setCurrentOrder[orderHash[itemValue]];
                }}
            >
                {orderList}
            </Picker>
        );
    }
    return <Text>No orders available</Text>;
}
