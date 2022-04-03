import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Welcome from "./components/Welcome";
import Stock from "./components/Stock";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.base}>
                <Welcome />
                <Stock />
                <StatusBar style="auto" />
            </ScrollView>
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
