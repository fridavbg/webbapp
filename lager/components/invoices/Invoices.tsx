import { useEffect, useState } from "react";

import { Text, ScrollView } from "react-native";
import { Base, Typography } from "../../styles";
import React from "react";

import InvoicesList from "./InvoicesList";
import invoiceModel from "../../models/invoices";

export default function Invoices() {
    const [invoices, setInvoices] = useState([]);

    useEffect(async () => {
        setInvoices(await invoiceModel.getInvoices());
    }, []);
    return (
        <ScrollView style={Base.container}>
            <Text style={Typography.title}>Fakturor</Text>
            <InvoicesList invoices={invoices} />
        </ScrollView>
    );
}
