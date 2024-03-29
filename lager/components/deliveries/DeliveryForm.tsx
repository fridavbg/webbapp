import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity } from "react-native";
import { Base, Typography, Form } from "../../styles";
import Delivery from "../../interfaces/delivery";
import deliveryModel from "../../models/deliveries";
import productModel from "../../models/products";
import ProductDropDown from "../products/ProductsDropDown";
import Product from "../products/";
import DateDropDown from "../deliveries/DeliveryDateDropDown";
import { showMessage } from "react-native-flash-message";

export default function DeliveryForm({ navigation }) {
    const [delivery, setDelivery] = useState<Partial<Delivery>>({});
    const [currentProduct, setCurrentProduct] = useState<Partial<Product>>({});

    async function addDelivery(props) {
        if (
            props.product_id &&
            props.delivery_date &&
            props.amount &&
            props.comment
        ) {
            await deliveryModel.addDelivery(delivery);
            const updatedProduct = {
                ...currentProduct,
                stock: (currentProduct.stock || 0) + (delivery.amount || 0),
            };

            const result = await productModel.updateProduct(updatedProduct);

            navigation.navigate("DeliveryList", { reload: true });
        } else {
            showMessage({
                message: "Saknas",
                description: "Är alla fält ifyllda?",
                type: "warning",
            });
        }
    }

    return (
        <ScrollView style={{ ...Base.container }}>
            <Text style={{ ...Typography.title }}>New delivery</Text>
            <Text style={{ ...Typography.label }}>Book</Text>
            <ProductDropDown
                delivery={delivery}
                setDelivery={setDelivery}
                setCurrentProduct={setCurrentProduct}
            />
            <Text style={{ ...Typography.label }}>Date</Text>
            <DateDropDown
                delivery={delivery}
                setDelivery={setDelivery}
                setCurrentProduct={setCurrentProduct}
            />
            <Text style={{ ...Typography.label }}>Amount</Text>
            <TextInput
                style={{ ...Form.input }}
                value={Number}
                onChangeText={(content: string) => {
                    setDelivery({ ...delivery, amount: parseInt(content) });
                }}
                value={delivery?.amount?.toString()}
                keyboardType="numeric"
            />
            <Text style={{ ...Typography.label }}>Comment</Text>
            <TextInput
                style={{ ...Form.input }}
                value={Text}
                onChangeText={(content: string) => {
                    setDelivery({ ...delivery, comment: content });
                }}
                value={delivery?.comment}
            />

            <TouchableOpacity
                style={{ ...Base.button }}
                onPress={() => {
                    addDelivery({ ...delivery });
                }}
            >
                <Text style={{ ...Typography.btnText }}>Make delivery</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
