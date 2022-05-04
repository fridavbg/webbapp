import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { Typography, Form, Base } from "../../styles";

export default function AuthFields({
    auth,
    setAuth,
    title,
    submit,
    navigation,
}) {
    return (
        <View style={Base.base}>
            <Text style={Typography.title}>{title}</Text>
            <Text style={Typography.label}>E-mail</Text>
            <TextInput
                style={Form.input}
                onChangeText={(content: string) => {
                    setAuth({ ...auth, email: content });
                }}
                value={auth?.email}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <Text style={Typography.label}>Password</Text>
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
                    submit();
                }}
            >
                <Text style={Typography.btnText}>{title}</Text>
            </TouchableOpacity>
            {title === "Login" && (
                <TouchableOpacity
                    style={Base.button}
                    onPress={() => {
                        navigation.navigate("Register");
                    }}
                >
                    <Text style={Typography.btnText}>Sign up</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}
