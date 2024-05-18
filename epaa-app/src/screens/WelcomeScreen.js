import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Dimensions, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

const WelcomeScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000); // Cambia el tiempo de espera según tus necesidades, en este caso a los 3 segundos
  }, []);

  const[fontsLoaded] = useFonts({
    Oswald: require("../assets/fonts/Oswald.ttf"),
    Quicksand: require("../assets/fonts/Quicksand.ttf")
  })

  return (
    <View style={style.container}>
      <StatusBar style='auto'/>

      {/*Logo*/}
      <View style={style.logoContainer}>
        <Image source={require('../assets/logo.png')} style={style.logo}/>
      </View>

      {/*Texto*/}
      <Text style={[style.welcomeText, fontsLoaded && { fontFamily: "Oswald" }]}>
        Te damos la bienvenida a
      </Text>

      <Text style={[style.EPAAText, fontsLoaded && { fontFamily: "Oswald" }]}>
        EPAA
      </Text>

      <Text style={[style.lemaText, fontsLoaded && { fontFamily: "Quicksand" }]}>
        "Bienestar a cada momento"
      </Text>

      {/*Imagen BIENVENIDA*/}
      <View style={style.bContainer}>
        <Image source={require('../assets/welcome.jpeg')} style={style.blogo}/>
      </View>

      {/*Rectángulos inferiores*/}
      <View style={[style.rectangle, { backgroundColor: "#0097AA", bottom:30}]}/>
      <View style={[style.rectangle, { backgroundColor: "#00BBC2", bottom:20}]}/>
      <View style={[style.rectangle, { backgroundColor: "#00E5BE", bottom:10}]}/>
      <View style={[style.rectangle, { backgroundColor: "#5CF4D6", bottom:0}]}/>

    </View>
  );
};

export default WelcomeScreen;

const screenHeight = Dimensions.get("window").height;
const totalRectangleHeight = 8 * 7;

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
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
        color: "#2A7581", //Color
        fontSize: 35, //Tamaño
        marginTop: 180, //Margen superior
        marginLeft: 35,
        position: 'absolute',
      },

      EPAAText: {
        color: "#02515B", //Color
        fontSize: 50, //Tamaño
        marginTop: 230, //Margen superior
        marginLeft: 35,
        position: 'absolute',
      },

      lemaText: {
        color: "#02515B", //Color
        fontSize: 25, //Tamaño
        marginTop: 340, //Margen superior
        textAlign: 'center',
        textAlignVertical: 'center',
      },

      bContainer: {
        flex: 1,
        alignItems: "center",
        width: "100%",
        height: screenHeight - totalRectangleHeight,
        position: 'absolute',
        bottom:-150,
      },
    
      blogo: {
        width:"143%",
        height: "100%",
        resizeMode: "contain",
      },
    
      rectangle: {
        width: "100%",
        height: 10,
        position: 'absolute',
        
      },
})