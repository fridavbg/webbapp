import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect } from "react";

import { Text, ScrollView } from "react-native";
import { Base, Typography } from "../../styles";

import StockList from "./StockList";
import productModel from "../../models/products";

const Stack = createNativeStackNavigator();

export default function Stock({ products, setProducts }) {
    return (
        <Stack.Navigator initialRouteName="Stock">
            <Stack.Screen name="Lagerförteckning">
                {(screenProps) => (
                    <StockList {...screenProps} products={products} setProducts={setProducts}/>
                )}
            </Stack.Screen>
        </Stack.Navigator>
    );
}
