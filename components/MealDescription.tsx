import { View, Text, StyleSheet } from "react-native";

interface IProps {
  duration: number;
  complexity: string;
  affordability: string;
}

const MealDescription = ({ duration, complexity, affordability }: IProps) => {
  return (
    <View style={styles.mealDetail}>
      <Text style={styles.mealDetailText}>{duration}m</Text>
      <Text style={styles.mealDetailText}>{complexity.toUpperCase()}</Text>
      <Text style={styles.mealDetailText}>{affordability.toUpperCase()}</Text>
    </View>
  );
};

export default MealDescription;

const styles = StyleSheet.create({
  mealDetail: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  mealDetailText: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
