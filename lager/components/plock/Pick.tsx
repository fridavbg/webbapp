import { createNativeStackNavigator } from "@react-navigation/native-stack";

// COMPONENTS
import OrderList from "../order/OrderList";
import PickList from "../plock/PickList";

const Stack = createNativeStackNavigator();

export default function Pick() {
    return (
        <Stack.Navigator initialRouteName="List">
            <Stack.Screen name="List" component={OrderList} />
            <Stack.Screen name="Details" component={PickList} />
        </Stack.Navigator>
    );
}
