import {
    ScrollView,
    View,
    Image,
    Text,
    TouchableOpacity,
    Alert,
} from "react-native";
import warehouse from "../../assets/images/library.jpg";
import { Base, Typography } from "../../styles";

export default function Home() {
    return (
        <ScrollView style={Base.container}>
            <View style={Base.center}>
                <Text style={Typography.title}>Welcome</Text>
                <TouchableOpacity
                    onPress={() => {
                        Alert.alert("Image of a", "Warehouse");
                    }}
                >
                    <Image
                        source={warehouse}
                        style={Base.image}
                    />
                </TouchableOpacity>
                <Text
                    style={Typography.text}
                >
                    There is no friend as loyal as a book
                </Text>
                <Text
                    style={Typography.text}
                >
                    {"\n"} --- Ernest Hemingway
                </Text>
            </View>
        </ScrollView>
    );
}
