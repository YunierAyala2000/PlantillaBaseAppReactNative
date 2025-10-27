import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { globalStyles } from "./styles/globalStyles";

import { CustomButton } from "./components/generals/CustomButton";
import { CustomProgres } from "./components/generals/CustomProgres";

export default function App() {
  const alertSubComponente = () => {
    alert("subComponente");
  };

  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />

    //   <CustomButton
    //     onPress={alertSubComponente}
    //     styleBtn={globalStyles.btn.secondary}
    //     styleText={globalStyles.textWhite}
    //     text={"SubComponente Yunier"}
    //   />
    // </View>

    <CustomProgres text="Cargandoooo..." progressSize="large" />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#373737ff",
    alignItems: "center",
    justifyContent: "center",
  },

  text2: {
    top: 30,
    color: "#2947f2ff",
  },
});
