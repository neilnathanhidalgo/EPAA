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

const screenHeight = Dimensions.get("window").height;
const totalRectangleHeight = 8 * 7;

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
