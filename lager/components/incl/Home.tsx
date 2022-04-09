import {
    View,
    Image,
    Text,
    TouchableOpacity,
    Alert,
} from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";
import warehouse from "../../assets/images/library.jpg";
import { Base, Typography } from '../../styles';


export default function Home() {
    const { landscape } = useDeviceOrientation();
    return (
        <View style={Typography.header2}>
            <Text style={Typography.title}>Welcome</Text>
            <TouchableOpacity
                onPress={() => {
                    Alert.alert("Image of a", "Warehouse");
                }}
            >
                <Image
                    source={warehouse}
                    style={{
                        width: landscape ? 450 : 300,
                        height: landscape ? 300 : 240,
                        margin: 15,
                        borderRadius: 10,
                    }}
                />
            </TouchableOpacity>
            <Text style={Typography.text}>
                There is no friend as loyal as a book
            </Text>
            <Text style={Typography.text}> {"\n"} - Ernest Hemingway</Text>
        </View>
    );
}

