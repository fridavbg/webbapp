import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import {
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    Platform,
} from "react-native";
import { Base, Typography, Form } from "../../styles";
import Moment from "moment";

export default function DateDropDown(props) {
    const [dropDownDate, setDropDownDate] = useState<Date>(new Date());
    const [show, setShow] = useState<Boolean>(false);

    const showDatePicker = () => {
        setShow(true);
    };
    return (
        <View>
            {Platform.OS === "android" && (
                <TouchableOpacity
                    style={Base.button}
                    onPress={showDatePicker}
                    onChange={(_event: any, date: any) => {
                        setDropDownDate(date || new Date());
                        props.setDelivery({
                            ...props.delivery,
                            creation_date: date.toLocaleDateString("se-SV"),
                        });
                    }}
                >
                    <Text style={Typography.btnText}>Visa datumväljare</Text>
                </TouchableOpacity>
            )}
            {(show || Platform.OS === "ios") && (
                <DateTimePicker
                    onChange={(_event: any, date: any) => {
                        setDropDownDate(date || new Date());
                        props.setInvoice({
                            ...props.invoice,
                            creation_date: Moment(date).format("DD-MM-YYYY"),
                        })
                        setShow(false);
                    }}
                    value={dropDownDate}
                />
            )}
        </View>
    );
}
