import { View, ScrollView, Text, TouchableOpacity, Button } from "react-native";
import { Base, Typography } from "../../styles";

export default function InvoicesList({ invoices }) {
    const invoiceList = invoices.map((invoice, index) => { 
        <Text key={index} style={Base.listItem}>

        </Text>
    })
    return (
        <View style={Base.container}>
            <Text>
            Faktura Lista
            {typeof(invoices)}
            </Text>
        </View>
    );
}
