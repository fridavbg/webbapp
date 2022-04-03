import React from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";
import warehouse from "../assets/warehouse.jpeg";

export default function Welcome() {
    const { landscape } = useDeviceOrientation();

    return (
        <View>
            <Text
                style={{
                    color: "#A5C882",
                    fontSize: 42,
                    textAlign: "center",
                    paddingTop: 15,
                }}
                numberOfLines={1}
            >
                Lager-Appen
            </Text>
            <TouchableOpacity
                onPress={() => {
                    Alert.alert("Image of a", "Warehouse");
                }}
            >
                <Image
                    source={warehouse}
                    style={{
                        width: landscape ? 450 : 300,
                        height: landscape ? 300 : 240,
                        margin: 15,
                        borderRadius: 10,
                    }}
                />
            </TouchableOpacity>
        </View>
    );
}
