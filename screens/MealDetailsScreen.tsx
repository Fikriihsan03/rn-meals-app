import { NavigationProp, RouteProp } from "@react-navigation/native";
import { Image, Text, View } from "react-native";
import MealDescription from "../components/MealDescription";
import { MEALS } from "../data/dummy-data";

interface IProps {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
}

const MealDetailsScreen = ({ navigation, route }: IProps) => {
  const mealId = route.params?.mealId;
  const getMealDetail = MEALS.find((meal) => meal.id === mealId);

  return (
    <View>
      <Image source={{ uri: getMealDetail?.imageUrl }} />
      <Text>{getMealDetail?.title}</Text>
      <MealDescription
        duration={getMealDetail!.duration}
        complexity={getMealDetail!.complexity}
        affordability={getMealDetail!.affordability}
      />
      <Text>Inggredients : </Text>
      {getMealDetail?.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Text>Steps : </Text>
      {getMealDetail?.steps.map((steps) => (
        <Text key={steps}>{steps}</Text>
      ))}
    </View>
  );
};

export default MealDetailsScreen;
