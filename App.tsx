import {
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

type RootStackParamList = {
  MealsCategories: undefined;
  MealsOverview: { categoryId: string };
};
const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#674188" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#C3ACD0" },
          }}
          initialRouteName="MealsCategories"
        >
          <Stack.Screen
            options={{
              title: "All Categories",
            }}
            name="MealsCategories"
            component={CategoriesScreen}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
