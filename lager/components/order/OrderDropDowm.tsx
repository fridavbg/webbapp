import { Picker } from "@react-native-picker/picker";
import { useState, useEffect } from "react";
import { Text } from "react-native";
import orderModel from "../../models/orders";

/**
 * Create dropdown for orders
 * KRASHAR !!!
 * TypeError: undefined is not a function (near '...orders.map...')
 * @returns Picker || string
 */
export default function OrderDropDown(props) {
    const [orders, setOrders] = useState<Orders[]>([]);
    let orderHash: any = {};

    useEffect(async () => {
        console.log(orders);
        setOrders(await orderModel.getOrders());
    }, []);

    /**
     *  Create orderlist to be displayed in Picker
     * @returns Picker.Item || message
     */

    const orderList = orders.map((order, index) => {
        orderHash[order.id] = order;
        // if (order.status !== "Fakturerad") {
        return <Picker.Item key={index} label={order.name} value={order.id} />;
        // }
        // return <Text>All orders have been invoiced</Text>;
    });

    if (orderList.length > 1) {
        return (
            <Picker
                selectedValue={orders?.id}
                // onValueChange={(itemValue) => {
                //     setOrders({ ...orders, id: itemValue });
                //     props.setCurrentOrder[orderHash[itemValue]];
                // }}
            >
                {orderList}
            </Picker>
        );
    }
    return <Text>No orders available</Text>;
}
