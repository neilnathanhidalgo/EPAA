import { StyleSheet, Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;
const totalRectangleHeight = 8 * 7;

export const app = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0097AA",
    alignItems: "center",
    justifyContent: "center",
  },

  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: screenHeight - totalRectangleHeight,
  },

  logo: {
    width: 165,
    height: "100%",
    resizeMode: "contain",
  },

  rectangle: {
    width: "100%",
    height: 10,
  },
});
