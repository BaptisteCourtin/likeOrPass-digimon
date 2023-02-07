import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { useFonts } from "expo-font";

import buttonLPStyle from "../style/componentsStyle/buttonLP.scss";

export default function buttonLP({ onPress, title }) {
  const [loaded] = useFonts({
    TekoR: require("../assets/fonts/Teko-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor="#fae791"
      style={buttonLPStyle.buttonContainer}
    >
      {title === "Like" ? (
        <Text style={[styles.tekoR, buttonLPStyle.text, buttonLPStyle.like]}>
          {title}
        </Text>
      ) : (
        <Text style={[styles.tekoR, buttonLPStyle.text, buttonLPStyle.pass]}>
          {title}
        </Text>
      )}
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  tekoR: {
    fontFamily: "TekoR",
  },
});
