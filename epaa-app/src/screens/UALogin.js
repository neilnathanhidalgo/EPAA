import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { Accelerometer } from "expo-sensors";
import { predict } from "../services/apiService";

const { width } = Dimensions.get("window");

const dialPad = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "del"];
const pinLength = 4;
const dialPadSize = width * 0.2;

const users = [
  {
    name1: "Emilio",
    name2: "Eduardo",
    lastname1: "Díaz",
    lastname2: "Garnique",
    pin: "1111",
  },
];

const LoginScreen = ({ navigation }) => {
  const [pinCode, setPinCode] = useState([]);
  const [currentUser, setCurrentUser] = useState(users[0]);
  const [errorMessage, setErrorMessage] = useState("");
  const accSub = useRef(null);

  const dataRate = 20;

  let accData = { x: [], y: [], z: [] };

  Accelerometer.setUpdateInterval(dataRate);

  function updateData(x, y, z) {
    x *= -9.81;
    y *= -9.81;
    z *= -9.81;

    accData.x.push(x);
    accData.y.push(y);
    accData.z.push(z);

    if (
      accData.x.length === 151 &&
      accData.y.length === 151 &&
      accData.z.length === 151
    ) {
      predictFall([...accData.y, ...accData.x, ...accData.z]);
      accData.x.shift();
      accData.y.shift();
      accData.z.shift();
    }
  }

  async function predictFall(data) {
    try {
      const response = await predict(data);

      const prediction = response.prediction[0];

      if (prediction === "Fall") {
        console.log("Fall detected!");
        accData = { x: [], y: [], z: [] };
        accSub.current && accSub.current.remove();
      } else if (prediction === "ADL") {
        console.log("ADL detected, continuing...");
      } else {
        console.log("Unexpected prediction result:", prediction);
        accData = { x: [], y: [], z: [] };
        accSub.current && accSub.current.remove();
      }
    } catch (error) {
      console.error("Error during prediction:", error);
      accData = { x: [], y: [], z: [] };
      accSub.current && accSub.current.remove();
    }
  }

  useEffect(() => {
    if (pinCode.length === pinLength) {
      const enteredPin = pinCode.join("");
      const currentPin = currentUser.pin.toString();
      if (enteredPin === currentPin) {
        navigation.navigate("HomeUA");
      } else {
        setErrorMessage("La contraseña no es correcta");
        setPinCode([]);
        setTimeout(() => setErrorMessage(""), 1500);
      }
    }

    accSub.current = Accelerometer.addListener((accelerometer) => {
      updateData(accelerometer.x, accelerometer.y, accelerometer.z);
    });

    return () => {
      accSub.current && accSub.current.remove();
    };
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
            <View
              style={{
                width: dialPadSize,
                height: dialPadSize,
                borderRadius: dialPadSize / 2,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item === "del" ? (
                <Ionicons
                  name="backspace"
                  size={dialPadSize / 1.65}
                  color="#006B78"
                />
              ) : (
                <Text
                  style={{
                    fontSize: dialPadSize / 2.3,
                    color: "#006B78",
                  }}
                >
                  {item}
                </Text>
              )}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );

  return (
    <View style={style.container}>
      <StatusBar style="auto" />

      <View style={style.logoContainer}>
        <Image source={require("../assets/logo.png")} style={style.logo} />
      </View>

      <Text style={[style.BText]}>BIENVENIDO/A</Text>

      <Text style={[style.NombreText]}>
        {currentUser.name1} {currentUser.lastname1}
      </Text>

      <Text style={[style.cText]}>Ingresa tu clave</Text>

      <View
        style={{
          flexDirection: "row",
          gap: 20,
          marginBottom: 30,
          height: 30,
          alignItems: "flex-end",
        }}
      >
        {[...Array(pinLength).keys()].map((index) => {
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
          );
        })}
      </View>

      <DialPad
        onPress={(item) => {
          if (item === "del") {
            setPinCode(pinCode.slice(0, -1));
          } else if (!isNaN(item)) {
            if (pinCode.length < pinLength) {
              setPinCode([...pinCode, item]);
            }
          }
        }}
      />

      {errorMessage ? (
        <Text style={style.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Text style={[style.oText]}>¿Olvidaste tu clave?</Text>
    </View>
  );
};

export default UALogin;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  logoContainer: {
    alignSelf: "center",
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
    alignSelf: "center",
    textAlign: "center",
    marginTop: -55,
  },

  NombreText: {
    color: "#006B78",
    fontSize: 35, // Tamaño ajustado para nombres largos
    alignSelf: "center",
    fontWeight: "semibold",
    textAlign: "center",
  },

  cText: {
    color: "#006B78",
    fontSize: 25,
    alignSelf: "center",
    marginVertical: 20,
  },

  dialPadContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  errorMessage: {
    color: "red",
    fontSize: 16,
    marginVertical: 10,
  },

  oText: {
    color: "#006B78",
    fontSize: 20,
    alignSelf: "center",
    marginVertical: 30,
    textDecorationLine: "underline",
  },
});
