import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useEffect, useState } from "react";

import InvoicesList from "./InvoicesList";

const Stack = createNativeStackNavigator();

export default function Invoices() {
    const [invoices, setInvoices] = useState([]);
    return (
        <Stack.Navigator initialRouteName="Faktura">
            <Stack.Screen name="Fakturor">
                {(screenProps) => (
                    <InvoicesList
                        {...screenProps}
                        invoices={invoices}
                        setInvoices={setInvoices}
                    />
                )}
            </Stack.Screen>
        </Stack.Navigator>
    );
}
