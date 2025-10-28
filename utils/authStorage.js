import AsyncStorage from "@react-native-async-storage/async-storage";

const USER_KEY = "user_data";

export const saveUser = async (user) => {
  try {
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
  } catch (error) {
    console.log("Error al guardar usuario:", error);
  }
};

export const getUser = async () => {
  try {
    const data = await AsyncStorage.getItem(USER_KEY);
    console.log("➡️ Dato crudo de AsyncStorage:", data);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.log("Error al obtener usuario:", error);
    return null;
  }
};

export const logoutUser = async () => {
  try {
    await AsyncStorage.removeItem(USER_KEY);
  } catch (error) {
    console.log("Error al cerrar sesión:", error);
  }
};
