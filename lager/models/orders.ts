import config from "../config/config.json";

import products from "./products";

import Order from "../interfaces/order";
import Invoice from "../interfaces/invoice";

const orders = {
    getOrders: async function getOrders(): Promise<Order[]> {
        const response = await fetch(
            `${config.base_url}/orders?api_key=${config.api_key}`
        );
        const result = await response.json();

        return result.data;
    },

    pickOrder: async function pickOrder(order: Partial<Order>) {
        await Promise.all(
            order.order_items.map(async (order_item: Partial<Order>) => {
                let changedProduct = {
                    id: order_item.product_id,
                    name: order_item.name,
                    stock: order_item.stock - order_item.amount,
                    api_key: config.api_key,
                };
                await products.updateProduct(changedProduct);
            })
        );
        let changedOrder = {
            id: order.id,
            name: order.name,
            status_id: 200,
            api_key: config.api_key,
        };
        await orders.updateOrder(changedOrder);
    },

    getOneOrder: async function getOneOrder(order_id: any) {
        const response = await fetch(
            `${config.base_url}/orders/${order_id}?api_key=${config.api_key}`
        );
        const result = await response.json();

        return result.data;
    },

    updateOrder: async function updateOrder(order: Partial<Order>) {
        try {
            await fetch(`${config.base_url}/orders`, {
                body: JSON.stringify(order),
                headers: {
                    "content-type": "application/json",
                },
                method: "PUT",
            });
        } catch (error) {
            console.log("Could not update order: ", error);
        }
    },
};

export default orders;
