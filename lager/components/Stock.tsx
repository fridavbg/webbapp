import { useState, useEffect, Component } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import {
    useFonts,
    Oswald_200ExtraLight,
    Oswald_300Light,
    Oswald_400Regular,
    Oswald_500Medium,
    Oswald_600SemiBold,
    Oswald_700Bold,
} from "@expo-google-fonts/oswald";
import config from "../config/config.json";

function StockList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`${config.base_url}/products?api_key=${config.api_key}`)
            .then((response) => response.json())
            .then((result) => setProducts(result.data));
    }, []);

    const list = products.map((product, index) => (
        <Text key={index} style={styles.stock}>
            {product.name} - {product.stock}
        </Text>
    ));

    return <View>{list}</View>;
}

export default function Stock() {
    let [fontsLoaded] = useFonts({
        Oswald_200ExtraLight,
        Oswald_300Light,
        Oswald_400Regular,
        Oswald_500Medium,
        Oswald_600SemiBold,
        Oswald_700Bold,
    });
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Lagerförteckning</Text>
            <StockList />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 8,
        paddingRight: 8,
        backgroundColor: "#4E6766",
    },
    title: {
        color: "#ACD7EC",
        fontSize: 34,
        textAlign: "center",
        paddingBottom: 12,
        textDecorationLine: "underline",
        fontFamily: "Oswald_700Bold",
    },
    stock: {
        borderWidth: 3,
        borderStyle: "solid",
        borderRadius: 10,
        fontSize: 20,
        color: "#D6EDFF",
        marginBottom: 5,
        padding: 8,
        textAlign: "center",
        fontFamily: "Oswald_500Medium",
    },
});
