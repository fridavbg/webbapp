import { useState, useEffect, Component } from "react";
import { StyleSheet, Text, View } from "react-native";

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
        <View>
            <Text style={styles.title}>Lagerförteckning</Text>
            <StockList />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        color: "#ACD7EC",
        fontSize: 34,
        textAlign: "center",
    },
    stock: {
        borderWidth: 3,
        borderStyle: "solid",
        borderRadius: 10,
        fontSize: 20,
        color: "#D6EDFF",
        marginBottom: 5,
        padding: 5,
        textAlign: "center",
    },
});
