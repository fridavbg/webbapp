import { Text } from "react-native";
import { DataTable } from "react-native-paper";
export default function InvoiceTable({invoices}) {
    const table = invoices.map((invoice, index) => {
        return (
            <DataTable.Row key={index}>
                <DataTable.Cell numeric>{invoice.id}</DataTable.Cell>
                <DataTable.Cell numeric>{invoice.id}</DataTable.Cell>
            </DataTable.Row>
        );
    });
    return (
        <DataTable>
            <DataTable.Title>ID</DataTable.Title>
            <DataTable.Title>ID</DataTable.Title>
            <DataTable.Title>ID</DataTable.Title>
            <DataTable.Title>ID</DataTable.Title>
            <DataTable.Title>ID</DataTable.Title>
            <DataTable.Title>ID</DataTable.Title>

            <DataTable.Header>{table}</DataTable.Header>
        </DataTable>
    );
}
