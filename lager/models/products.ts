import config from "../config/config.json";

const orders = {
    getProducts: async function getProducts(): Promise<Products[]> {
        const response = await fetch(
            `${config.base_url}/products?api_key=${config.api_key}`
        );
        const result = await response.json();

        return result.data;
    },
    updateProduct: async function updateProduct(product: any) {
        const updateProduct = {
            ...product,
            stock: product.stock,
            api_key: config.api_key,
        };
        try {
            await fetch(`${config.base_url}/products?`, {
                body: JSON.stringify(updateProduct),
                headers: {
                    "content-type": "application/json",
                },
                method: "PUT",
            });
        } catch (error) {
            console.log("Could not update product: ", error);
        }
    },
};

export default orders;
