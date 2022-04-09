import { useState, useEffect, Component } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
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
        margin: 20,
        textDecorationLine: "underline",
        fontFamily: 'Arvo_Bold'
    },
    stock: {
        borderWidth: 3,
        borderStyle: "solid",
        borderRadius: 10,
        fontSize: 20,
        marginBottom: 5,
        padding: 8,
        textAlign: "center",
        color: "#ACD7EC",
        fontFamily: 'Arvo'
    },
});
