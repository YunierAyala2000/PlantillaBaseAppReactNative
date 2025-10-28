import { ThemedText } from "@/components/themed-text";
import { useAuth } from "@/context/AuthContext";
import { router } from "expo-router";
import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    <View style={styles.container}>
      <ThemedText type="title" style={{ fontSize: 22, marginBottom: 20 }}>
        Iniciar Sesión
      </ThemedText>

      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Ingresar" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    color: "#fff",
    width: "80%",
  },
});
