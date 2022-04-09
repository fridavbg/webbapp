import React, { useEffect } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";
import warehouse from "../assets/images/library.jpg";


export default function Home() {
    const { landscape } = useDeviceOrientation();
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Welcome</Text>
            <Text style={styles.title1}>Welcome</Text>
            <Text style={styles.title2}>Welcome</Text>
            <Text style={styles.title3}>Welcome</Text>
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
    },
    title1: {
        color: "#A5C882",
        fontSize: 32,
        textAlign: "center",
        paddingBottom: 12,
    },
    title2: {
        color: "#A5C882",
        fontSize: 32,
        textAlign: "center",
        paddingBottom: 12,
    },
    title3: {
        color: "#A5C882",
        fontSize: 32,
        textAlign: "center",
        paddingBottom: 12,
    },
});
