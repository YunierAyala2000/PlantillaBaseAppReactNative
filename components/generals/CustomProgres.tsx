import {
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import { globalStyles } from "../../styles/globalStyles";

type HexColor = `#${string}`;

interface CustomButtonProps {
  containerStyle?: StyleProp<ViewStyle>;
  text: string;
  textStyle?: StyleProp<TextStyle>;
  progressSize?: number | "large" | "small";
  progressColor?: HexColor;
}

export function CustomProgres({
  containerStyle,
  text,
  textStyle,
  progressSize,
  progressColor,
}: CustomButtonProps) {
  return (
    <View style={containerStyle || globalStyles.containerAreaSafe}>
      <ActivityIndicator size={progressSize} color={progressColor} />
      <Text style={textStyle || styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    top: 10,
    color: "#000000ff",
    fontWeight: "bold",
  },
});
