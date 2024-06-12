import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Dimensions, Text, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get("window");

const dialPad = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "del"];
const pinLength = 4;
const dialPadSize = width * .2;

const users = [
  { name1: 'Felipe', name2: 'Luis', lastname1: 'Adanaqué', lastname2: 'Medina', pin: '1111' },
];


const CuiLogin = ({ navigation }) => {
  const [pinCode, setPinCode] = useState([]);
  const [currentUser, setCurrentUser] = useState(users[0]);
  const [errorMessage, setErrorMessage] = useState('');

  const [fontsLoaded] = useFonts({
    Oswald: require("../assets/fonts/Oswald.ttf"),
    OldRegular: require("../assets/fonts/OldSRegular.ttf"),
  });

  useEffect(() => {
    if (pinCode.length === pinLength) {
      const enteredPin = pinCode.join('');
      const currentPin = currentUser.pin.toString(); // Asegurar que la contraseña sea una cadena
      if (enteredPin === currentPin) {
        navigation.navigate('HomeCui'); 
      } else {
        setErrorMessage('La contraseña no es correcta');
        setPinCode([]);
        setTimeout(() => setErrorMessage(''), 1500); // El mensaje de error desaparece después de 1.5 segundos
      }
    }
  }, [pinCode, currentUser, navigation]);
  

  const DialPad = ({ onPress }) => (
    <View style={style.dialPadContainer}>
      <FlatList
        data={dialPad}
        scrollEnabled={false}
        numColumns={3}
        keyExtractor={(_, index) => index.toString()}
        columnWrapperStyle={{ gap: 19 }}
        contentContainerStyle={{ gap: 1 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onPress(item)}
            disabled={item === ""}
          >
            <View style={{
              width: dialPadSize,
              height: dialPadSize,
              borderRadius: dialPadSize / 2,
              alignItems: "center",
              justifyContent: "center",
            }}>
              {
                item === "del" ? (
                  <Ionicons name="backspace" size={dialPadSize / 1.65} color="#006B78" />
                ) : (
                  <Text style={{
                    fontSize: dialPadSize / 2.3,
                    color: "#006B78",
                  }}>
                    {item}
                  </Text>
                )
              }
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );

  return (
    <View style={style.container}>
      <StatusBar style='auto'/>

      <View style={style.logoContainer}>
        <Image source={require('../assets/logo.png')} style={style.logo} />
      </View>

      <Text style={[style.BText, { fontFamily: "Oswald" }]}>
        BIENVENIDO/A
      </Text>

      <Text style={[style.NombreText, { fontFamily: "Oswald" }]}>
        {currentUser.name1} {currentUser.lastname1}
      </Text>

      <Text style={[style.cText, { fontFamily: "OldRegular" }]}>
        Ingresa tu clave
      </Text>

      <View style={{
        flexDirection: "row",
        gap: 20,
        marginBottom: 30,
        height: 30,
        alignItems: "flex-end",
      }}>
        {
          [...Array(pinLength).keys()].map((index) => {
            const isSelected = !!pinCode[index];
            return (
              <View
                key={index}
                style={{
                  width: 18,
                  height: isSelected ? 18 : 2,
                  borderRadius: 22,
                  backgroundColor: "#006B78",
                }}
              />
            )
          })
        }
      </View>

      <DialPad onPress={(item) => {
        if (item === "del") {
          setPinCode(pinCode.slice(0, -1));
        } else if (!isNaN(item)) {
          if (pinCode.length < pinLength) {
            setPinCode([...pinCode, item]);
          }
        }
      }} />

      {errorMessage ? (
        <Text style={style.errorMessage}>
          {errorMessage}
        </Text>
      ) : null}

      <Text style={[style.oText, { fontFamily: "OldRegular" }]}>
        ¿Olvidaste tu clave?
      </Text>
    </View>
  );
};

export default CuiLogin;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  logoContainer: {
    alignSelf: 'center',
    marginVertical: 75,
  },

  logo: {
    width: 130,
    height: 130,
    resizeMode: "contain",
  },

  BText: {
    color: "#006B78",
    fontSize: 35,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: -55,
  },

  NombreText: {
    color: "#006B78",
    fontSize: 35, // Tamaño ajustado para nombres largos
    alignSelf: 'center',
    fontWeight: 'semibold',
    textAlign: 'center',
  },

  cText: {
    color: "#006B78",
    fontSize: 25,
    alignSelf: 'center',
    marginVertical: 20,
  },

  dialPadContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  errorMessage: {
    color: 'red',
    fontSize: 16,
    marginVertical: 10,
  },

  oText: {
    color: "#006B78",
    fontSize: 20,
    alignSelf: 'center',
    marginVertical: 30,
    textDecorationLine: 'underline',
  },
});
