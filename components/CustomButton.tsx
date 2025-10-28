import { FontAwesome5 } from "@expo/vector-icons";
import {
  StyleProp,
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
    <TouchableOpacity style={styleBtn} onPress={onPress}>
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

        <Text style={styleText}>{text}</Text>

        {iconName && iconPosition === "right" && (
          <FontAwesome5 name={iconName} size={iconSize} color={iconColor} />
        )}
      </View>
    </TouchableOpacity>
  );
}
