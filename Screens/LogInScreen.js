import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { supabase } from "../lib/supabase";

export default function LogInScreen({ navigation }) {
  const [email, setEmail] = useState();
  const [passwd, setPasswd] = useState();
  const [loginError, setLoginError] = useState(null);
  const { setSession } = useState(null);

  useEffect(() => {
    if (loginError) {
      Alert.alert("error: " + loginError);
    }
    setLoginError(null);
  }, [loginError]);

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password: passwd,
    });

    if (error) {
      setLoginError(error.message);
    } else {
      setSession(data.session);
      setLoginError(null);
    }
  };

  function handleSignUp() {
    navigation.navigate("SignUp");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/react-native-storage.jpg")} />
      </View>
      <View style={{ flex: 3 }}>
        <Text style={styles.title}>Supabase Storage Demo</Text>
        <TextInput
          style={styles.input}
          placeholder='email'
          placeholderTextColor={"#aaa"}
          value={email}
          onChangeText={setEmail}
          autoCapitalize='none'
        />
        <TextInput
          style={styles.input}
          placeholder='password'
          placeholderTextColor={"#aaa"}
          value={passwd}
          onChangeText={setPasswd}
          secureTextEntry
        />
        <View style={styles.buttonContainer}>
          <Button
            title='Sign up'
            color='firebrick'
            style={styles.button}
            onPress={handleSignUp}
          />
          <Button
            title='Login'
            color='purple'
            style={styles.button}
            onPress={handleLogin}
          />
        </View>
      </View>
    </SafeAreaView>
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
