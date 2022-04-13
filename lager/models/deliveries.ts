import config from "../config/config.json";

import Deliveries from '../interfaces/delivery';


const deliveries = {
    getDeliveries: async function getDeliveries(): Promise<Deliveries[]> {
        const response = await fetch(`${config.base_url}/deliveries?api_key=${config.api_key}`);
        const result = await response.json();

        return result.data;
    },
}

export default deliveries;