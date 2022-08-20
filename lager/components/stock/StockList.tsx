import { ScrollView, Text, View } from "react-native";
import { Base } from "../../styles";
import { useEffect } from "react";
import productModel from "../../models/products";


export default function StockList({ route, products, setProducts }) {
    const { reload } = route.params || true;

    if (reload) {
        reloadProducts();
    }
    async function reloadProducts() {
        setProducts(await productModel.getProducts());
    }
    useEffect(() => {
        reloadProducts();
    }, []);
    const productList = products.map((product, index) => (
        <Text key={index} style={Base.listItem}>
            ID: {"\n"} {product.id} {"\n"}
            BOOKNAME: {"\n"} {product.name} {"\n"}
            AMOUNT: {"\n"} {product.stock}
        </Text>
    ));

    return <ScrollView>{productList}</ScrollView>;
}
