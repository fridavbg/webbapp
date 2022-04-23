import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { Typography, Forms, Base } from "../../styles";

export default function RegisterFields({
    auth,
    setAuth,
    title,
    submit,
    navigation,
}) {
    return (
        <View style={Base.container}>
            <Text style={Typography.label}>E-post</Text>
            <TextInput
                style={Forms.input}
                onChangeText={(content: string) => {
                    setAuth({ ...auth, email: content });
                }}
                value={auth?.email}
                keyboardType="email-address"
            />
            <Text style={Typography.label}>Lösenord</Text>
            <TextInput
                style={Forms.input}
                onChangeText={(content: string) => {
                    setAuth({ ...auth, password: content });
                }}
                value={auth?.password}
                secureTextEntry={true}
            />
            <TouchableOpacity
                style={Base.button}
                onPress={() => {
                    submit();
                }}
            >
                <Text style={Typography.btnText}>WIP - Registrera</Text>
            </TouchableOpacity>
        </View>
    );
}
