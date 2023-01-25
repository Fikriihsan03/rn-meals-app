import { StyleSheet, Text, View } from "react-native";
import { Colors } from "./constants/Colors";

interface IProps {
  data: string[] | undefined;
}
const MealDetailsListItem = ({ data }: IProps) => {
  return (
    <View>
      {data?.map((dataPoint) => (
        <View style={styles.listItem} key={dataPoint}>
          <Text style={styles.itemText}>{dataPoint}</Text>
        </View>
      ))}
    </View>
  );
};

export default MealDetailsListItem;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: Colors.primary500,
  },
  itemText: {
    textAlign: "center",
    color: Colors.primary700,
  },
});
