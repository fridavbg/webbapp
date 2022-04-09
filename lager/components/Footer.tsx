import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Footer() {
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
        fontSize: 24,
        textAlign: "center",
        fontFamily: 'Arvo_Italic'
    },
});
