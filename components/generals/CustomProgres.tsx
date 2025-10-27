import {
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";

interface CustomButtonProps {
  styleContainer?: StyleProp<ViewStyle>;
  text: string;
  textStyle?: StyleProp<TextStyle>;
  progressSize?: number | "large" | "small";
  progressColor?: string;
}

export function CustomProgres({
  styleContainer,
  text,
  textStyle,
  progressSize,
  progressColor,
}: CustomButtonProps) {
  return (
    <View style={styleContainer || styles.container}>
      <ActivityIndicator size={progressSize} color="#2947f2ff" />
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
