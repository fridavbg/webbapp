import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Body } from "./src/styles";

// COMPONENTS
import Header from './src/incl/Header'
import Main from './src/incl/Main';
import Footer from './src/incl/Footer';

    // NAVBAR THEME
    const MyTheme = {
      ...DefaultTheme,
      colors: {
          ...DefaultTheme.colors,
          background: "#4E6766",
      },
  };

export default function App() {
  return (
    <SafeAreaView style={Body.container}>
      <NavigationContainer theme={ MyTheme}>
        <Header/>
        <Main />
        <Footer/>
      </NavigationContainer>
    </SafeAreaView>
  );
}
