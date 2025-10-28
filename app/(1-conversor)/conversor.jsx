import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { globalStyles } from "../../constants/globalStyles";

export default function Component() {
  const [centimeter, setCentimeter] = useState("");
  const [result, setResult] = useState(null);

  const convertir = () => {
    if (centimeter.length === 0) {
      Alert.alert("Por favor, ingrese un valor en centímetros.");
      return;
    }
    const meters = parseFloat(centimeter) / 100;
    setResult(meters);
  };

  return (
    <View style={style.Container}>
      <TextInput
        style={style.TextInput}
        onChangeText={setCentimeter}
        value={centimeter}
        placeholder="centimetros (cm)2"
        keyboardType="numeric"
      />

      <TouchableOpacity style={style.TouchableOpacity} onPress={convertir}>
        <Text style={{ fontSize: 20 }}>Calcular</Text>
      </TouchableOpacity>

      <Text style={style.ResultadoText}>
        Resultado: {result == null ? "-" : `${result} m`}{" "}
      </Text>

      <TouchableOpacity
        onPress={() => router.back()}
        style={globalStyles.btnSecondary}
      >
        <Text style={globalStyles.btnTextWhite}>Volver</Text>
      </TouchableOpacity>
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

  TextInput: {
    fontSize: 20,
    padding: 10,
    border: "none",
    marginBottom: 20,
    textAlign: "center",
    backgroundColor: "#f4f2ebff",
  },

  TouchableOpacity: {
    backgroundColor: "#f4f2ebff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },

  ResultadoText: {
    fontSize: 20,
    marginBottom: 10,
    backgroundColor: "#a08671ff",
    padding: 10,
    borderRadius: 10,
  },
});
