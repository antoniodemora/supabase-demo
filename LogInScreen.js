import { useState } from "react";
import { Button, Image, StyleSheet, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LogInScreen({ navigation }) {
    const [email, setEmail] = useState();
    const [passwd, setPasswd] = useState();

    function handleLogin() {
        navigation.navigate("CatEstados");
    }

    function handleSignUp() {
        navigation.navigate("SignUp");
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={require("./assets/supabase-logo-icon.png")}
                    style={styles.image}
                />
                <Image
                    source={require("./assets/react-svgrepo-com.png")}
                    style={styles.image}
                />
            </View>
            <View style={{ flex: 2 }}>
                <TextInput
                    style={styles.input}
                    placeholder="email"
                    value={email}
                    onChange={setEmail}
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="password"
                    value={passwd}
                    onChange={setPasswd}
                    secureTextEntry
                />
                <View style={styles.buttonContainer}>
                    <Button
                        title="Sign up"
                        color="red"
                        style={styles.button}
                        onPress={handleSignUp}
                    />
                    <Button
                        title="Login"
                        style={styles.button}
                        onPress={handleLogin}
                    />
                    {/*<View style={{ flex: 2 }}></View>*/}
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    imageContainer: {
        flex: 2,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    image: {
        height: 80,
        width: 80,
        resizeMode: "contain"
    },
    input: {
        borderWidth: 1,
        borderColor: "black",
        height: 40,
        borderRadius: 3,
        padding: 5,
        margin: 10,
        marginHorizontal: 45
    },
    buttonContainer: {
        flexDirection: "row",
        margin: 10,
        justifyContent: "space-evenly"
    },
    button: {
        paddin: 10
    }
});
