import { NavigationProp, RouteProp } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Colors } from "../components/constants/Colors";
import IconButton from "../components/IconButton";
import MealDescription from "../components/MealDescription";
import MealDetailsListItem from "../components/MealDetailsListItem";
import { MEALS } from "../data/dummy-data";

interface IProps {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
}

const MealDetailsScreen = ({ navigation, route }: IProps) => {
  const mealId = route.params?.mealId;
  const getMealDetail = MEALS.find((meal) => meal.id === mealId);
  const headerButtonPressHandler = () => {
    return;
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            ionIconsName="star"
            color={Colors.accent500}
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, []);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: getMealDetail?.imageUrl }} />
      <Text style={styles.title}>{getMealDetail?.title}</Text>
      <MealDescription
        duration={getMealDetail!.duration}
        complexity={getMealDetail!.complexity}
        affordability={getMealDetail!.affordability}
        textStyle={styles.descriptionText}
      />
      <View style={styles.listContainer}>
        <View style={styles.listWrapper}>
          <Text style={styles.subTitle}>Inggredients : </Text>
          <MealDetailsListItem data={getMealDetail?.ingredients} />
          <Text style={styles.subTitle}>Steps : </Text>
          <MealDetailsListItem data={getMealDetail?.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 12,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: Colors.accent500,
  },
  descriptionText: {
    color: Colors.accent500,
  },
  subTitle: {
    color: Colors.primary700,
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  listWrapper: {
    width: "80%",
  },
  listContainer: {
    alignItems: "center",
  },
});
