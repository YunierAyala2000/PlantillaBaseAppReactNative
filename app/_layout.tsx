// app/_layout.js
import { CustomProgres } from "@/components/CustomProgres";
import { useColorScheme } from "@/hooks/use-color-scheme";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import "react-native-reanimated";
import { AuthProvider, useAuth } from "../context/AuthContext";

function RootNavigation() {
  const { user, loading } = useAuth();
  const colorScheme = useColorScheme();

  if (loading) {
    return <CustomProgres text="Cargando..." progressSize="large" />;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      {user ? <Redirect href="/(1-conversor)" /> : <Redirect href="/login" />}
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" />
        <Stack.Screen name="(1-conversor)" />
        <Stack.Screen name="(tabs)" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootNavigation />
    </AuthProvider>
  );
}
