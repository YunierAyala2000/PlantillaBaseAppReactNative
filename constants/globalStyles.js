import { Platform, StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  containerAreaSafe: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "ios" ? 50 : 0,
  },

  colors: {
    primary: { backgroundColor: "#0D6EFD" },
    secondary: { backgroundColor: "#6C757D" },
  },

  btn: {
    primary: {
      backgroundColor: "#0D6EFD",
      padding: 8,
      borderRadius: 5,
      marginTop: 10,
      alignItems: "center",
    },
    secondary: {
      backgroundColor: "#6C757D",
      padding: 8,
      borderRadius: 5,
      marginTop: 10,
      alignItems: "center",
    },
    textWhite: {
      color: "#FFFFFF",
      fontSize: 16,
    },
  },
});
