import { View, ScrollView, Text, TouchableOpacity, Button } from "react-native";
import { useEffect } from "react";
import { Base, Typography } from "../../styles";
import invoiceModel from "../../models/invoices";
import authModel from "../../models/auth";

export default function InvoicesList({
    route,
    navigation,
    invoices,
    setInvoices,
}) {
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
                NAME: {invoice.name} {"\n"}
            </Text>
        );
    });

    if (invoiceList.length > 0) {
        return (
            <ScrollView>
                <View style={Base.container}>
                    <Text style={Typography.title}>Invoice</Text>
                    {invoiceList}
                    <TouchableOpacity
                        style={Base.button}
                        onPress={() => {
                            navigation.navigate("InvoiceForm");
                        }}
                    >
                        <Text style={Typography.btnText}>New invoice</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={Base.button}
                        onPress={() => {
                            authModel.logout();
                            navigation.navigate("Home", { reload: true });
                        }}
                    >
                        <Text style={Typography.btnText}>Log out</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
    return (
        <ScrollView>
            <View style={Base.container}>
                <Text style={Typography.title}>Invoices</Text>
                <Text style={Typography.errMsg}>No Invoices</Text>
                <TouchableOpacity
                    style={Base.button}
                    onPress={() => {
                        navigation.navigate("InvoiceForm");
                    }}
                >
                    <Text style={Typography.btnText}>New Invoice</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={Base.button}
                    onPress={() => {
                        authModel.logout();
                        navigation.navigate("Home", { reload: true });
                    }}
                >
                    <Text style={Typography.btnText}>Log out</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
