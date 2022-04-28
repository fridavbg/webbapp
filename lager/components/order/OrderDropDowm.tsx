import { Picker } from "@react-native-picker/picker";
import { useState, useEffect } from "react";
import { Text } from "react-native";
import orderModel from "../../models/orders";
import invoiceModel from "../../models/invoices";

/**
 * Create dropdown for orders
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
     *  Create invoice to be displayed in Picker
     * @returns Picker.Item || message
     */

    const orderList = orders.map((order, index) => {
        orderHash[order.id] = order;
        return <Picker.Item key={index} label={order.name} value={order.id} />;
    });

    if (orderList.length > 1) {
        return (
            <Picker
                selectedValue={props.invoice?.order_id}
                onValueChange={(itemValue) => {
                    props.setInvoice({ ...props.invoice, order_id: itemValue });
                    props.setCurrentOrder[orderHash[itemValue]];
                }}
            >
                {orderList}
            </Picker>
        );
    }
    return <Text>Inga ordrar tillgängliga</Text>;
}
