import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Welcome from "./components/Welcome";
import Stock from "./components/Stock";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.base}>
                <Header />
                <Welcome />
                <Stock />
                <Footer />
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    base: {
        flex: 1,
        backgroundColor: "#4E6766",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
});
