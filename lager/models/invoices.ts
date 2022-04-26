import config from "../config/config.json";
import storage from "./storage";
import Invoice from "../interfaces/invoice";

const invoices = {
    /**
     * Get all orders 
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
     * Takes user input - due date ?? 
     * @returns 
     */

    addInvoice: async function addInvoice(invoice: Partial<Invoice>) {
        console.log(invoice);
        const newInvoice = {
            ...invoice,
            id: invoice.id,
            api_key: config.api_key
        };
        try {
            await fetch(`${config.base_url}/deliveries?`, {
                body: JSON.stringify(newInvoice),
                headers: {
                    "content-type": "application/json",
                },
                method: "POST",
            });
        } catch (error) {
            console.log("Unable to create invoice: ", error);
        }
    },
};

export default invoices;
