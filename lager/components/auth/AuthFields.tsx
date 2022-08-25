import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { showMessage } from "react-native-flash-message";
import { Typography, Form, Base } from "../../styles";
import { text } from "../../styles/typograhy";

export default function AuthFields({
    auth,
    setAuth,
    title,
    submit,
    navigation,
}) {

    function validatePassword(text: string) {
        const pattern = /^(?=.\d)(?=.[a-z])(?=.*[A-Z])(?=.*[!\.-]).{4,}$/
        if (!text.match(pattern)) {
            showMessage({
                message: "Password not valid",
                description: "Email does not have the right format",
                type: "warning"
            })
        }
    }

    function validateEmail(text: string) {
        const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!text.match(pattern)) {
            showMessage({
                message: "Email not valid",
                description: " must at least be 4 characters long, contain upper and lowercase, numbers and a special characters ",
                type: "warning"
            })
        }
    }

    return (
        <View style={Base.base}>
            <Text style={Typography.title}>{title}</Text>
            <Text style={Typography.label}>E-mail</Text>
            <TextInput
                style={Form.input}
                onChangeText={(content: string) => {
                    validateEmail(content)
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
                    validatePassword(content);
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
