// Pick.tsx
import { Text, View, StyleSheet } from 'react-native';

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
        color: "#A5C882",
        fontSize: 32,
        textAlign: "center",
        fontFamily: "Oswald_500Medium",
        paddingBottom: 12,
    },
});