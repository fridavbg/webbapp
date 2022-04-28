import { useState } from "react";

import { ScrollView, Text, TouchableOpacity } from "react-native";
import { Base, Typography } from "../../styles";
import DateDropDown from "./InvoiceDateDropDown";
import OrderDropDown from "../order/OrderDropDowm";

import orderModel from "../../models/orders";
import invoiceModel from "../../models/invoices";

export default function InvoiceForm({ navigation }) {
    const [invoice, setInvoice] = useState<Partial<Invoice>>({});
    const [currentOrder, setCurrentOrder] = useState<Partial<Order>>({});

    async function addInvoice(props) {
        await invoiceModel.addInvoice(invoice);

        // STATUS NOT CHANGING
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
                invoice={invoice}
                setInvoice={setInvoice}
            />
            <DateDropDown
                invoice={invoice}
                setInvoice={setInvoice}
            />
            <TouchableOpacity style={{ ...Base.button }} onPress={addInvoice}>
                <Text style={{ ...Typography.btnText }}>Skapa ny faktura</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
