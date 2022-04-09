import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert,
} from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";
import warehouse from "../assets/images/library.jpg";

export default function Home() {
    const { landscape } = useDeviceOrientation();
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Welcome</Text>
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
            <Text style={styles.text}>
                There is no friend as loyal as a book
            </Text>
            <Text style={styles.text}> {"\n"} - Ernest Hemingway</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: 15,
        alignSelf: "stretch",
        backgroundColor: "#4E6766",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        color: "white",
        fontSize: 32,
        textAlign: "center",
        paddingBottom: 12,
        fontFamily: "Arvo_Bold",
    },
    text: {
        fontSize: 20,
        color: "#ACD7EC",
        fontFamily: "Arvo",
    },
});
