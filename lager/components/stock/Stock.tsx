import { useState, useEffect, Component } from "react";
import { Text, View, ScrollView, FlatList } from "react-native";
import config from "../../config/config.json";
import { Base, Typography } from '../../styles';


function StockList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`${config.base_url}/products?api_key=${config.api_key}`)
            .then((response) => response.json())
            .then((result) => setProducts(result.data));
    }, []);

    const list = products.map((product, index) => (
        <Text key={index} style={Base.listItem}>
            {product.name} - {product.stock}
        </Text>
    ));

    return <View>{list}</View>;
}

export default function Stock() {
    return (
        <ScrollView style={Base.container}>
            <Text style={Typography.title}>Lagerförteckning</Text>
            <StockList />
        </ScrollView>
    );
}
