import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { Typography, Form, Base } from "../../styles";
import authModel from "../../models/auth";

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
                style={Form.input}
                onChangeText={(content: string) => {
                    setAuth({ ...auth, email: content });
                }}
                value={auth?.email}
                keyboardType="email-address"
            />
            <Text style={Typography.label}>Lösenord</Text>
            <TextInput
                style={Form.input}
                onChangeText={(content: string) => {
                    setAuth({ ...auth, password: content });
                }}
                value={auth?.password}
                secureTextEntry={true}
            />
            <TouchableOpacity
                style={Base.button}
                onPress={() => {
                    authModel.register(auth?.email, auth?.password);
                    navigation.navigate('Login', {reload: true});
                }}
            >
                <Text style={Typography.btnText}>WIP - Registrera</Text>
            </TouchableOpacity>
        </View>
    );
}
