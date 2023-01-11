import {
  ImageBackground,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface IProps {
  title: string;
  color: string;
  onPress: () => void;
  imageSrc: ImageSourcePropType;
}

const CategoryGridTile = ({ title, color, onPress, imageSrc }: IProps) => {
  return (
    <View style={styles.gridItem}>
      <ImageBackground
        source={imageSrc}
        resizeMode="cover"
        style={{ flex: 1 }}
        imageStyle={{ opacity: 0.35 }}
      >
        <Pressable
          android_ripple={{ color: "#ccc" }}
          style={({ pressed }) => [
            styles.button,
            pressed ? styles.buttonPressed : null,
          ]}
          onPress={onPress}
        >
          <View style={[styles.innerContainer]}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: "hidden",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.25,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
