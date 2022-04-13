// components/DeliveryForm.tsx
import { useState } from "react";
import { ScrollView, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { Base, Typography, Form } from "../../styles";

import Delivery from "../interfaces/delivery";

export default function DeliveryForm({ navigation }) {
    const [delivery, setDelivery] = useState<Partial<Delivery>>({});

    return (
        <ScrollView style={{ ...Base.container }}>
            <Text style={{ ...Typography.title }}>Ny inleverans</Text>

            <Text style={{ ...Typography.label }}>Kommentar</Text>
            <TextInput
                style={{ ...Form.input }}
                onChangeText={(content: string) => {
                    setDelivery({ ...delivery, comment: content });
                }}
                value={delivery?.comment}
            />

            <TouchableOpacity
                style={{...Base.button}}
                onPress={() => {
                addDelivery();
                }}>
                <Text style={{ ...Typography.btnText }}>
                    Gör inleverans
                </Text>
            </TouchableOpacity>             
        </ScrollView>
    );
}
