import { CustomButton } from "@/components/CustomButton";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { globalStyles } from "@/constants/globalStyles";
import { useAuth } from "@/context/AuthContext";
import { FontAwesome5 } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import { Animated, Image, StyleSheet, TextInput, View } from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();

  // 🔹 Animaciones separadas para cada input
  const borderAnimEmail = useRef(new Animated.Value(0)).current;
  const borderAnimPassword = useRef(new Animated.Value(0)).current;

  // 🔹 Función para animar entrada y salida de foco
  const handleFocus = (anim: Animated.Value) => {
    Animated.timing(anim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = (anim: Animated.Value) => {
    Animated.timing(anim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  // 🔹 Interpolación de colores (gris → azul)
  const borderColorEmail = borderAnimEmail.interpolate({
    inputRange: [0, 1],
    outputRange: ["#ecedec", "#007AFF"],
  });

  const borderColorPassword = borderAnimPassword.interpolate({
    inputRange: [0, 1],
    outputRange: ["#ecedec", "#007AFF"],
  });

  // 🔹 Login simulado
  const handleLogin = async () => {
    if (email === "YunPerez" && password === "12345") {
      const userData = { email, token: "fake-token-123" };
      await login(userData);
      router.replace("/(1-conversor)");
    } else {
      alert("Credenciales incorrectas");
      // Alert.alert("Error", "Credenciales incorrectas");
    }
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.form}>
        {/* Imagen centrada */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/iconApp3-removebg-preview.png")}
          />
        </View>

        {/* ---------------- INPUT USUARIO ---------------- */}
        <ThemedText type="subtitle" style={styles.title}>
          Usuario:
        </ThemedText>

        <Animated.View
          style={[styles.inputForm, { borderColor: borderColorEmail }]}
        >
          <FontAwesome5 name="user-alt" size={20} color="#333" />
          <TextInput
            placeholder="Usuario"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            onFocus={() => handleFocus(borderAnimEmail)}
            onBlur={() => handleBlur(borderAnimEmail)}
          />
        </Animated.View>

        {/* ---------------- INPUT CONTRASEÑA ---------------- */}
        <ThemedText type="subtitle" style={styles.title}>
          Contraseña:
        </ThemedText>

        <Animated.View
          style={[styles.inputForm, { borderColor: borderColorPassword }]}
        >
          <FontAwesome5 name="lock" size={20} color="#333" />
          <TextInput
            placeholder="Contraseña"
            style={styles.input}
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            onFocus={() => handleFocus(borderAnimPassword)}
            onBlur={() => handleBlur(borderAnimPassword)}
          />
          <CustomButton
            onPress={() => setShowPassword(!showPassword)}
            styleBtn={{ padding: 10 }}
            iconName={!showPassword ? "eye" : "eye-slash"}
            iconSize={16}
            iconColor="#000"
          />
        </Animated.View>

        <CustomButton
          onPress={handleLogin}
          text="Ingresar"
          styleBtn={globalStyles.btnDarkBlock}
          styleText={globalStyles.textWhite}
          iconName="arrow-circle-right"
          iconSize={16}
        />

        <View style={styles.formFooter}>
          <ThemedText type="link">🖥️ Desarrollado By: 🖥️</ThemedText>
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
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 170,
    width: 170,
    position: "absolute",
    top: -130,
    borderRadius: 100,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 12,
    color: "#000",
  },
  form: {
    flexDirection: "column",
    gap: 10,
    backgroundColor: "#fff",
    padding: 30,
    width: "100%",
    borderRadius: 20,
    borderWidth: 0.8,
    borderColor: "#383838",
    shadowColor: "#000",
    shadowOffset: { width: -14, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 55,
    elevation: 10,
  },
  inputForm: {
    borderWidth: 1.5,
    borderRadius: 10,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
  input: {
    marginLeft: 10,
    borderRadius: 10,
    borderWidth: 0,
    width: "85%",
    height: "100%",
  },
  formFooter: {
    alignItems: "center",
    marginTop: 10,
  },
});
