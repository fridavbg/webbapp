import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title} numberOfLines={1}>
                Lager-App
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
        fontSize: 48,
        textAlign: "center",
    },
});
