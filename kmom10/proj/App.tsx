import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { Body } from "./src/styles";

// COMPONENTS
import Main from './src/components/incl/Main';
import Test from './src/components/incl/Test';
import Auth from './src/components/auth/Auth';

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
    Test: "login",
};

// NAVIGATOR
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={Body.container}>
      <NavigationContainer theme={ MyTheme}>
        <Tab.Navigator   screenOptions={({ route }) => ({
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
          })}>
          <Tab.Screen name="Welcome">{() => <Main />}</Tab.Screen>
          {/* {isLoggedIn ? (
                        <Tab.Screen name="Invoices">
                            {() => <Dogs setIsLoggedIn={setIsLoggedIn} />}
                        </Tab.Screen>
                    ) : (
                        <Tab.Screen name="Login/Register">
                            {() => <Auth setIsLoggedIn={setIsLoggedIn} />}
                        </Tab.Screen>
                    )} */}
        <Tab.Screen name="Test">{() => <Test />}</Tab.Screen>
          </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
