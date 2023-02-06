import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";

import DetailsStyles from "../style/pagesStyle/details.scss";

export default function Details({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={DetailsStyles.title}>Page Detail - Router Works</Text>
        <Button
          title="Navigate to Home"
          onPress={() => navigation.navigate("Home")}
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
