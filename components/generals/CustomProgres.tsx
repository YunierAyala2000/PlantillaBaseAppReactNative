import {
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";

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
    <View style={containerStyle || styles.container}>
      <ActivityIndicator size={progressSize} color={progressColor} />
      <Text style={textStyle || styles.text}>{text}</Text>
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

  text: {
    top: 10,
    color: "#000000ff",
    fontWeight: "bold",
  },
});
