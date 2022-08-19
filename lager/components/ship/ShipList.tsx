import { View, Button, Text } from "react-native";
import { useState, useEffect } from "react";

export default function ShipList({ navigation }) {
    return (
        <View>
            <Text>Orders to be shipped</Text>
            <Button
                title="Fejk order"
                key="0"
                onPress={() => {
                    navigation.navigate('Order', {
                        order: {
                            "id": 1,
                            "name": "Frida Persson",
                            "address": "Carrer del Baluard 11",
                            "zip": "08003",
                            "city": "Barcelona",
                            "status": "Packad",
                            "status_id": "200"
                        }
                    });
                }}
            />
        </View>
    );
}
