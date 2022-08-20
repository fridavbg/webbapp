import { useState } from "react";

import { ScrollView, Text, TouchableOpacity } from "react-native";
import { Base, Typography } from "../../styles";
import DateDropDown from "./InvoiceDateDropDown";
import OrderDropDown from "../order/OrderDropDowm";

// import orderModel from "../../models/orders";
import invoiceModel from "../../models/invoices";

export default function InvoiceForm({ route, navigation }) {
    const [invoice, setInvoice] = useState<Partial<Invoice>>({});
    const [currentOrder, setCurrentOrder] = useState<Partial<Order>>({});

    async function addInvoice(props) {
        await invoiceModel.addInvoice(invoice);
        navigation.navigate("Invoice List", { reload: true });
    }

    return (
        <ScrollView style={{ ...Base.container }}>
            <Text style={{ ...Typography.title }}>Pick an order to invoice</Text>
            <OrderDropDown
                setCurrentOrder={setCurrentOrder}
                currentOrder={currentOrder}
                invoice={invoice}
                setInvoice={setInvoice}
                route={route}
            />
            <DateDropDown
                invoice={invoice}
                setInvoice={setInvoice}
            />
            <TouchableOpacity style={{ ...Base.button }} onPress={addInvoice}>
                <Text style={{ ...Typography.btnText }}>Create Invoice</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
