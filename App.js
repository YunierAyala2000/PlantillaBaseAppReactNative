import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert } from "react-native";
import { globalStyles } from "./styles/globalStyles";

import { CustomButton } from "./components/generals/CustomButton";
import { CustomProgres } from "./components/generals/CustomProgres";

export default function App() {
  const alertNavegador = () => {
    alert("subComponente del navegador");
  };

  const alertDispositivo = () => {
    Alert.alert("Alerta nativa del Movil");
  };

  return (
    <View style={globalStyles.containerAreaSafe}>
      <StatusBar style="auto" />
      <Text>Open up App.js to start working on your app!</Text>

      <CustomButton
        onPress={alertNavegador}
        styleBtn={globalStyles.btn.primary}
        styleText={globalStyles.textWhite}
        text={"Mostrar Alerta del navegador"}
      />

      <CustomButton
        onPress={alertDispositivo}
        styleBtn={globalStyles.btn.secondary}
        styleText={globalStyles.textWhite}
        text={"Alerta nativa del dispositivo"}
      />

      <CustomProgres
        containerStyle={styles.container}
        text="Cargando test..."
        progressSize="large"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },

  text2: {
    top: 30,
    color: "#2947f2ff",
  },
});
