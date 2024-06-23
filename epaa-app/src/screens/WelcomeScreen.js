import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  Platform,
  StatusBar as RNStatusBar,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

const WelcomeScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("TypeUser");
    }, 3000); // Tiempo de espera de 3 segundos
    return () => clearTimeout(timer);
  }, [navigation]);

  const [fontsLoaded] = useFonts({
    Oswald: require("../assets/fonts/Oswald.ttf"),
    Quicksand: require("../assets/fonts/Quicksand.ttf"),
  });

  if (!fontsLoaded) {
    return null; // Puede agregar un componente de carga aquí si lo desea
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
      </View>

      <Text style={[styles.welcomeText, { fontFamily: "Oswald" }]}>
        Te damos la bienvenida a
      </Text>

      <Text style={[styles.EPAAText, { fontFamily: "Oswald" }]}>EPAA</Text>

      <Text style={[styles.lemaText, { fontFamily: "Quicksand" }]}>
        "Bienestar a cada momento"
      </Text>

      <View style={styles.bContainer}>
        <Image
          source={require("../assets/welcome.jpeg")}
          style={styles.blogo}
        />
      </View>

      <View style={[styles.rectangle, { backgroundColor: "#0097AA" }]} />
      <View style={[styles.rectangle, { backgroundColor: "#00BBC2" }]} />
      <View style={[styles.rectangle, { backgroundColor: "#00E5BE" }]} />
      <View style={[styles.rectangle, { backgroundColor: "#5CF4D6" }]} />
    </View>
  );
};

export default WelcomeScreen;

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: Platform.OS === "android" ? RNStatusBar.currentHeight : 0,
  },
  logoContainer: {
    alignItems: "flex-start",
    paddingHorizontal: screenWidth * 0.05,
    paddingTop: screenHeight * 0.05,
  },
  logo: {
    width: screenWidth * 0.2,
    height: screenWidth * 0.2,
    resizeMode: "contain",
  },
  welcomeText: {
    color: "#2A7581",
    fontSize: screenWidth * 0.07,
    marginTop: screenHeight * 0.015,
    textAlign: "left",
    marginLeft: screenWidth * 0.1,
  },
  EPAAText: {
    color: "#02515B",
    fontSize: screenWidth * 0.1,
    marginTop: screenHeight * 0.01,
    textAlign: "left",
    marginLeft: screenWidth * 0.1,
  },
  lemaText: {
    color: "#02515B",
    fontSize: screenWidth * 0.05,
    marginTop: screenHeight * 0.025,
    textAlign: "center",
    marginHorizontal: screenWidth * 0.1,
  },
  bContainer: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
  },
  blogo: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    resizeMode: "cover",
  },
  rectangle: {
    width: "100%",
    height: screenHeight * 0.01,
  },
});
