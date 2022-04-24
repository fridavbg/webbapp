import { View, ScrollView, Text, TouchableOpacity, Button } from "react-native";
import { useState, useEffect } from "react";

import { Base, Typography } from "../../styles";

import deliveryModel from "../../models/deliveries";

export default function DeliveriesList({ route, navigation }) {
    const { reload } = route.params || true;
    const [allDeliveries, setAllDeliveries] = useState([]);

    if (reload) {
        reloadDeliveries();
    }
    async function reloadDeliveries() {
        setAllDeliveries(await deliveryModel.getDeliveries());
    }
    useEffect(() => {
        reloadDeliveries();
    }, []);

    const listOfDeliveries = allDeliveries.map((delivery, index) => {
        return (
            <Text key={index} style={Base.listItem}>
                ID: {delivery.id} {"\n"}
                PRODUCT_ID: {delivery.product_id} {"\n"}
                ANTAL: {delivery.amount} {"\n"}
                LEVERANSDATUM: {delivery.delivery_date} {"\n"}
                KOMMENTAR: {delivery.comment} {"\n"}
            </Text>
        );
    });

    if (listOfDeliveries.length > 0) {
        return (
            <ScrollView>
                <View style={Base.container}>
                    <Text style={Typography.title}>Inleveranser</Text>
                    {listOfDeliveries}
                    <TouchableOpacity
                        style={Base.button}
                        onPress={() => {
                            navigation.navigate("DeliveryForm");
                        }}
                    >
                        <Text style={Typography.btnText}>
                            Skapa ny inleverans
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
    return (
        <ScrollView>
            <View style={Base.container}>
                <Text style={Typography.title}>Inleveranser</Text>
                <Text style={Typography.errMsg}>Inga inleveranser</Text>
                <TouchableOpacity
                    style={Base.button}
                    onPress={() => {
                        navigation.navigate("DeliveryForm");
                    }}
                >
                    <Text style={Typography.btnText}>Skapa ny inleverans</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
