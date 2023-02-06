import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";

import HomeStyles from "../style/pagesStyle/home.scss";

export default function Home({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={HomeStyles.title}>Hello World</Text>
        <Button
          title="Navigate to Details"
          onPress={() => navigation.navigate("Details")}
        />
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
