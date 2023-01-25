import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface IProps {
  ionIconsName: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
  onPress: () => void;
}

const IconButton = ({ ionIconsName, color, onPress }: IProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={ionIconsName} size={24} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
