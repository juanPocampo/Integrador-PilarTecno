import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../services/constants";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    height,
    width,
    backgroundColor: "black",
  },
  mainContent: {
    flex: 1,
    width,
    height,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  previewImage: { width: "100%", height: height / 3 },
  titleContainer: {
    width: "85%",
    height: height / 9,
    fontSize: 24,
    color: theme.colors.active,
  },
});
