import { Picker } from "@react-native-picker/picker";
import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import orderModel from "../../models/orders";
import invoiceModel from "../../models/invoices";
import { Typography } from "../../styles";

/**
 * Create dropdown for orders
 * @returns Picker || string
 */
export default function OrderDropDown(props) {
    const [orders, setOrders] = useState<Orders[]>([]);
    let orderHash: any = {};

    useEffect(async () => {
        setOrders(await orderModel.getOrders());
    }, []);

    /**
     *  Create invoice to be displayed in Picker
     * @returns Picker.Item || message
     */

    const orderList = orders
        .filter((order) => order.status_id === 200)
        .map((order, index) => {
            orderHash[order.id] = order;
            return (
                <Picker.Item key={index} label={order.name} value={order.id} />
            );
        });

    if (orderList.length > 0) {
        return (
            <Picker
                selectedValue={props.invoice?.order_id}
                onValueChange={(itemValue) => {
                    props.setInvoice({ ...props.invoice, order_id: itemValue });
                }}
            >

                {orderList}
            </Picker>
        );
    }
    return (
        <View>
            <Text style={Typography.errMsg}>No orders has been picked</Text>
            <Text style={Typography.infoMsg}>
                Go to pick in order {"\n"} to pack an order
            </Text>
        </View>
    );
}
