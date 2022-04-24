import { View, ScrollView, Text, TouchableOpacity, Button } from "react-native";
import { useState, useEffect } from "react";

import { Base, Typography } from "../../styles";

import invoiceModel from "../../models/invoices";

export default function InvoicesList({ invoices }) {
    const invoiceList = invoices.map((invoice, index) => (
        <Text key={index} style={Base.listItem}>
            ID: {"\n"}
            CREATION_DATE: {"\n"}
            DUE_DATE: {"\n"}
            ORDER_ID: {"\n"}
            NAME: {"\n"}
            ADDRESS: ZIP: {"\n"}
            CITY: {"\n"}
            COUNTRY: {"\n"}
            TOTAL_PRICE: {"\n"}
        </Text>
    ));

    return (
        <ScrollView>
            <View style={Base.container}>
                <Text style={Typography.title}>Invoices</Text>
            </View>
        </ScrollView>
    );
}
