import { NavigationProp, RouteProp } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "../components/MealITem";
import { CATEGORIES, MEALS } from "../data/dummy-data";

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

const MealsOverviewScreen = ({ navigation, route }: IProps) => {
  const categoryId = route.params?.categoryId;
  const getMealsByCategory = MEALS.filter((item) =>
    item.categoryIds.includes(categoryId)
  );
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    )?.title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, categoryId]);

  const renderMealItem = ({ item }: IMealsData) => {
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={getMealsByCategory}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
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
