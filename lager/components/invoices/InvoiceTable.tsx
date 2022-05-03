import { ScrollView, Text } from "react-native";
import { useEffect } from "react";
import { DataTable } from "react-native-paper";
import { Form, Typography } from "../../styles";

export default function InvoiceTable({ route, invoices, setInvoices }) {
    const table = invoices.map((invoice, index) => {
        return (
            <DataTable.Row key={index} style={Form.tableTd}>
                <DataTable.Cell style={Form.numberCell} numeric>
                    {invoice.id}
                </DataTable.Cell>
                <DataTable.Cell style={Form.numberCell}>
                    {invoice.due_date}
                </DataTable.Cell>
                <DataTable.Cell style={Form.numberCell} numeric>
                    {invoice.order_id}
                </DataTable.Cell>
                <DataTable.Cell style={Form.numberCell}>
                    {invoice.name}
                </DataTable.Cell>
                <DataTable.Cell style={Form.numberCell} numeric>
                    {invoice.total_price}
                </DataTable.Cell>
            </DataTable.Row>
        );
    });

    if (table.length > 0) {
        return (
            <DataTable style={Form.table}>
                <DataTable.Header style={Form.tableTh}>
                    <DataTable.Title>ID:</DataTable.Title>
                    <DataTable.Title>Due date: </DataTable.Title>
                    <DataTable.Title>Order ID: </DataTable.Title>
                    <DataTable.Title>Name: </DataTable.Title>
                    <DataTable.Title>Total price: </DataTable.Title>
                </DataTable.Header>
                {table}
            </DataTable>
        );
    }
    return <Text style={Typography.errMsg}>No Invoices has been created</Text>;
}
