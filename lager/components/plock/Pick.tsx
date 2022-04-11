import { createNativeStackNavigator } from "@react-navigation/native-stack";

// COMPONENTS
import OrderList from "../order/OrderList";
import PickList from "../plock/PickList";

const Stack = createNativeStackNavigator();

export default function Pick(props) {
    return (
        <Stack.Navigator initialRouteName="OrderList">
            <Stack.Screen name="OrderList" component={OrderList} />

            <Stack.Screen name="Details">
                {(screenProps) => (
                    <PickList
                        {...screenProps}
                        setProducts={props.setProducts}
                    />
                )}
            </Stack.Screen>
            {/* 
            DEBUG
            */}
        </Stack.Navigator>
    );
}
