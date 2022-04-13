import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { Base, Typography } from "./styles";

// COMPONENTS
import Home from "./components/incl/Home";
import Stock from "./components/stock/Stock";
import Plock from "./components/plock/Pick";
import Deliveries from "./components/deliveries/Delivieries";
import Header from "./components/incl/Header";
import Footer from "./components/incl/Footer";
const Tab = createBottomTabNavigator();

export default function App() {
    // LIFTING STATE - Products
    const [products, setProducts] = useState([]);

    // TA IN FONTS
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

    // NAVBAR TEMA
    const MyTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: "#4E6766",
        },
    };

    const routeIcons = {
        Lager: "home",
        Plock: "list",
        Stock: "book",
    };

    return (
        <SafeAreaView style={Base.container}>
            <NavigationContainer theme={MyTheme}>
                <Header />
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName = routeIcons[route.name] || "alert";
                            return (
                                <Ionicons
                                    name={iconName}
                                    size={size}
                                    color={color}
                                />
                            );
                        },
                        tabBarActiveTintColor: "#ACD7EC",
                        tabBarInactiveTintColor: "gray",
                    })}
                >
                    <Tab.Screen name="Lager">{() => <Home />}</Tab.Screen>
                    <Tab.Screen name="Plock">
                        {() => (
                            <Plock
                                products={products}
                                setProducts={setProducts}
                            />
                        )}
                    </Tab.Screen>
                    <Tab.Screen name="Stock">
                        {() => (
                            <Stock
                                products={products}
                                setProducts={setProducts}
                            />
                        )}
                    </Tab.Screen>
                    <Tab.Screen name="Deliveries">
                        {() => <Deliveries />}
                    </Tab.Screen>
                </Tab.Navigator>
                <Footer />
            </NavigationContainer>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}
