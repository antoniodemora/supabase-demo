import { useState } from "react";
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
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

  const handleCancel = async () => {
    navigation.navigate("LogIn");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/react-native-storage.jpg")} />
      </View>
      <View style={{ flex: 3 }}>
        <Text style={styles.title}>Crear cuenta</Text>
        <TextInput
          style={styles.input}
          placeholder='Email'
          placeholderTextColor={"#aaa"}
          value={email}
          onChangeText={setEmail}
          autoCapitalize='none'
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          placeholderTextColor={"#aaa"}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            margin: 10,
          }}
        >
          <Button title='Cancelar' color='firebrick' onPress={handleCancel} />
          <Button title='Crear cuenta' color='purple' onPress={handleSignUp} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#333",
  },
  imageContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    alignSelf: "center",
    color: "#ccc",
    marginBottom: 10,
    fontSize: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    color: "#ccc",
    height: 40,
    borderRadius: 3,
    padding: 5,
    margin: 10,
    marginHorizontal: 45,
  },
  buttonContainer: {
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-evenly",
  },
  button: {
    paddin: 10,
  },
});
