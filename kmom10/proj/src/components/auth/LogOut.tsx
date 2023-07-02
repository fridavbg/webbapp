import { Text, TouchableOpacity, View  } from 'react-native';
import { Base, Typography } from '../../styles'
import authModel from "../../models/auth";

export default function LogOut({
    // navigation,
    setIsLoggedIn }) { 
    async function logOut() {
        authModel.logout();
        setIsLoggedIn(false);
    }

    return (
            <View style={Base.center}>
            <Text style={Typography.header2}>Logout</Text>
            <TouchableOpacity
                        style={Base.button}
                        onPress={async () => {
                            await logOut();
                            navigation.navigate("Home", { reload: true });
                        }}
                    >
                        <Text style={Typography.btnText}>Log out</Text>
                    </TouchableOpacity>
            </View>
    )
};