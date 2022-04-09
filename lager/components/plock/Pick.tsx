import { Text, View, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// COMPONENTS
import OrderList from './OrderList.tsx';
import PickList from './PickList.tsx';


const Stack = createNativeStackNavigator();

export default function Pick() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Plocklista</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: 15,
        alignSelf: "stretch",
        backgroundColor: "#4E6766",
    },
    title: {
        color: "#ACD7EC",
        fontSize: 32,
        textAlign: "center",
        paddingBottom: 12,
        fontFamily: 'Arvo_Bold',
        textDecorationLine: "underline",
    },
});