import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { deleteAllAlertas, getAlertaByType } from "../services/alertaService";

const { width, height } = Dimensions.get("window");

const AlertaCaidaCui = ({ navigation }) => {
  const { width, height } = Dimensions.get("window");
  const [fontsLoaded] = useFonts({
    Oswald: require("../assets/fonts/Oswald.ttf"),
  });

  const ua = [
    {
      name1: "Emilio",
      name2: "Eduardo",
      lastname1: "Díaz",
      lastname2: "Garnique",
    },
  ];

  const { name1, lastname1 } = ua[0];
  const [blinking, setBlinking] = useState(true);
  const [iconColor, setIconColor] = useState("#FFFFFF");
  const [attended, setAttended] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setIconColor((prevColor) =>
        prevColor === "#FFFFFF" ? "#AA1A1F" : "#FFFFFF"
      );
    }, 500);
    if (attended) {
      deleteAllAlertas();
      getAlertaByType("Ayuda").then((response) => {
        response.length === 0
          ? navigation.navigate("HomeCui")
          : deleteAllAlertas();
      });
    }
    return () => clearInterval(interval);
  }, [attended]);

  const toggleBlink = () => {
    setBlinking(!blinking);
    setAttended(true);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.whiteText, styles.oswald]}>
        ¡ALERTA!
      </Text>

      <View style={[styles.iconContainer, { marginBottom: width * 0 }]}>
        <Ionicons
          name="warning"
          size={width * 0.8}
          color={blinking ? iconColor : "#AA1A1F"}
        />
      </View>

      <Text
        style={[styles.name, styles.whiteText, styles.oswald]}
      >{`${name1.toUpperCase()} ${lastname1.toUpperCase()}`}</Text>
      <Text style={[styles.question, styles.whiteText, styles.oswald]}>
        SOLICITA AYUDA
      </Text>

      <TouchableOpacity style={styles.atenderButton} onPress={toggleBlink}>
        <Text style={[styles.atenderButtonText, styles.oswald]}>ATENDER</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AlertaCaidaCui;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0097AA",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: width * 0.05,
  },

  title: {
    fontSize: width * 0.1,
  },

  name: {
    fontSize: width * 0.07,
    marginBottom: height * 0.02,
  },

  question: {
    fontSize: width * 0.05,
    marginBottom: width * 0.01,
  },

  whiteText: {
    color: "#FFFFFF",
  },

  iconContainer: {
    alignItems: "center",
  },

  atenderButton: {
    backgroundColor: "#02515B",
    alignItems: "center",
    justifyContent: "center",
    width: width * 0.5,
    height: width * 0.12,
    borderRadius: 20,
    marginTop: width * 0.05,
  },

  atenderButtonText: {
    color: "#FFFFFF",
    fontSize: width * 0.04,
  },

  oswald: {
    fontFamily: "Oswald",
    textTransform: "uppercase",
  },
});
