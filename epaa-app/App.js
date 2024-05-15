import React from "react";
import { View, Image, StatusBar } from "react-native";
import { app } from "./src/styles/app"; // Importa los estilos desde styles.js

export default function App() {
  return (
    <View style={app.container}>
      {/* Rectángulos superiores */}
      <View style={[app.rectangle, { backgroundColor: "#5CF4D6" }]} />
      <View style={[app.rectangle, { backgroundColor: "#00E5BE" }]} />
      <View style={[app.rectangle, { backgroundColor: "#00BBC2" }]} />
      <View style={[app.rectangle, { backgroundColor: "#0097AA" }]} />

      {/* Contenedor del logo */}
      <View style={app.logoContainer}>
        <Image source={require("./src/assets/logo.png")} style={app.logo} />
      </View>

      {/* Rectángulos inferiores */}
      <View style={[app.rectangle, { backgroundColor: "#0097AA" }]} />
      <View style={[app.rectangle, { backgroundColor: "#00BBC2" }]} />
      <View style={[app.rectangle, { backgroundColor: "#00E5BE" }]} />
      <View style={[app.rectangle, { backgroundColor: "#5CF4D6" }]} />
      <StatusBar style="auto" />
    </View>
  );
}
