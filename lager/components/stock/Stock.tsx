import { Text, ScrollView } from "react-native";
import config from "../../config/config.json";
import { Base, Typography } from "../../styles";

import StockList from "./StockList";

export default function Stock({ products, setProducts}) {
    return (
        <ScrollView style={Base.container}>
            <Text style={Typography.title}>Lagerförteckning</Text>
            <StockList products={products} setProducts={setProducts} />
        </ScrollView>
    );
}
