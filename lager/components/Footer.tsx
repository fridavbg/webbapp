import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
    useFonts,
    Oswald_200ExtraLight,
    Oswald_300Light,
    Oswald_400Regular,
    Oswald_500Medium,
    Oswald_600SemiBold,
    Oswald_700Bold,
} from "@expo-google-fonts/oswald";

export default function Footer() {
    let [fontsLoaded] = useFonts({
        Oswald_200ExtraLight,
        Oswald_300Light,
        Oswald_400Regular,
        Oswald_500Medium,
        Oswald_600SemiBold,
        Oswald_700Bold,
    });
    return (
        <View style={styles.header}>
            <Text style={styles.title} numberOfLines={1}>
                Made by Frida
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: 15,
        backgroundColor: "#241623",
        alignSelf: "stretch",
    },
    title: {
        color: "#A5C882",
        fontSize: 32,
        textAlign: "center",
        fontFamily: "Oswald_400Regular",
    },
});
