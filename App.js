import Home from "./page/Home";
import Details from "./page/Details";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ title: "Back" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
