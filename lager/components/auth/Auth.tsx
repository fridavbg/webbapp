import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./Login";
import Register from "./Register";

const Stack = createNativeStackNavigator();

export default function Deliveries(props) {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login">
                {(screenProps) => <Login {...screenProps} />}
            </Stack.Screen>
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    );
}
