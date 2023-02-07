import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
} from "react-native";
import axios from "axios";
import { useState, useEffect } from "react";

import LikeOrNotStyles from "../style/pagesStyle/LikeOrNot.scss";
import CardToLike from "../components/CardToLike";
import MyButton from "../components/MyButton";
import ButtonLP from "../components/ButtonLP";

export default function LikeOrNot({ navigation }) {
  // --- get All digimon ---
  const [allDigimon, setAllDigimon] = useState([]);
  const [I, setI] = useState(0);
  const [like, setLike] = useState(0);
  const [pass, setPass] = useState(0);
  const [whatLike, setWhatLike] = useState([]);
  const [whatPass, setWhatPass] = useState([]);

  const getAllDigimon = () => {
    axios
      .get("https://digimon-api.vercel.app/api/digimon")
      .then((res) => {
        setAllDigimon(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getAllDigimon();
  }, []);

  return (
    allDigimon.length !== 0 && (
      <ImageBackground
        source={require("../assets/bg1.jpg")}
        resizeMode="cover"
        style={styles.bg}
      >
        <ScrollView>
          <View style={styles.container}>
            {/* --- */}
            {I <= allDigimon.length ? (
              <View style={LikeOrNotStyles.cardContainer}>
                <CardToLike
                  image={allDigimon[`${I}`].img}
                  name={allDigimon[`${I}`].name}
                />
                <View style={LikeOrNotStyles.buttonContainer}>
                  <ButtonLP
                    title="Like"
                    onPress={() => {
                      setI((prev) => prev + 1),
                        setLike((prev) => prev + 1),
                        setWhatLike((prev) => [...prev, I]);
                    }}
                  />
                  <ButtonLP
                    title="Pass"
                    onPress={() => {
                      setI((prev) => prev + 1),
                        setPass((prev) => prev + 1),
                        setWhatPass((prev) => [...prev, I]);
                    }}
                  />
                </View>
              </View>
            ) : (
              <View style={LikeOrNotStyles.cardContainer}>
                <Image source={require("../assets/thanks.png")} />
                <Text style={LikeOrNotStyles.thanks}>
                  Thank you for playing my game
                </Text>
              </View>
            )}
            {/* --- */}

            <MyButton
              title="Voir les stats"
              onPress={() =>
                navigation.navigate("Stats", {
                  allDigimon,
                  like,
                  pass,
                  whatPass,
                  whatLike,
                })
              }
            />
            <StatusBar style="auto" />
          </View>
        </ScrollView>
      </ImageBackground>
    )
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
