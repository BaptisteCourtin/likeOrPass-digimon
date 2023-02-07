import { Text, View, ImageBackground, Image } from "react-native";

import CardToLikeStyles from "../style/componentsStyle/cardToLike.scss";

export default function Page({ image, name }) {
  return (
    <View style={CardToLikeStyles.container}>
      <ImageBackground
        source={{
          uri: image,
        }}
        resizeMode="cover"
        style={CardToLikeStyles.bg}
      >
        <Text style={CardToLikeStyles.text}>{name}</Text>
      </ImageBackground>
    </View>
  );
}
