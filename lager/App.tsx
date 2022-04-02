import { StatusBar } from "expo-status-bar";
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    Alert,
    View,
    ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDeviceOrientation } from "@react-native-community/hooks";

import Stock from "./components/Stock.tsx";

import warehouse from "./assets/warehouse.jpeg";

export default function App() {
    const { landscape } = useDeviceOrientation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.base}>
                <Text
                    style={{
                        color: "#A5C882",
                        fontSize: 42,
                        textAlign: "center",
                        paddingTop: 15,
                    }}
                    numberOfLines={1}
                >
                    Lager-Appen
                </Text>
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
                <Stock />
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    base: {
        flex: 1,
        backgroundColor: "#4E6766",
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 10,
    },
});
