import { NavigationProp, RouteProp } from "@react-navigation/native";
import { Text, View } from "react-native";

interface IProps {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
}
const MealDetailsScreen = ({ navigation, route }: IProps) => {
  const mealId = route.params?.mealId;
  return (
    <View>
      <Text>{mealId}</Text>
    </View>
  );
};

export default MealDetailsScreen;
