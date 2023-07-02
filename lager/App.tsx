import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { Base } from "./styles";
import FlashMessage from "react-native-flash-message";

// COMPONENTS
import Header from "./components/incl/Header";
import Home from "./components/incl/Home";
import Test from "./components/incl/Test";
import Auth from "./components/auth/Auth";
import AuthModel from "./models/auth";
import Stock from "./components/stock/Stock";
import Pick from "./components/products/Pick";
import Deliveries from "./components/deliveries/Delivieries";
import Invoices from "./components/invoices/Invoices";
import Ship from "./components/ship/Ship";
import Footer from "./components/incl/Footer";

// NAVIGATOR
const Tab = createBottomTabNavigator();

export default function App() {
    const [products, setProducts] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);

    useEffect(async () => {
        setIsLoggedIn(await AuthModel.loggedIn());
    }, []);

    const fetchFonts = async () =>
        await Font.loadAsync({
            Architects_Daughter: require("./assets/fonts/Architects_Daughter/ArchitectsDaughter-Regular.ttf"),
            Arvo: require("./assets/fonts/Arvo/Arvo-Regular.ttf"),
            Arvo_Bold: require("./assets/fonts/Arvo/Arvo-Bold.ttf"),
            Arvo_Italic: require("./assets/fonts/Arvo/Arvo-Italic.ttf"),
        });

    if (!dataLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setDataLoaded(true)}
                onError={(err) => console.log(err)}
            />
        );
    }

    // NAVBAR THEME
    const MyTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: "#4E6766",
        },
    };

    const routeIcons = {
        Home: "home",
        Pick: "bars",
        Stock: "book",
        Deliveries: "star",
        Login: "login",
        Invoices: "paperclip",
        Ship: "car",
        Test: "questioncircleo",
    };

    return (
        <SafeAreaView style={Base.container}>
            <NavigationContainer theme={MyTheme}>
                <Header />
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName =
                                routeIcons[route.name] || "exclamation";
                            return (
                                <AntDesign
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
                    <Tab.Screen name="Home">{() => <Home />}</Tab.Screen>
                    <Tab.Screen name="Pick">
                        {() => (
                            <Pick
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
                    <Tab.Screen name="Ship">{() => <Ship />}</Tab.Screen>

                    {isLoggedIn ? (
                        <Tab.Screen name="Invoices">
                            {() => <Invoices setIsLoggedIn={setIsLoggedIn} />}
                        </Tab.Screen>
                    ) : (
                        <Tab.Screen name="Login/Register">
                            {() => <Auth setIsLoggedIn={setIsLoggedIn} />}
                        </Tab.Screen>
                    )}
                    <Tab.Screen name="Test">{() => <Test />}</Tab.Screen>
                </Tab.Navigator>
                <Footer />
            </NavigationContainer>
            <StatusBar style="auto" />
            <FlashMessage position="top" />
        </SafeAreaView>
    );
}
