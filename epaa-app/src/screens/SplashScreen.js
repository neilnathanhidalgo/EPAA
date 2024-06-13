import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Dimensions, StatusBar as RNStatusBar, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 2000); // Tiempo de espera de 2 segundos
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style='auto' backgroundColor="#FFFFFF"/>

      {/* Rectángulos superiores */}
      <View style={[styles.rectangle, { backgroundColor: "#5CF4D6" }]} />
      <View style={[styles.rectangle, { backgroundColor: "#00E5BE" }]} />
      <View style={[styles.rectangle, { backgroundColor: "#00BBC2" }]} />
      <View style={[styles.rectangle, { backgroundColor: "#0097AA" }]} />

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>

      {/* Rectángulos inferiores */}
      <View style={[styles.rectangle, { backgroundColor: "#0097AA" }]} />
      <View style={[styles.rectangle, { backgroundColor: "#00BBC2" }]} />
      <View style={[styles.rectangle, { backgroundColor: "#00E5BE" }]} />
      <View style={[styles.rectangle, { backgroundColor: "#5CF4D6" }]} />
    </View>
  );
};

export default SplashScreen;

const { height: screenHeight } = Dimensions.get("window");
const rectangleHeight = screenHeight * 0.01; // Usar un porcentaje del alto de la pantalla para la altura de cada rectángulo
const totalRectangleHeight = rectangleHeight * 8; // Altura total de los rectángulos (8 rectángulos en total)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0097AA",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0, // Para asegurar que el contenido esté debajo de la barra de estado
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: screenHeight - totalRectangleHeight, // Altura del logoContainer relativa a la altura de la pantalla y los rectángulos
  },
  logo: {
    width: "50%", // Usar un porcentaje del ancho de la pantalla para la anchura del logo
    height: "50%", // Usar un porcentaje de la altura del logoContainer para la altura del logo
    resizeMode: "contain",
  },
  rectangle: {
    width: "100%",
    height: rectangleHeight, // Usar el valor calculado para la altura de los rectángulos
  },
});
