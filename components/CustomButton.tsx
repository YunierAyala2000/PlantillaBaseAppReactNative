import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";

interface CustomButtonProps {
  text: string;
  onPress?: () => void;
  styleBtn?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
}

export function CustomButton({
  onPress,
  styleBtn,
  text,
  styleText,
}: CustomButtonProps) {
  return (
    <TouchableOpacity style={styleBtn} onPress={onPress}>
      <Text style={styleText}>{text}</Text>
    </TouchableOpacity>
  );
}
