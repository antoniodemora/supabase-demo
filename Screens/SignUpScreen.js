import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { supabase } from "../lib/supabase";

export default function SignUpScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = async () => {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) Alert.alert(error.message);
        else {
            Alert.alert("¡Revisa tu correo para confirmar tu cuenta!");
            navigation.navigate("LogIn");
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Crear cuenta" onPress={handleSignUp} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", padding: 20 },
    title: { fontSize: 24, marginBottom: 20, textAlign: "center" },
    input: {
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5
    }
});
