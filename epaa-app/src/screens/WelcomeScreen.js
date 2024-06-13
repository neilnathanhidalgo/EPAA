import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Dimensions, Text, Platform, StatusBar as RNStatusBar } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

const WelcomeScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('TypeUser');
    }, 3000); // Tiempo de espera de 3 segundos
    return () => clearTimeout(timer);
  }, [navigation]);

  const [fontsLoaded] = useFonts({
    Oswald: require("../assets/fonts/Oswald.ttf"),
    Quicksand: require("../assets/fonts/Quicksand.ttf")
  });

  if (!fontsLoaded) {
    return null; // Puede agregar un componente de carga aquí si lo desea
  }

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />

      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>

      <Text style={[styles.welcomeText, { fontFamily: "Oswald" }]}>
        Te damos la bienvenida a
      </Text>

      <Text style={[styles.EPAAText, { fontFamily: "Oswald" }]}>
        EPAA
      </Text>

      <Text style={[styles.lemaText, { fontFamily: "Quicksand" }]}>
        "Bienestar a cada momento"
      </Text>

      <View style={styles.bContainer}>
        <Image source={require('../assets/welcome.jpeg')} style={styles.blogo} />
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
    paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0, // Asegura que el contenido esté debajo de la barra de estado
  },
  logoContainer: {
    alignItems: 'flex-start',
    paddingHorizontal: screenWidth * 0.05, // Ajustar el paddingHorizontal basado en el ancho de la pantalla
    paddingTop: screenHeight * 0.05, // Ajustar el paddingTop basado en la altura de la pantalla
  },
  logo: {
    width: screenWidth * 0.2, // Ajustar el ancho y alto basado en el ancho de la pantalla
    height: screenWidth * 0.2,
    resizeMode: "contain",
  },
  welcomeText: {
    color: "#2A7581",
    fontSize: screenWidth * 0.09, // Ajustar el tamaño de la fuente basado en el ancho de la pantalla
    marginTop: screenHeight * 0.02, // Ajustar el marginTop basado en la altura de la pantalla
    textAlign: 'left',
    marginLeft: screenWidth * 0.1, // Ajustar el marginLeft basado en el ancho de la pantalla
  },
  EPAAText: {
    color: "#02515B",
    fontSize: screenWidth * 0.12, // Ajustar el tamaño de la fuente basado en el ancho de la pantalla
    marginTop: screenHeight * 0.01, // Ajustar el marginTop basado en la altura de la pantalla
    textAlign: 'left',
    marginLeft: screenWidth * 0.1, // Ajustar el marginLeft basado en el ancho de la pantalla
  },
  lemaText: {
    color: "#02515B",
    fontSize: screenWidth * 0.055, // Ajustar el tamaño de la fuente basado en el ancho de la pantalla
    marginTop: screenHeight * 0.025, // Ajustar el marginTop basado en la altura de la pantalla
    textAlign: 'center',
    marginHorizontal: screenWidth * 0.1, // Ajustar el marginHorizontal basado en el ancho de la pantalla
  },
  bContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Asegura que la imagen esté en la parte inferior del contenedor
    width: "100%",
  },
  blogo: {
    width: "100%",
    height: undefined,
    aspectRatio: 1, // Mantiene la relación de aspecto de la imagen
    resizeMode: "cover", // Asegura que la imagen cubra todo el ancho de la pantalla
  },
  rectangle: {
    width: "100%",
    height: screenHeight * 0.01, // Usar un porcentaje del alto de la pantalla para la altura de los rectángulos
  },
});