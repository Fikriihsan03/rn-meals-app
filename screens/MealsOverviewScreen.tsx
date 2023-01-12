import { NavigationProp, RouteProp } from "@react-navigation/native";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "../components/MealITem";
import { MEALS } from "../data/dummy-data";

interface IProps {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
}

export interface IMealsData {
  item: {
    id: string;
    categoryIds: string[];
    title: string;
    affordability: string;
    complexity: string;
    imageUrl: string;
    duration: number;
    ingredients: string[];
    steps: string[];
    isGlutenFree: boolean;
    isVegan: boolean;
    isVegetarian: boolean;
    isLactoseFree: boolean;
  };
}

const MealsOverviewScreen = ({ route }: IProps) => {
  const categoryId = route.params?.categoryId;
  const getMealsByCategory = MEALS.filter((item) =>
    item.categoryIds.includes(categoryId)
  );
  // console.log(filteredMeals)
  const renderMealItem = ({ item }: IMealsData) => {
    return <MealItem title={item.title}/>;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={getMealsByCategory}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
