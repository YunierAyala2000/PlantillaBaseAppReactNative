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
    success: {
      backgroundColor: "#198754",
      padding: 8,
      borderRadius: 5,
      marginTop: 10,
      alignItems: "center",
    },
    danger: {
      backgroundColor: "#DC3545",
      padding: 8,
      borderRadius: 5,
      marginTop: 10,
      alignItems: "center",
    },
    warning: {
      backgroundColor: "#FFC107",
      padding: 8,
      borderRadius: 5,
      marginTop: 10,
      alignItems: "center",
    },
    info: {
      backgroundColor: "#0DCAF0",
      padding: 8,
      borderRadius: 5,
      marginTop: 10,
      alignItems: "center",
    },
    light: {
      backgroundColor: "#F8F9FA",
      padding: 8,
      borderRadius: 5,
      marginTop: 10,
      alignItems: "center",
    },
    dark: {
      backgroundColor: "#212529",
      padding: 8,
      borderRadius: 5,
      marginTop: 10,
      alignItems: "center",
    },
    link: {
      color: "#689FEF",
      padding: 8,
      borderRadius: 5,
      marginTop: 10,
      alignItems: "center",
    },
    textWhite: {
      color: "#FFFFFF",
      fontSize: 16,
    },
    textBlack: {
      color: "#000000ff",
      fontSize: 16,
    },
  },
});
