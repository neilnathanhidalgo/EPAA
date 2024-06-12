import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Dimensions, Text, Platform, StatusBar as RNStatusBar } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

const WelcomeScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('TypeUser');
    }, 3000); // Tiempo de espera de 3 segundos
  }, []);

  const [fontsLoaded] = useFonts({
    Oswald: require("../assets/fonts/Oswald.ttf"),
    Quicksand: require("../assets/fonts/Quicksand.ttf")
  });

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>

      {/* Texto */}
      <Text style={[styles.welcomeText, fontsLoaded && { fontFamily: "Oswald" }]}>
        Te damos la bienvenida a
      </Text>

      <Text style={[styles.EPAAText, fontsLoaded && { fontFamily: "Oswald" }]}>
        EPAA
      </Text>

      <Text style={[styles.lemaText, fontsLoaded && { fontFamily: "Quicksand" }]}>
        "Bienestar a cada momento"
      </Text>

      {/* Imagen BIENVENIDA */}
      <View style={styles.bContainer}>
        <Image source={require('../assets/welcome.jpeg')} style={styles.blogo} />
      </View>

      {/* Rectángulos inferiores */}
      <View style={[styles.rectangle, { backgroundColor: "#0097AA", bottom: 30 }]} />
      <View style={[styles.rectangle, { backgroundColor: "#00BBC2", bottom: 20 }]} />
      <View style={[styles.rectangle, { backgroundColor: "#00E5BE", bottom: 10 }]} />
      <View style={[styles.rectangle, { backgroundColor: "#5CF4D6", bottom: 0 }]} />
    </View>
  );
};

export default WelcomeScreen;

const screenHeight = Dimensions.get("window").height;
const totalRectangleHeight = 8 * 7;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0, // Asegura que el contenido esté debajo de la barra de estado
    paddingTop: Platform.OS === 'ios' ? RNStatusBar.currentHeight : 0, // Padding para la barra de estado en iOs

  },
  logoContainer: {
    position: 'absolute',
    top: 80,
    left: 20,
  },
  logo: {
    width: 75,
    height: 77,
    resizeMode: "contain",
  },
  welcomeText: {
    color: "#2A7581",
    fontSize: 35,
    marginTop: 180,
    marginLeft: 35,
    position: 'absolute',
  },
  EPAAText: {
    color: "#02515B",
    fontSize: 50,
    marginTop: 230,
    marginLeft: 35,
    position: 'absolute',
  },
  lemaText: {
    color: "#02515B",
    fontSize: 25,
    marginTop: 340,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  bContainer: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    height: screenHeight - totalRectangleHeight,
    position: 'absolute',
    bottom: -150,
  },
  blogo: {
    width: "143%",
    height: "100%",
    resizeMode: "contain",
  },
  rectangle: {
    width: "100%",
    height: 10,
    position: 'absolute',
  },
});
