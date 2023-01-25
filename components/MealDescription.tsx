import { View, Text, StyleSheet } from "react-native";

interface IProps {
  duration: number;
  complexity: string;
  affordability: string;
  style?: object;
  textStyle?: object;
}

const MealDescription = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}: IProps) => {
  return (
    <View style={[styles.mealDetail, style]}>
      <Text style={[styles.mealDetailText, textStyle]}>{duration}m</Text>
      <Text style={[styles.mealDetailText, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.mealDetailText, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
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
