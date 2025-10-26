import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { globalStyles } from "./styles/globalStyles";

import { CustomButton } from "./components/generals/CustomButton";

export default function App() {
  const alertSubComponente = () => {
    alert("subComponente");
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <TouchableOpacity
        style={globalStyles.btn.primary}
        onPress={() => alert("hola")}
      >
        <Text style={globalStyles.textWhite}>hola Junier</Text>
      </TouchableOpacity>

      <CustomButton
        onPress={alertSubComponente}
        styleBtn={globalStyles.btn.secondary}
        styleText={globalStyles.textWhite}
        text={"SubComponente"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
