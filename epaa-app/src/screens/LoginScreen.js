import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Dimensions, Text, FlatList } from 'react-native';
const { width, height } = Dimensions.get("window");
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { TouchableOpacity, enableLegacyWebImplementation } from 'react-native-gesture-handler';

//Iconos
import Ionicons from 'react-native-vector-icons/Ionicons';

const dialPad = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", "0", "del"];
const pinLength = 4;
const dialPadSize = width * .2;

const LoginScreen = ({ navigation }) => {

  const [pinCode, setPinCode] = useState([])

  const[fontsLoaded] = useFonts({
    Oswald: require("../assets/fonts/Oswald.ttf"),
    OldRegular: require("../assets/fonts/OldStandardTT-Regular.ttf")
  })

  //DialPad component
  const DialPad = ({ onPress })=>{
    return (
      <View style={ style.dialPadContainer }>
        <FlatList
        data = {dialPad}
        scrollEnabled={false}
        numColumns={3}
        keyExtractor={(_,index)=>index.toString()}
        columnWrapperStyle={{gap:19}}
        contentContainerStyle={{gap:4}}
        renderItem={({ item })=>{
          return (
            <TouchableOpacity
            onPress={()=>onPress(item)}
            disabled={item == ""}
            >
              <View style={{
                width:dialPadSize,
                height:dialPadSize,
                borderRadius:dialPadSize/2,
                alignItems:"center",
                justifyContent:"center",
              }}>
                {
                  item === "del" ? (
                    <Ionicons name = "backspace" size={dialPadSize/1.65} color="#006B78"/>
                  ) : (
                    <Text style={{
                      fontSize:dialPadSize/2.3,
                      color:"#006B78",
                    }}>
                      {item}
                    </Text>
                  )
                }

              </View>

            </TouchableOpacity>
          )
        }}
        />
      </View>
    )
  }

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

      <View style={{
        flexDirection:"row",
        gap:20,
        marginBottom:30,
        height:30,
        alignItems:"flex-end",
      }}>
          {
            [...Array(pinLength).keys()].map((index)=>{
              const isSelected = !!pinCode[index];

              return(
                <View
                  key={index}
                  style={{
                    width:18,
                    height: isSelected ? 18 : 2,
                    borderRadius: 22,
                    backgroundColor:"#006B78",

                  }}
                />
              )
            })
          }
        
      </View>

      <DialPad onPress={(item) => {
        if (item === "del") {
          setPinCode(pinCode.slice(0, -1));
        } else {
          if (pinCode.length < pinLength) {
            setPinCode([...pinCode, item]);
          }
        }
      }} />

      <Text style={[style.oText, fontsLoaded && { fontFamily: "OldRegular" }]}>
        ¿Olvidaste tu clave?
      </Text>

    </View>
  );
};

export default LoginScreen;

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems:"center",
        justifyContent: "center",
        },
    
      logoContainer: {
        alignSelf: 'center',
        marginVertical:60,
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
        marginTop:-55,
      },

      NombreText: {
        color: "#006B78",
        fontSize: 35,
        alignSelf: 'center',
        fontWeight: 'semibold',
      },

      cText: {
        color: "#006B78",
        fontSize: 25,
        alignSelf: 'center',
        marginVertical:20,
      },
    
      dialPadContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      },

      oText: {
        color: "#006B78",
        fontSize: 20,
        alignSelf: 'center',
        marginVertical:30,
        textDecorationLine:'underline',
      },

})