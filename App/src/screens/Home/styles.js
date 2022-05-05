import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../services/constants";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  mainContent: {
    flex: 1,
    width,
    height,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    opacity: 1,
    resizeMode: "cover",
  },
  card: {
    cardBackg: theme.colors.primary,
    cardOpacity: 1,
  },
  cardContainer: {
    width: "100%",
    height: height / 5,
  },
  cardMedia: {
    width: "100%",
    height: "80%",
    marginRight: 10,
  },
  buttonContent: {
    backgroundColor: theme.colors.primary
  },
  textButton: {
    width: "100%",
    textAlign: "center",
    color: "black",
  },
});
