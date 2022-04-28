import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useEffect, useState } from "react";

import InvoicesList from "./InvoicesList";
import InvoiceForm from "./InvoiceForm";

const Stack = createNativeStackNavigator();

export default function Invoices() {
    const [invoices, setInvoices] = useState([]);
    return (
        <Stack.Navigator initialRouteName="Invoices">
            <Stack.Screen name="Invoice List">
                {(screenProps) => (
                    <InvoicesList
                        {...screenProps}
                        invoices={invoices}
                        setInvoices={setInvoices}
                    />
                )}
            </Stack.Screen>
            <Stack.Screen name="InvoiceForm">
                {(screenProps) => <InvoiceForm {...screenProps} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
}
