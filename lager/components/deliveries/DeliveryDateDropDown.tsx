import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity } from "react-native";
import Moment from "moment";

import DateTimePicker from "@react-native-community/datetimepicker";

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
                            delivery_date: date.toLocaleDateString("se-SV"),
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
                        props.setDelivery({
                            ...props.delivery,
                            delivery_date: Moment(date).format("DD-MM-YYYY"),
                        });
                        setShow(false);
                    }}
                    value={dropDownDate}
                />
            )}
        </View>
    );
}
