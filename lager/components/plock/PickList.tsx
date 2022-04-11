import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Base, Typography } from "../../styles";

import orderModel from "../../models/orders";
import productModel from "../../models/products";

export default function PickList({ route, navigation, setProducts, products }) {
    const { order } = route.params;
    let inStock = true;

    async function pickOrder() {
        await orderModel.pickOrder(order);
        setProducts(await productModel.getProducts());
        navigation.navigate("OrderList"), { reload: true };
    }

    const orderItemsList = order.order_items.map((item, index) => {
        if (item.amount > item.stock) {
            inStock = false;
        }
        return (
            <Text key={index} style={Base.listItem}>
                ID: {"\n"} {item.product_id} {"\n"}
                NAME: {"\n"} {item.name} {"\n"}
                AMOUNT: {"\n"} {item.amount} {"\n"}
                SHELF: {"\n"} {item.location} {"\n"}
            </Text>
        );
    });

    if (inStock) {
        return (
            <ScrollView>
                <View style={[Base.container, Base.center]}>
                    <Text style={Typography.text}>{order.name}</Text>
                    <Text style={Typography.text}>{order.address}</Text>
                    <Text style={Typography.text}>
                        {order.zip} {order.city}
                    </Text>

                    <Text style={Typography.text}>Produkter:</Text>
                    {orderItemsList}
                    {products.amount}
                    {/* BUTTON */}
                    <TouchableOpacity style={Base.button} onPress={pickOrder}>
                        <Text style={Typography.btnText}>Plocka order</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
    return (
        <ScrollView>
            <View style={[Base.container, Base.center]}>
                <Text style={Typography.text}>{order.name}</Text>
                <Text style={Typography.text}>{order.address}</Text>
                <Text style={Typography.text}>
                    {order.zip} {order.city}
                </Text>

                <Text style={Typography.text}>Produkter:</Text>
                {orderItemsList}
                {products.amount}
                <Text style={Typography.btnText}>Out of stock</Text>
            </View>
        </ScrollView>
    );
}
