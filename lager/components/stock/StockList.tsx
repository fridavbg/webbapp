import { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { Base } from '../../styles';

import productModel from '../../models/products';

export default function StockList({products, setProducts}) {
    useEffect(async () => {
            setProducts(await productModel.getProducts())
    }, []);

    const list = products.map((product, index) => (
        <Text key={index} style={Base.listItem}>
            {product.name} - {product.stock}
        </Text>
    ));

    return <View>{list}</View>;
}

