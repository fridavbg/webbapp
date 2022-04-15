import config from "../config/config.json";
import Delivery from "../interfaces/delivery";
// import { format } from "date-fns";

const deliveries = {
    getDeliveries: async function getDeliveries(): Promise<Delivery[]> {
        const response = await fetch(
            `${config.base_url}/deliveries?api_key=${config.api_key}`
        );
        const result = await response.json();

        return result.data;
    },

    addDelivery: async function addDelivery(delivery: Partial<Delivery>) {
        // ANDROID - DATUM
        // const date = new Date('YYYY-MM-DD')
        // format(date, delivery.delivery_date)
        console.log(delivery);
        try {
            await fetch(`${config.base_url}/deliveries?`, {
                body: JSON.stringify(delivery),
                headers: {
                    "content-type": "application/json",
                },
                method: "POST",
            });
        } catch (error) {
            console.log("Could not add delivery: ", error);
        }
    },
};

export default deliveries;
