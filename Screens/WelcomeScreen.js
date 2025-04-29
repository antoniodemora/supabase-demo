import React from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";
import { supabase } from "../lib/supabase";

const WelcomeScreen = () => {
  const onLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log("Error al cerrar sesión:", error.message);
    } else {
      console.log("Sesión cerrada con éxito");
    }
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/supabase-logo-icon.png")}
        style={styles.image}
      />
      <Text style={styles.welcomeText}>¡Bienvenido a la aplicación!</Text>
      <Button
        style={styles.logoutButton}
        onPress={onLogout}
        title='Salir'
        color={"purple"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333",
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ccc",
  },
  logoutButton: {
    marginTop: 45,
  },
});

export default WelcomeScreen;
