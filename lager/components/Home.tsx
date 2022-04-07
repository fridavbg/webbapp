import React, { useEffect } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";
import warehouse from "../assets/images/library.jpg";
import {
    useFonts,
    Oswald_200ExtraLight,
    Oswald_300Light,
    Oswald_400Regular,
    Oswald_500Medium,
    Oswald_600SemiBold,
    Oswald_700Bold,
} from "@expo-google-fonts/oswald";

export default function Home() {
    let [fontsLoaded] = useFonts({
        Oswald_200ExtraLight,
        Oswald_300Light,
        Oswald_400Regular,
        Oswald_500Medium,
        Oswald_600SemiBold,
        Oswald_700Bold,
    });
    const { landscape } = useDeviceOrientation();
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Welcome</Text>
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

const styles = StyleSheet.create({
    header: {
        padding: 15,
        alignSelf: "stretch",
        backgroundColor: "#4E6766",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        color: "#A5C882",
        fontSize: 32,
        textAlign: "center",
        paddingBottom: 12,
        fontFamily: "Oswald_600SemiBold",
    },
});
