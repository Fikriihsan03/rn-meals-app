import { Image, Pressable, StyleSheet, Text, View } from "react-native";
interface IProps {
  title: string;
  imageUrl: string;
  duration: number;
  complexity: string;
  affordability: string;
}
const MealItem = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}: IProps) => {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.mealDetail}>
            <Text style={styles.mealDetailText}>{duration}m</Text>
            <Text style={styles.mealDetailText}>
              {complexity.toUpperCase()}
            </Text>
            <Text style={styles.mealDetailText}>
              {affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonPressed: {
    opacity: 0.65,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
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
