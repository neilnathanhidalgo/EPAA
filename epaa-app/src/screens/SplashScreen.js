import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 2000); // Cambia el tiempo de espera según tus necesidades, en este caso a los 3 segundos
  }, []);

  return (
    <View style={style.container}>
      {/*Rectángulos superiores*/}
      <StatusBar style='auto'/>

      <View style={[style.rectangle, { backgroundColor: "#5CF4D6"}]}/>
      <View style={[style.rectangle, { backgroundColor: "#00E5BE"}]}/>
      <View style={[style.rectangle, { backgroundColor: "#00BBC2"}]}/>
      <View style={[style.rectangle, { backgroundColor: "#0097AA"}]}/>

      {/*Logo*/}
      <View style={style.logoContainer}>
        <Image source={require('../assets/logo.png')} style={style.logo}/>
      </View>

      {/*Rectángulos inferiores*/}
      <View style={[style.rectangle, { backgroundColor: "#0097AA"}]}/>
      <View style={[style.rectangle, { backgroundColor: "#00BBC2"}]}/>
      <View style={[style.rectangle, { backgroundColor: "#00E5BE"}]}/>
      <View style={[style.rectangle, { backgroundColor: "#5CF4D6"}]}/>

    </View>
  );
};

export default SplashScreen;

const screenHeight = Dimensions.get("window").height;
const totalRectangleHeight = 8 * 7;

const style = StyleSheet.create({
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
        bottom:0,
      },
})