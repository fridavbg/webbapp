import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import AppLoading from 'expo-app-loading';
import * as Font from "expo-font";

// COMPONENTS
import Home from "./components/Home";
import Stock from "./components/Stock";
import Pick from "./components/Pick";
import Header from "./components/Header";
import Footer from "./components/Footer";
const Tab = createBottomTabNavigator();

export default function App() {
    const fetchFonts = async () =>
    await Font.loadAsync({
        Architects_Daughter: require("./assets/fonts/Architects_Daughter/ArchitectsDaughter-Regular.ttf"),
        Arvo: require("./assets/fonts/Arvo/Arvo-Regular.ttf"),
        Arvo_Bold: require("./assets/fonts/Arvo/Arvo-Bold.ttf"),
        Arvo_Italic: require("./assets/fonts/Arvo/Arvo-Italic.ttf"),
    });
const [dataLoaded, setDataLoaded] = useState(false);

if (!dataLoaded) {
    return (
        <AppLoading
            startAsync={fetchFonts}
            onFinish={() => setDataLoaded(true)}
            onError={(err) => console.log(err)}
        />
    );
}
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            const routeIcons = {
                                Lager: "home",
                                Plock: "list",
                                Stock: "book"
                            };
                            let iconName = routeIcons[route.name] || "alert";
                            return (
                                <Ionicons
                                    name={iconName}
                                    size={size}
                                    color={color}
                                />
                            );
                        },
                        tabBarActiveTintColor: "blue",
                        tabBarInactiveTintColor: "gray",
                    })}
                >
                    <Tab.Screen name="Lager" component={Home} />
                    <Tab.Screen name="Plock" component={Pick} />
                    <Tab.Screen name="Stock" component={Stock} />
                </Tab.Navigator>
            </NavigationContainer>

            <Footer />
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
