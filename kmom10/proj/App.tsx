import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { Body } from "./src/styles";

// COMPONENTS
import Main from "./src/components/incl/Main";
import Test from "./src/components/incl/Test";
import Auth from "./src/components/auth/Auth";
import SearchForm from "./src/components/search/SearchForm";
import LogOut from "./src/components/auth/LogOut";

// NAVBAR THEME
const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: "#4E6766",
    },
};

const routeIcons = {
    Main: "home",
    Login: "login",
    Logout: 'logout',
    Test: "book",
};

// NAVIGATOR
const Tab = createBottomTabNavigator();

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);
    return (
        <SafeAreaView style={Body.container}>
            <NavigationContainer theme={MyTheme}>
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
                    {isLoggedIn ? (
                        <>
                            <Tab.Screen name="Search">
                                {() => (
                                    <SearchForm />
                                )}
                            </Tab.Screen>
                            <Tab.Screen name="Logout">
                                {() => <LogOut setIsLoggedIn={setIsLoggedIn} />}
                            </Tab.Screen>
                        </>
                    ) : (
                        <>
                            <Tab.Screen name="Main">
                                {() => <Main />}
                            </Tab.Screen>
                            <Tab.Screen name="Login/Register">
                                {() => (
                                    <Auth
                                        setIsLoggedIn={setIsLoggedIn}
                                        isLoggedIn={isLoggedIn}
                                    />
                                )}
                            </Tab.Screen>
                        </>
                    )}
                    <Tab.Screen name="Test">{() => <Test />}</Tab.Screen>
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}
