import { createNativeStackNavigator } from "@react-navigation/native-stack";

// COMPONENTS
import OrderList from "../order/OrderList";
import PickList from "../plock/PickList";

const Stack = createNativeStackNavigator();

export default function Pick({route, navigation, setProducts, products}) {
    return (
        <Stack.Navigator initialRouteName="OrderList">
            <Stack.Screen name="OrderList" component={OrderList} />
            <Stack.Screen name="Details">
                {() => <PickList setProducts={setProducts} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
}
