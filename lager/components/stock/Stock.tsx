import { useEffect } from "react";

import { Text, ScrollView } from "react-native";
import config from "../../config/config.json";
import { Base, Typography } from "../../styles";

import StockList from "./StockList";
import productModel from '../../models/products'

export default function Stock({ products, setProducts }) {
    useEffect(async () => {
        setProducts(await productModel.getProducts());
    }, []);
    
    return (
        <ScrollView style={Base.container}>
            <Text style={Typography.title}>Lagerförteckning</Text>
            <StockList products={products} />
        </ScrollView>
    );
}
