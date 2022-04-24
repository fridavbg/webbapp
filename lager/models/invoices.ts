import config from "../config/config.json";
import storage from "./storage";

const invoices = {
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

    addInvoice: async function addInvoice(invoice: Partial<Invoice>) {
        console.log(invoice);
    },
};

export default invoices;
