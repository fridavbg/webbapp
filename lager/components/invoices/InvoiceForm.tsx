import { ScrollView, Text } from "react-native";
import { Base, Typography, Form } from "../../styles";
import DateDropDown from "../incl/DateDropDown";

export default function InvoiceForm({ navigation }) {
    return (
        <ScrollView style={{ ...Base.container }}>
            <Text style={{ ...Typography.title }}>INVOICE FORM</Text>
            <DateDropDown />
        </ScrollView>
    );
}
