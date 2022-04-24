import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { Base, Typography } from "./styles";

// COMPONENTS
import Home from "./components/incl/Home";
import Auth from "./components/auth/Auth";
import authModel from "./models/auth";
import Stock from "./components/stock/Stock";
import Plock from "./components/products/Pick";
import Deliveries from "./components/deliveries/Delivieries";
import Invoices from "./components/invoices/Invoices";
import Header from "./components/incl/Header";
import Footer from "./components/incl/Footer";
const Tab = createBottomTabNavigator();

export default function App() {
    const [products, setProducts] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);

    useEffect(async () => {
        setIsLoggedIn(
            await authModel.loggedIn() 
        );
    }, []);

    // TA IN FONTS
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
        Plock: "bars",
        Stock: "book",
        Inleveranser: "star",
        Login: "login",
        Faktura: "paperclip",
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
                    <Tab.Screen name="Inleveranser">
                        {() => <Deliveries />}
                    </Tab.Screen>
                    {isLoggedIn ? (
                        <Tab.Screen name="Faktura" component={Invoices} />
                    ) : (
                        <Tab.Screen name="Login">
                            {() => <Auth setIsLoggedIn={setIsLoggedIn} />}
                        </Tab.Screen>
                    )}
                </Tab.Navigator>
                <Footer />
            </NavigationContainer>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}
