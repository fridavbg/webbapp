import config from "../config/config.json";
import storage from "./storage";
import Invoice from "../interfaces/invoice";
import orderModel from "./orders";
import Moment from "moment";
import { Item } from "react-native-paper/lib/typescript/components/List/List";

const invoices = {
    /**
     * Get all invoices
     * @returns array
     */
    getInvoices: async function getInvoices(): Promise<Invoice[]> {
        const token = await storage.readToken();
        const response = await fetch(
            `${config.base_url}/invoices?api_key=${config.api_key}`,
            {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                    "x-access-token": token.token,
                },
            }
        );
        const result = await response.json();
        return result.data;
    },

    /**
     * Create Invoice
     * @returns array
     */

    addInvoice: async function addInvoice(invoice: Partial<Invoice>) {
        // GET ORDER BY ID
        // let order = await orderModel.packOrder(invoice.order_id);
        let order = await orderModel.getOrders();

        const token = await storage.readToken();

        console.log(addInvoice);
        console.log(order);

        // let totalPrice = order.order_items.reduce((price, item)) {
        //     return price + item.amount * item.price;
        // }, 0);

        const newInvoice = {
            ...invoice,
            order_id: invoice.order_id,
            // FIX PRICE - GET ORDER.ORDER_ITEMS
            total_price: 100,
            creation_date: Moment(new Date()).format("DD-MM-YYYY"),
            due_date: invoice.due_date,
            api_key: config.api_key,
        };
        console.log("INVOICE: ");
        console.log(invoice);

        try {
            await fetch(`${config.base_url}/invoices?`, {
                body: JSON.stringify(newInvoice),
                headers: {
                    "content-type": "application/json",
                    "x-access-token": token.token,
                },
                method: "POST",
            });
        } catch (error) {
            console.log("Unable to create invoice: ", error);
        }
    },
};

export default invoices;
