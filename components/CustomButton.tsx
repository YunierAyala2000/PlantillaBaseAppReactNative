import { FontAwesome5 } from "@expo/vector-icons";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

interface CustomButtonProps {
  text: string;
  onPress?: () => void;
  styleBtn?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
  iconName?: keyof typeof FontAwesome5.glyphMap; // nombre del ícono
  iconSize?: number;
  iconColor?: string;
  iconPosition?: "left" | "right"; // opcional: posición del ícono
}

export function CustomButton({
  onPress,
  styleBtn,
  text,
  styleText,
  iconName,
  iconSize = 16,
  iconColor = "#fff",
  iconPosition = "right",
}: CustomButtonProps) {
  return (
    <TouchableOpacity style={styleBtn || style.btnPrimary} onPress={onPress}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
        }}
      >
        {iconName && iconPosition === "left" && (
          <FontAwesome5 name={iconName} size={iconSize} color={iconColor} />
        )}

        <Text style={styleText || style.textWhite}>{text}</Text>

        {iconName && iconPosition === "right" && (
          <FontAwesome5 name={iconName} size={iconSize} color={iconColor} />
        )}
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  btnPrimary: {
    backgroundColor: "#0D6EFD",
    padding: 8,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },

  textWhite: {
    color: "#FFFFFF",
    fontSize: 16,
    padding: 2,
  },
});
