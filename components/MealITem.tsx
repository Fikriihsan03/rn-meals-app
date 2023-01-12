import { Text, View } from "react-native";
interface IProps {
  title: string;
}
const MealItem = ({ title }: IProps) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default MealItem;
