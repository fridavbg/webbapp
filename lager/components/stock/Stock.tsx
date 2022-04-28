import { createNativeStackNavigator } from "@react-navigation/native-stack";

import StockList from "./StockList";

const Stack = createNativeStackNavigator();

export default function Stock({ products, setProducts }) {
    return (
        <Stack.Navigator initialRouteName="Stock">
            <Stack.Screen name="Inventory">
                {(screenProps) => (
                    <StockList
                        {...screenProps}
                        products={products}
                        setProducts={setProducts} />
                )}
            </Stack.Screen>
        </Stack.Navigator>
    );
}
