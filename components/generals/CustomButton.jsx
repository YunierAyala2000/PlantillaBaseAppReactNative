import { TouchableOpacity, Text } from "react-native";

export function CustomButton({ onPress, styleBtn, text, styleText }) {
  return (
    <TouchableOpacity style={styleBtn} onPress={onPress}>
      <Text style={styleText}>{text}</Text>
    </TouchableOpacity>
  );
}
