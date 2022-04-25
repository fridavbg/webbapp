import { ScrollView, Text } from "react-native";
import { Base, Typography, Form } from "../../styles";
import DateDropDown from "../incl/DateDropDown";
import OrderDropDown from "../order/OrderDropDowm";

export default function InvoiceForm({ navigation }) {
    return (
        <ScrollView style={{ ...Base.container }}>
            <Text style={{ ...Typography.title }}>INVOICE FORM</Text>
            <OrderDropDown />
            <DateDropDown />
        </ScrollView>
    );
}
