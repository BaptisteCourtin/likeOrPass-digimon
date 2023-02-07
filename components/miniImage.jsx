import { Image } from "react-native";

import miniImageStyles from "../style/componentsStyle/miniImage.scss";

export default function Page({ image }) {
  return (
    <Image
      style={miniImageStyles.image}
      source={{
        uri: image,
      }}
    />
  );
}
