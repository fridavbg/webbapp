import { useState, useEffect } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import config from "../../config/config.json";
import { Base, Typography } from "../../styles";

export default function OrderList({ navigation }) {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch(`${config.base_url}/orders?api_key=${config.api_key}`)
            .then((response) => response.json())
            .then((result) => setAllOrders(result.data));
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
                    <Text style={Typography.btnText}>{order.name}</Text>
                </TouchableOpacity>
            );
        });

    return (
        <View>
            <Text style={Typography.title}>Ordrar redo att plockas</Text>
            {listOfOrders}
        </View>
    );
}
