import {
  ActivityIndicator,
  StyleProp,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { globalStyles } from "../constants/globalStyles";
import { ThemedText } from "./themed-text";

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
      <ThemedText style={textStyle} type="subtitle">
        {text}
      </ThemedText>
    </View>
  );
}
