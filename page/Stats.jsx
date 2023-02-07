import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";

import StatsStyles from "../style/pagesStyle/stats.scss";
import MiniImage from "../components/miniImage";

export default function Stats({ navigate, route }) {
  const { allDigimon, like, pass, whatLike, whatPass } = route.params;
  return (
    <ImageBackground
      source={require("../assets/bg1.jpg")}
      resizeMode="cover"
      style={styles.bg}
    >
      <ScrollView>
        <View style={styles.container}>
          <Text style={StatsStyles.number}>
            You like <Text style={StatsStyles.like}>{like} </Text>
            monsters
          </Text>

          <View style={StatsStyles.containerImage}>
            {whatLike.map((each) => (
              <MiniImage key={each} image={allDigimon[each].img} />
            ))}
          </View>

          <Text style={StatsStyles.number}>
            You pass <Text style={StatsStyles.pass}>{pass} </Text>
            monsters
          </Text>

          <View style={StatsStyles.containerImage}>
            {whatPass.map((each) => (
              <MiniImage key={each} image={allDigimon[each].img} />
            ))}
          </View>

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
});
