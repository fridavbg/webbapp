import React from "react";
import { View, Image, TouchableOpacity, Alert } from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";
import warehouse from "../assets/images/library.jpg";

export default function Welcome() {
    const { landscape } = useDeviceOrientation();
    return (
        <View>
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
