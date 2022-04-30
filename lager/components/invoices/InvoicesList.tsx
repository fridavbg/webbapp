import { View, ScrollView, Text, TouchableOpacity, Button } from "react-native";
import { useEffect } from "react";
import { Base, Typography } from "../../styles";
import invoiceModel from "../../models/invoices";
import authModel from "../../models/auth";
import InvoiceTable from "./InvoiceTable";

export default function InvoicesList({
    route,
    navigation,
    invoices,
    setInvoices,
    setIsLoggedIn,
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

    async function logOut() {
        authModel.logout();
        setIsLoggedIn(false);
    }

        return (
            <ScrollView>
                <View style={Base.container}>
                    <Text style={Typography.title}>Invoice</Text>
                    <InvoiceTable
                        route={route}
                        invoices={invoices}
                        setInvoices={setInvoices}
                    />
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
