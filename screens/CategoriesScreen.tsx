import { NavigationProp } from "@react-navigation/native";
import { FlatList, View } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

export interface ICategoriesData {
  item: {
    id: string;
    title: string;
    color: string;
  };
}

interface IProps {
  navigation: NavigationProp<any, any>;
}

const CategoriesScreen = ({ navigation }: IProps) => {
  const renderCategoriesItem = ({ item }: ICategoriesData) => {
    function pressCategoryHandler() {
      navigation.navigate("MealsOverview", { categoryId: item.id });
    }
    return (
      <CategoryGridTile title={item.title} onPress={pressCategoryHandler} />
    );
  };
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoriesItem}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;
