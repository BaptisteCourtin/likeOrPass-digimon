import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { useFonts } from "expo-font";

import MyButtonStyle from "../style/componentsStyle/myButton.scss";

export default function MyButton({ onPress, title }) {
  const [loaded] = useFonts({
    TekoR: require("../assets/fonts/Teko-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <TouchableHighlight onPress={onPress}>
      <View style={MyButtonStyle.buttonContainer}>
        <Text style={[styles.tekoR, MyButtonStyle.text]}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  tekoR: {
    fontFamily: "TekoR",
  },
});
