import config from "../config/config.json";

import Deliveries from "../interfaces/delivery";

const deliveries = {
    getDeliveries: async function getDeliveries(): Promise<Deliveries[]> {
        const response = await fetch(
            `${config.base_url}/deliveries?api_key=${config.api_key}`
        );
        const result = await response.json();

        return result.data;
    },
    addDelivery: async function addDelivery(delivery) {
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
    setDelivery: async function setDelivery(delivery) {
        try {
            await fetch(`${config.base_url}/deliveries?`, {
                body: JSON.stringify(delivery),
                headers: {
                    "content-type": "application/json",
                },
                method: "PUT",
            });
        } catch (error) {
            console.log("Could not add delivery: ", error);
        }
    },
};

export default deliveries;
