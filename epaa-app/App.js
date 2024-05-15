import { StatusBar } from "expo-status-bar";
import React from 'react';
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Rectángulo superior */}
      <View style={[styles.rectangle, { backgroundColor: '#5CF4D6' }]} />
      <View style={[styles.rectangle, { backgroundColor: '#00E5BE' }]} />
      <View style={[styles.rectangle, { backgroundColor: '#00BBC2' }]} />
      <View style={[styles.rectangle, { backgroundColor: '#0097AA' }]} />
      
      {/* Contenedor del logo */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>
      
      {/* Rectángulo inferior */}
      <View style={[styles.rectangle, { backgroundColor: '#0097AA' }]} />
      <View style={[styles.rectangle, { backgroundColor: '#00BBC2' }]} />
      <View style={[styles.rectangle, { backgroundColor: '#00E5BE' }]} />
      <View style={[styles.rectangle, { backgroundColor: '#5CF4D6' }]} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0097AA",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: 165,
    height: 167,
    resizeMode: 'contain',
  },

  rectangle: {
    width: 375,
    height: 7,
  },
  
});
