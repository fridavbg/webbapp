import { Text, View } from "react-native";
import { Base } from "../../styles";

import productModel from "../../models/products";

export default function StockList({ products }) {
    const productList = products.map((product, index) => (
        <Text key={index} style={Base.listItem}>
            ID:
            {"\n"} {product.id} {"\n"}
            BOOKNAME: {"\n"} {product.name} {"\n"}
            AMOUNT: {"\n"} {product.stock}
        </Text>
    ));

    return <View>{productList}</View>;
}
