import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import Home from "./src/screens/home";
import Item from "./src/screens/item";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    "sf-pro-display": require("./assets/fonts/sf-pro-display.ttf"),
    "sf-pro-text": require("./assets/fonts/sf-pro-text.ttf"),
  });

  if (!loaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Item" component={Item} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
