import Home from "./page/Home";
import LikeOrNot from "./page/LikeOrNot";
import Stats from "./page/Stats";

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
          name="LikeOrNot"
          component={LikeOrNot}
          options={{ title: "Back" }}
        />
        <Stack.Screen
          name="Stats"
          component={Stats}
          options={{ title: "Back" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
