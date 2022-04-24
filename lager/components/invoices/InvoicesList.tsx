import { View, ScrollView, Text, TouchableOpacity, Button } from "react-native";
import { useEffect } from "react";
import { Base, Typography } from "../../styles";
import invoiceModel from "../../models/invoices";

export default function InvoicesList({ route, invoices, setInvoices }) {
    const { reload } = route.params || true;

    if (reload) {
        reloadInvoices();
    }
    async function reloadInvoices() {
        setInvoices(await invoiceModel.getInvoices());
    }
    useEffect(() => {
        reloadInvoices();
    }, []);

    const invoiceList = invoices.map((invoice, index) => {
        return (
            <Text key={index} style={Base.listItem}>
                ID: {invoice.id} {"\n"}
                NAMN: {invoice.name} {"\n"}
            </Text>
        );
    });

    if (invoiceList.length > 0) {
        return (
            <ScrollView>
                <View style={Base.container}>
                    <Text style={Typography.title}>Faktura</Text>
                    {invoiceList}
                    <TouchableOpacity
                        style={Base.button}
                        // onPress={() => {
                        //     navigation.navigate("InvoiceForm");
                        // }}
                    >
                        <Text style={Typography.btnText}>Skapa ny faktura</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
    return (
        <ScrollView>
            <View style={Base.container}>
                <Text style={Typography.title}>Faktura</Text>
                <Text style={Typography.errMsg}>Inga fakturor</Text>
                <TouchableOpacity
                    style={Base.button}
                    // onPress={() => {
                    //     navigation.navigate("InvoiceForm");
                    // }}
                >
                    <Text style={Typography.btnText}>Skapa ny faktura</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
