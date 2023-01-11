import { NavigationProp, RouteProp } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

interface IProps {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
}

const MealsOverviewScreen = ({ route }: IProps) => {
  const categoryId = route.params?.categoryId;
  return (
    <View style={styles.container}>
      <Text>{`Meals overview screen ${categoryId}`}</Text>
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
