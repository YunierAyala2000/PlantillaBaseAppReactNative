import { CustomButton } from "@/components/CustomButton";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { globalStyles } from "@/constants/globalStyles";
import { useAuth } from "@/context/AuthContext";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();

  const handleLogin = async () => {
    if (email === "YunPerez" && password === "12345") {
      const userData = { email, token: "fake-token-123" };
      await login(userData);
      router.replace("/(1-conversor)");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.form}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              height: 170,
              width: 170,
              position: "absolute",
              top: -130,
              alignItems: "center",
              borderRadius: 100,
              backgroundColor: "#ffff",
            }}
            source={require("../assets/images/iconApp3-removebg-preview.png")}
          />
        </View>

        <ThemedText type="subtitle" style={styles.title}>
          Usuario:
        </ThemedText>

        <View style={styles.inputForm}>
          <FontAwesome5 name="user-alt" size={24} />
          <TextInput
            placeholder="Usuario"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <ThemedText type="subtitle" style={styles.title}>
          Contraseña:
        </ThemedText>
        <View style={styles.inputForm}>
          <FontAwesome5 name="lock" size={24} />
          <TextInput
            placeholder="Contraseña"
            style={styles.input}
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <CustomButton
            onPress={() => {
              setShowPassword(!showPassword);
            }}
            styleBtn={{ padding: 10 }}
            iconName={!showPassword ? "eye" : "eye-slash"}
            iconSize={16}
            iconColor="#000000"
          />
        </View>

        <CustomButton
          onPress={handleLogin}
          text="Ingresar"
          styleBtn={globalStyles.btnDarkBlock}
          styleText={globalStyles.textWhite}
          iconName="arrow-circle-right"
          iconSize={16}
        />
        <View style={styles.formFouter}>
          <ThemedText type="link">🖥️ Desarollado By: 🖥️</ThemedText>
          <ThemedText type="link">@Junier Ayala Perez</ThemedText>
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    width: "100%",
  },

  title: {
    fontSize: 12,
    color: "#000000ff",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    backgroundColor: "#ffff",
    padding: 30,
    width: "100%",
    borderRadius: 20,
    borderWidth: 0.8,
    borderColor: "#383838ff",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif",
    shadowColor: "#000",
    shadowOffset: {
      width: -14, // desplazamiento horizontal (negativo = hacia la izquierda)
      height: 3, // desplazamiento vertical
    },
    shadowOpacity: 0.4, // opacidad de la sombra
    shadowRadius: 55, // difuminado (blur)
    elevation: 10, // importante para Android
  },

  inputForm: {
    borderWidth: 1.5,
    borderColor: "#ecedec",
    borderRadius: 10,
    height: 50,
    flexDirection: "row", // 🔹 reemplaza display:flex
    alignItems: "center",
    paddingLeft: 10,
    // transition no existe en React Native
  },

  input: {
    marginLeft: 10,
    borderRadius: 10,
    borderWidth: 0,
    width: "100%",
    height: "100%",
  },

  formFouter: {
    alignContent: "center",
    alignItems: "center",
    margin: 0,
  },
});
