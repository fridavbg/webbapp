import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import orderModel from "../../models/orders";
import { Base, Typography } from "../../styles";

export default function PickList({ route, navigation }) {
    const { order } = route.params;

    async function pick() {
        await orderModel.pickOrder(order);
        navigation.navigate("List");
    }

    const orderItemsList = order.order_items.map((item, index) => {
        return (
            <Text key={index}>
                {item.name} - {item.amount} - {item.location}
            </Text>
        );
    });

    return (
        <View style={ Base.container}>
            <Text style={Typography.text}>{order.name}</Text>
            <Text style={ Typography.text}>{order.address}</Text>
            <Text style={ Typography.text}>
                {order.zip} {order.city}
            </Text>

            <Text style={ Typography.text}>Produkter:</Text>

            {orderItemsList}
            <TouchableOpacity
                    style={Base.button}
                >
                    <Text style={Typography.btnText}>Plocka order</Text>
                </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: 15,
        alignSelf: "stretch",
        backgroundColor: "#4E6766",
    },
    title: {
        color: "#ACD7EC",
        fontSize: 32,
        textAlign: "center",
        paddingBottom: 12,
        fontFamily: "Arvo_Bold",
        textDecorationLine: "underline",
    },
});
