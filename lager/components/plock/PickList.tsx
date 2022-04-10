import { useEffect, useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { Base, Typography } from "../../styles";

import orderModel from "../../models/orders";
import productModel from "../../models/products";

export default function PickList({ route, navigation }) {
    const { order } = route.params;
    const [products, setProducts] = useState([]);

    useEffect(async () => {
        setProducts(await productModel.getProducts());
    }, []);

    async function pick() {
        await orderModel.pickOrder(order);
        navigation.navigate("OrderList"), { reload: true };
    }

    const orderItemsList = order.order_items.map((item, index) => {
        return (
            <Text key={index} style={Base.listItem}>
                {"-"} {item.name} {"\n"} {"-"} {item.amount} {"\n"} {"-"}{" "}
                {item.location}
                {"\n"}
            </Text>
        );
    });

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
                {/* BUTTON */}
                <TouchableOpacity
                    style={Base.button}
                    onPress={pick}
                >
                    <Text style={Typography.btnText}
                    >Plocka order</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

