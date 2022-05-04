import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;
export const theme = {
  colors: {
    primary: "#E2725B",
    active: "#efc230",
    inactive: "#571B0F",
    text: "#1b5e20",
    bar: "#E2725B",
  },
  backgroundImage: require("../assets/images/LogoEscaladores.png"),
  Button: {
    buttonStyle: "red",
    titleStyle: {
      color: "#efc230",
      fontWeight: "bold",
    },
    header: { headerHeigth: heigth / 8 },
  },
};
