import { useState } from "react";

import { ScrollView, Text, TouchableOpacity } from "react-native";
import { Base, Typography } from "../../styles";
import DateDropDown from "../incl/DateDropDown";
import OrderDropDown from "../order/OrderDropDowm";

import orderModel from "../../models/orders";

export default function InvoiceForm({ navigation }) {
    const [currentOrder, setCurrentOrder] = useState<Partial<Order>>({});

    async function createInvoice(props) {
        const updatedOrder = {
            ...currentOrder,
            status_id: 600,
        };
        await orderModel.updateOrder(updatedOrder);

        navigation.navigate("Faktura", { reload: true });
    }

    return (
        <ScrollView style={{ ...Base.container }}>
            <Text style={{ ...Typography.title }}>Välj en order</Text>
            <OrderDropDown
                setCurrentOrder={setCurrentOrder}
                currentOrder={currentOrder}
            />
            <DateDropDown />
            <TouchableOpacity style={{ ...Base.button }} onPress={createInvoice}>
                <Text style={{ ...Typography.btnText }}>Skapa ny faktura</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
