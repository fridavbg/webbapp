import React, { useState } from "react";
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
import Pick from "./components/plock/Pick";
import Header from "./components/incl/Header";
import Footer from "./components/incl/Footer";
const Tab = createBottomTabNavigator();

export default function App() {
    // TA IN FONTS 
    // const fetchFonts = async () =>
    //     await Font.loadAsync({
    //         Architects_Daughter: require("./assets/fonts/Architects_Daughter/ArchitectsDaughter-Regular.ttf"),
    //         Arvo: require("./assets/fonts/Arvo/Arvo-Regular.ttf"),
    //         Arvo_Bold: require("./assets/fonts/Arvo/Arvo-Bold.ttf"),
    //         Arvo_Italic: require("./assets/fonts/Arvo/Arvo-Italic.ttf"),
    //     });
    // const [dataLoaded, setDataLoaded] = useState(false);

    // if (!dataLoaded) {
    //     return (
    //         <AppLoading
    //             startAsync={fetchFonts}
    //             onFinish={() => setDataLoaded(true)}
    //             onError={(err) => console.log(err)}
    //         />
    //     );
    // }

    const MyTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: "#4E6766",
        },
    };

    // LIFTING STATE - Products
    const [products, setProducts] = useState([]);
    
    return (
        <SafeAreaView style={Base.container}>
            <NavigationContainer theme={MyTheme}>
                <Header />
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            const routeIcons = {
                                Lager: "home",
                                Plock: "list",
                                Stock: "book",
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
                    <Tab.Screen name="Stock">
                        {() => (
                            <Stock
                                products={products}
                                setProducts={setProducts}
                            />
                        )}
                    </Tab.Screen>
                </Tab.Navigator>
                <Footer />
            </NavigationContainer>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}
