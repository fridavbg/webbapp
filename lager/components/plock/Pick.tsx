import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect } from "react";

// COMPONENTS
import OrderList from "../order/OrderList";
import PickList from "../plock/PickList";
import productModel from "../../models/products";

const Stack = createNativeStackNavigator();

export default function Pick({setProducts, products}) {
    
    useEffect(async () => {
        setProducts(await productModel.getProducts());
    }, []);

    return (
        <Stack.Navigator initialRouteName="OrderList">
            <Stack.Screen name="OrderList">
                {(screenProps) => <OrderList {...screenProps} />}
            </Stack.Screen>
            <Stack.Screen name="Details">
                {(screenProps) => <PickList {...screenProps} setProducts={setProducts} products={products} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
}
