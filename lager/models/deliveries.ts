import config from "../config/config.json";
import Delivery from "../interfaces/delivery";
import { updateProduct } from "./products";

import products from "./products";

const deliveries = {
    getDeliveries: async function getDeliveries(): Promise<Delivery[]> {
        const response = await fetch(
            `${config.base_url}/deliveries?api_key=${config.api_key}`
        );
        const result = await response.json();

        return result.data;
    },

    addDelivery: async function addDelivery(delivery: Partial<Delivery>) {
        console.log(delivery);
        const newDelivery = {
            ...delivery,
            product_id: delivery.product_id,
            api_key: config.api_key,
        };

        try {
            await fetch(`${config.base_url}/deliveries?`, {
                body: JSON.stringify(newDelivery),
                headers: {
                    "content-type": "application/json",
                },
                method: "POST",
            });
        } catch (error) {
            console.log("Delivery didn't go through: ", error);
        }
    },
};

export default deliveries;
