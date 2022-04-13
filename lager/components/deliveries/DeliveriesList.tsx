import { View, ScrollView, Text, TouchableOpacity, Button } from "react-native";
import { useState, useEffect } from "react";

import { Base, Typography } from "../../styles";

import deliveryModel from "../../models/deliveries";

export default function DeliveriesList({ route, navigation }) {
    const { reload } = route.params || true;
    const [allDeliveries, setAllDeliveries] = useState([]);
    if (reload) {
        console.log("RELOAD");
        reloadOrders();
    }
    async function reloadOrders() {
        setAllDeliveries(await deliveryModel.getDeliveries());
    }
    useEffect(() => {
        reloadOrders();
    }, []);

    const listOfDeliveries = allDeliveries.map((delivery, index) => {
        return (
            <TouchableOpacity
                style={Base.button}
                key={index}
                onPress={() => {
                    navigation.navigate("Deliveries", {
                        delivery: delivery,
                    });
                }}
            >
                <Text style={Typography.btnText}>
                    PRODUCT-ID: {delivery.product_id} {"\n"}
                    ANTAL: {delivery.amount} {"\n"}
                    LEVERANSDATUM: {delivery.delivery_date} {"\n"}
                    KOMMENTAR: {delivery.commentƒ} {"\n"}
                </Text>
            </TouchableOpacity>
        );
    });

    return (
        <ScrollView>
            <View style={Base.container}>
                <Text style={Typography.title}>Inleveranser</Text>
                {listOfDeliveries}
                <TouchableOpacity
                    style={Base.button}
                    onPress={() => {
                        navigation.navigate("Form");
                    }}
                >
                    <Text style={Typography.btnText}>Skapa ny inleverans</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
