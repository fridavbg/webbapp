import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DeliveriesList from "./DeliveriesList";
import DeliveryForm from "./DeliveryForm";

const Stack = createNativeStackNavigator();

export default function Deliveries() {
    return (
        <Stack.Navigator initialRouteName="DeliveryList">
            {/* <Stack.Screen name="DeliveryList" component={DeliveriesList} />
            <Stack.Screen name="DeliveryForm" component={DeliveryForm} /> */}
            <Stack.Screen name="DeliveryList">
                {(screenProps) => <DeliveriesList {...screenProps} />}
            </Stack.Screen>
            <Stack.Screen name="DeliveryForm">
                {(screenProps) => <DeliveryForm {...screenProps} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
}
