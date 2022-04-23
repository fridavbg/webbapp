import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { Typography, Forms, Base } from "../../styles";

export default function AuthFields({
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
                <Text style={Typography.btnText}>{title}</Text>
            </TouchableOpacity>
            {title === "Logga in" && (
                <View>
                    <TouchableOpacity
                        style={Base.button}
                        onPress={() => {
                            navigation.navigate("Register");
                        }}
                    >
                        <Text style={Typography.btnText}>
                            Registrera istället
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}
