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
import {
  createAlerta,
  deleteAllAlertas,
  getAllAlertas,
} from "../services/alertaService";

const { width, height } = Dimensions.get("window");

const ua = [
  {
    name1: "Emilio",
    name2: "Eduardo",
    lastname1: "Díaz",
    lastname2: "Garnique",
  },
];

const AlertaCaidaUA = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Oswald: require("../assets/fonts/Oswald.ttf"),
  });

  const { name1, lastname1 } = ua[0];

  const [seconds, setSeconds] = useState(5);
  const [blink, setBlink] = useState(false);
  const [cancelled, setCancelled] = useState(false);
  const [alertSent, setAlertSent] = useState(false);

  useEffect(() => {
    if (!fontsLoaded) {
      return null;
    }
    const timer = setTimeout(() => {
      if (!cancelled && seconds > 0) {
        setSeconds(seconds - 1);
        setBlink((prevState) => !prevState);
      } else if (!cancelled && seconds === 0) {
        setAlertSent(true);
        setBlink(false);
        createAlerta({ tipo: "Caída", atendida: "N" })
          .then((response) => {
            response !== null ? navigation.navigate("HomeUA") : null;
          })
          .catch((error) => {
            console.error("Error al crear la alerta:", error);
          });
      }
    }, 1000);
    if (cancelled) {
      deleteAllAlertas();
      getAllAlertas().then((response) => {
        if (response.length === 0) {
          setTimeout(() => {
            navigation.navigate("HomeUA");
          }, 5000);
        }
      });
    }
    return () => clearTimeout(timer);
  }, [seconds, cancelled]);

  const handleCancel = () => {
    setCancelled(true);
    setSeconds(0);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.whiteText, styles.oswald]}>
        ¡ALERTA!
      </Text>

      <Ionicons
        name="warning"
        size={width * 0.5}
        color={alertSent ? "#AA1A1F" : blink ? "#FFFFFF" : "#AA1A1F"}
      />

      <Text style={[styles.name, styles.whiteText, styles.oswald]}>
        {name1.toUpperCase()} {lastname1.toUpperCase()}
      </Text>
      <Text style={[styles.question, styles.whiteText, styles.oswald]}>
        ¿HAS SUFRIDO UNA CAIDA?
      </Text>
      <Text style={[styles.countdown, styles.whiteText, styles.oswald]}>
        {alertSent ? (
          <Text style={{ color: "#AA1A1F" }}>ALERTA ENVIADA</Text>
        ) : cancelled ? (
          <Text style={{ color: "#AA1A1F" }}>ALERTA CANCELADA</Text>
        ) : (
          `EMITIENDO ALERTA EN...`
        )}
      </Text>
      <Text style={[styles.timer, styles.whiteText, styles.oswald]}>
        {alertSent ? "" : cancelled ? "" : `${seconds} SEGUNDOS`}
      </Text>
      {(!alertSent || cancelled) && (
        <Text style={[styles.cancel, styles.whiteText, styles.oswald]}>
          PUEDE CANCELAR LA ALERTA
        </Text>
      )}
      {(!alertSent || cancelled) && (
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={[styles.cancelButtonText, styles.oswald]}>CANCELAR</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AlertaCaidaUA;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0097AA",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: width * 0.05, // Añade espacios horizontales proporcionales
  },

  title: {
    fontSize: width * 0.15, // Tamaño de fuente relativo
  },

  name: {
    fontSize: width * 0.12,
    marginBottom: height * 0.02,
  },

  question: {
    fontSize: width * 0.075,
    marginBottom: height * 0.01,
  },

  countdown: {
    fontSize: width * 0.07,
    marginBottom: height * 0.01,
  },

  timer: {
    fontSize: width * 0.08,
    marginBottom: height * 0.02,
  },
  cancel: {
    fontSize: width * 0.06,
    marginBottom: height * 0.01,
  },
  cancelButton: {
    backgroundColor: "#02515B",
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.08,
    borderRadius: width * 0.1,
    marginTop: height * 0.01,
  },
  cancelButtonText: {
    color: "#FFFFFF",
    fontSize: width * 0.055,
    fontFamily: "Oswald",
    textTransform: "uppercase",
  },
  whiteText: {
    color: "#FFFFFF",
  },
  oswald: {
    fontFamily: "Oswald",
    textTransform: "uppercase",
  },
});
