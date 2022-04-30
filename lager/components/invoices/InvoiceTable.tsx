import { Text } from "react-native";
import { useEffect } from "react";
import { DataTable } from "react-native-paper";
import invoiceModel from "../../models/invoices";

export default function InvoiceTable({ route, invoices, setInvoices }) {
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

    const table2 = invoices.map((invoice, index) => {
        return (
            <DataTable.Row key={index}>
                <DataTable.Cell numeric>{invoice.id}</DataTable.Cell>
                <DataTable.Cell numeric>{invoice.creation_date}</DataTable.Cell>
                <DataTable.Cell numeric>{invoice.due_date}</DataTable.Cell>
                <DataTable.Cell numeric>{invoice.order_id}</DataTable.Cell>
                <DataTable.Cell numeric>{invoice.name}</DataTable.Cell>
                <DataTable.Cell numeric>{invoice.total_price}</DataTable.Cell>
            </DataTable.Row>
        );
    });

    return (
        <DataTable>
            <DataTable.Header>
                <DataTable.Title>ID:</DataTable.Title>
                <DataTable.Title>Creation date:</DataTable.Title>
                <DataTable.Title>Due date: </DataTable.Title>
                <DataTable.Title>Order ID: </DataTable.Title>
                <DataTable.Title>Name: </DataTable.Title>
                <DataTable.Title>Total price: </DataTable.Title>
            </DataTable.Header>
            {table2}
        </DataTable>
    );
}
