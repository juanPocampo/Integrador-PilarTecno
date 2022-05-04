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
    opacity: 0.3,
    resizeMode: "cover"
  },
  buttonContent: {
    width: width / 3,
    height: width / 3,
    margin: 5,
    borderRadius: 5,
    justifyContent: "center",
  },
  textButton: {
    width: "100%",
    textAlign: "center",
    color: "black",
  },
});
