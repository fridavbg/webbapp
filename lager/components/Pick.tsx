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
        color: "#ACD7EC",
        fontSize: 32,
        textAlign: "center",
        paddingBottom: 12,
        fontFamily: 'Arvo_Bold',
        textDecorationLine: "underline",
    },
});