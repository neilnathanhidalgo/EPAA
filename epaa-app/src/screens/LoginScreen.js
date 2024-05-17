import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Dimensions, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

const LoginScreen = ({ navigation }) => {

  const[fontsLoaded] = useFonts({
    Oswald: require("../assets/fonts/Oswald.ttf"),
    OldRegular: require("../assets/fonts/OldStandardTT-Regular.ttf")
  })

  return (
    <View style={style.container}>
      <StatusBar style='auto'/>

      {/*Logo*/}
      <View style={style.logoContainer}>
        <Image source={require('../assets/logo.png')} style={style.logo}/>
      </View>

      {/*Texto*/}
      <Text style={[style.BText, fontsLoaded && { fontFamily: "Oswald" }]}>
        BIENVENIDO/A
      </Text>

      <Text style={[style.NombreText, fontsLoaded && { fontFamily: "Oswald" }]}>
        NOMBRE
      </Text>

      <Text style={[style.cText, fontsLoaded && { fontFamily: "OldRegular" }]}>
        Ingresa tu clave
      </Text>

    </View>
  );
};

export default LoginScreen;

const screenHeight = Dimensions.get("window").height;
const totalRectangleHeight = 8 * 7;

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        },
    
      logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        marginVertical: 100,
      },
    
      logo: {
        width:130,
        height: 130,
        resizeMode: "contain",
      },

      BText: {
        color: "#006B78",
        fontSize: 35,
        alignSelf: 'center',
        textAlign: 'center',
        marginVertical:250,
      },

      NombreText: {
        color: "#006B78",
        fontSize: 35,
        alignSelf: 'center',
        marginVertical:-250,
        fontWeight: 'semibold',
      },

      cText: {
        color: "#006B78",
        fontSize: 25,
        alignSelf: 'center',
        marginVertical:270,
        fontWeight: '100',
      },
    
      rectangle: {
        width: "100%",
        height: 10,
        position: 'absolute',
        
      },
})