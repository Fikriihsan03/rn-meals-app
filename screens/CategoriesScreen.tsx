import { FlatList, View } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

interface ICategoriesData {
  item: {
    id: string;
    title: string;
    color: string;
  };
}

const renderCategoriesItem = ({ item }: ICategoriesData) => {
  return <CategoryGridTile title={item.title} color={item.color} />;
};

const CategoriesScreen = () => {
  console.log(CATEGORIES);
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
