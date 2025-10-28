import { CustomButton } from "@/components/CustomButton";
import { globalStyles } from "@/constants/globalStyles";
import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useAuth } from "@/context/AuthContext";

export default function Component() {
  const { user, logout } = useAuth();

  const logoutUser = async () => {
    await logout();
    router.replace("/login");
  };

  return (
    <View style={style.Container}>
      <Image
        style={{ width: 150, height: 150, marginBottom: 10 }}
        source={require("../../assets/images/medida.png")}
      />

      <Text style={style.Title}>{user?.email}</Text>
      <CustomButton
        text="Cerrrar sesion"
        onPress={logoutUser}
        styleBtn={globalStyles.btn.primary}
        styleText={globalStyles.btn.textWhite}
      />

      <Text style={style.Title}>Conversor</Text>

      <Text style={style.Subtitle}>(cm) a (m) </Text>

      <TouchableOpacity
        style={style.TouchableOpacity}
        onPress={() => router.push("/conversor")}
      >
        <Text style={{ fontSize: 25, fontWeight: "bold", color: "#614e3e" }}>
          Iniciar
        </Text>
      </TouchableOpacity>

      <CustomButton
        onPress={() => router.push("/(tabs)")}
        text="cambiar vista de ejemplo de react"
        styleBtn={globalStyles.btn.primary}
        styleText={globalStyles.btn.textWhite}
      />
    </View>
  );
}

const style = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7e7ce",
  },

  Title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#614e3e",
    marginBottom: 20,
  },

  TouchableOpacity: {
    backgroundColor: "#decf93",
    padding: 10,
    borderRadius: 10,
  },

  Subtitle: {
    fontSize: 40,
    marginBottom: 20,
    color: "#614e3e",
    fontWeight: "bold",
  },
});
