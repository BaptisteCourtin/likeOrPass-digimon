import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import { useFonts } from "expo-font";

import MyButton from "../components/MyButton";
import HomeStyles from "../style/pagesStyle/home.scss";

export default function Page({ navigation }) {
  const [loaded] = useFonts({
    TekoSB: require("../assets/fonts/Teko-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ImageBackground
      source={require("../assets/bg1.jpg")}
      resizeMode="cover"
      style={styles.bg}
    >
      <ScrollView>
        <View style={styles.container}>
          <Text style={HomeStyles.title}>Digimon</Text>
          <Text style={[HomeStyles.title, HomeStyles.titleLP]}>
            <Text style={[styles.tekoSB, HomeStyles.like]}>Like</Text> or{" "}
            <Text style={[styles.tekoSB, HomeStyles.pass]}>Pass</Text>
          </Text>
          <Image
            source={require("../assets/digimonLogo.png")}
            style={HomeStyles.logo}
            resizeMode="contain"
          />
          <MyButton
            title="Go like some monsters"
            onPress={() => navigation.navigate("LikeOrNot")}
          ></MyButton>
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    minHeight: "100%",
  },
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tekoSB: {
    fontFamily: "TekoSB",
  },
});
