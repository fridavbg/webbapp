// components/DeliveryForm.tsx
import { useState, useEffect } from "react";
import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    Button,
    View,
    Platform,
} from "react-native";
import { Base, Typography, Form } from "../../styles";
import DateTimePicker from "@react-native-community/datetimepicker";

import Delivery from "../interfaces/delivery";
import deliveryModel from "../../models/deliveries";
import productModel from "../../models/products";
import ProductDropDown from "../products/ProductsDropDown";

export default function DeliveryForm({ navigation }) {
    const [delivery, setDelivery] = useState<Partial<Delivery>>({});
    const [currentProduct, setCurrentProduct] = useState<Partial<Product>>({});

    function DateDropDown(props) {
        const [dropDownDate, setDropDownDate] = useState<Date>(new Date());
        const [currentDate, setCurrentDate] = useState("");

        const [show, setShow] = useState<Boolean>(false);

        const showDatePicker = () => {
            setShow(true);
        };

        return (
            <View>
                {Platform.OS === "android" && (
                    <Button
                        onPress={showDatePicker}
                        title="Visa datumväljare"
                        style={Base.button}
                        setCurrentDate={dropDownDate}
                        value={dropDownDate}
                    />
                )}
                {(show || Platform.OS === "ios") && (
                    <DateTimePicker
                        onChange={(event, date) => {
                            setDropDownDate(date);

                            props.setDelivery({
                                ...props.delivery,
                                delivery_date: date.toLocaleDateString("se-SV"),
                            });
                            setShow(false);
                        }}
                        value={dropDownDate}
                    />
                )}
            </View>
        );
    }

    async function addDelivery(props) {
        await deliveryModel.addDelivery(delivery);
        const updatedProduct = {
            ...currentProduct,
            stock: (currentProduct.stock || 0) + (delivery.amount || 0),
        };

        await productModel.updateProduct(updatedProduct);

        navigation.navigate("DeliveryList", { reload: true });
    }
    return (
        <ScrollView style={{ ...Base.container }}>
            <Text style={{ ...Typography.title }}>Ny inleverans</Text>
            <Text style={{ ...Typography.label }}>Produkt</Text>
            <ProductDropDown
                delivery={delivery}
                setDelivery={setDelivery}
                setCurrentProduct={setCurrentProduct}
            />
            <Text style={{ ...Typography.label }}>Datum</Text>
            <DateDropDown
                delivery={delivery}
                setDelivery={setDelivery}
                setCurrentProduct={setCurrentProduct}
            />
            <Text style={{ ...Typography.label }}>Antal</Text>
            <TextInput
                style={{ ...Form.input }}
                onChangeText={(content: string) => {
                    setDelivery({ ...delivery, amount: parseInt(content) });
                }}
                value={delivery?.amount?.toString()}
                keyboardType="numeric"
            />
            <Text style={{ ...Typography.label }}>Kommentar</Text>
            <TextInput
                style={{ ...Form.input }}
                onChangeText={(content: string) => {
                    setDelivery({ ...delivery, comment: content });
                }}
                value={delivery?.comment}
            />
            <TouchableOpacity
                style={{ ...Base.button }}
                onPress={() => {
                    addDelivery();
                }}
            >
                <Text style={{ ...Typography.btnText }}>Gör inleverans</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
