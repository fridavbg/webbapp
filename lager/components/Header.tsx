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

export default function Header() {
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
                Lager-Appen
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: 15,
        alignSelf: "stretch",
        backgroundColor: "#241623",
    },
    title: {
        color: "#A5C882",
        fontSize: 32,
        textAlign: "center",
        fontFamily: "Oswald_600SemiBold",
    },
});
