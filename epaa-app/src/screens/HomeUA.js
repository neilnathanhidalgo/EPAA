import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Platform,
  StatusBar as RNStatusBar,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import AntDesign from "react-native-vector-icons/AntDesign";
import { createStackNavigator } from "@react-navigation/stack";
import { Accelerometer } from "expo-sensors";
import { predict } from "../services/apiService";
import { useIsFocused } from "@react-navigation/native";
import { createAlerta } from "../services/alertaService";

const { width, height } = Dimensions.get("window");

const Stack = createStackNavigator();

const cuidadores = [
  { name1: "Felipe", lastname1: "Adanaque Medina" },
  { name1: "NOMBRE", lastname1: "APELLIDO" },
  { name1: "NOMBRE", lastname1: "APELLIDO" },
];

const HomeUA = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [fontsLoaded] = useFonts({
    Oswald: require("../assets/fonts/Oswald.ttf"),
  });
  const accSub = useRef(null);
  const alertInterval = useRef(null);
  const dataRate = 20;
  const accData = useRef({ x: [], y: [], z: [] });
  const [alertCalled, setAlertCalled] = useState(false);

  if (!fontsLoaded) {
    return null;
  }

  function updateData(x, y, z) {
    x *= -9.81;
    y *= -9.81;
    z *= -9.81;

    accData.current.x.push(x);
    accData.current.y.push(y);
    accData.current.z.push(z);

    if (
      accData.current.x.length === 151 &&
      accData.current.y.length === 151 &&
      accData.current.z.length === 151
    ) {
      predictFall([
        ...accData.current.y,
        ...accData.current.x,
        ...accData.current.z,
      ]);
      accData.current.x.shift();
      accData.current.y.shift();
      accData.current.z.shift();
    }
  }

  async function predictFall(data) {
    try {
      const response = await predict(data);
      const prediction = response.prediction[0];

      if (prediction === "Fall") {
        console.log("Fall detected");

        navigation.navigate("AlertaCaidaUA");
      } else if (prediction === "ADL") {
      } else {
        console.log("Unexpected prediction result:", prediction);
      }
    } catch (error) {
      console.error("Error during prediction:", error);
    }
  }

  useEffect(() => {
    if (isFocused) {
      accData.current = { x: [], y: [], z: [] };
      Accelerometer.setUpdateInterval(dataRate);
      accSub.current = Accelerometer.addListener((data) => {
        updateData(data.x, data.y, data.z);
      });

      alertInterval.current = setInterval(() => {
        createAlerta({ tipo: "Conexión", atendida: "N" });
      }, 2000);
      return () => {
        if (accSub.current) {
          accSub.current.remove();
        }
      };
    }
    return () => {
      if (accSub.current) {
        accSub.current.remove();
      }
    };
  }, [isFocused]);

  const AsistantAlert = () => {
    createAlerta({ tipo: "Ayuda", atendida: "N" });
    setAlertCalled(true);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* Barra superior */}
      <View style={[styles.rectangle, styles.topBar]}>
        <View style={styles.topBarContent}>
          {/* Contenedor para HOME y texto */}
          <TouchableOpacity onPress={() => navigation.navigate("HomeUA")}>
            <View style={styles.homeContainer}>
              <Ionicons
                name="home"
                size={width * 0.1}
                color="#FFFFFF"
                style={styles.home}
              />
              <Text
                style={[
                  styles.homeText,
                  { fontFamily: "Oswald", fontSize: width * 0.05 },
                ]}
              >
                HOME
              </Text>
            </View>
          </TouchableOpacity>

          {/* Logo */}
          <Image
            source={require("../assets/logo.png")}
            style={[styles.logo, { width: width * 0.13, height: width * 0.13 }]}
          />

          {/* Notificaciones */}
          <Ionicons
            name="notifications"
            size={width * 0.12}
            color="#FFFFFF"
            style={styles.notif}
          />

          {/* Contenedor para PERFIL y texto */}
          <View style={styles.profileContainer}>
            <Ionicons
              name="person-circle-outline"
              size={width * 0.14}
              color="#FFFFFF"
              style={styles.profile}
            />
            <Text
              style={[
                styles.profileText,
                { fontFamily: "Oswald", fontSize: width * 0.05 },
              ]}
            >
              PERFIL
            </Text>
          </View>
        </View>
      </View>

      {/* Contenedor para CUIDADORES e icono LL */}
      <View style={styles.cuidadoresContainer}>
        <TouchableOpacity
          style={styles.cuidadoresContainer}
          onPress={AsistantAlert}
        >
          <Text
            style={[
              styles.c,
              { fontFamily: "Oswald", fontSize: width * 0.135 },
            ]}
          >
            CUIDADOR
          </Text>
          <FontAwesome6
            name="square-phone"
            size={width * 0.25}
            color="#FFBE00"
            style={styles.ll}
          />
        </TouchableOpacity>
      </View>
      {/* Contenedor para CUIDADOR1 */}
      <View style={styles.cuidadorContainer}>
        <View style={styles.c1}>
          <Ionicons
            name="person-circle-outline"
            size={width * 0.25}
            color="#FFFFFF"
            style={styles.c1Icon}
          />
          <View style={styles.c1TextContainer}>
            <Text style={[styles.c1Text, { fontFamily: "Oswald" }]}>
              {cuidadores[0].name1}
            </Text>
            <Text
              style={[
                styles.c1Text,
                styles.c1Apellido,
                { fontFamily: "Oswald" },
              ]}
            >
              {cuidadores[0].lastname1}
            </Text>
          </View>
        </View>
      </View>

      {/* Botón "+ AGREGAR CUIDADOR" */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={[styles.addButtonText]}>+ AGREGAR CUIDADOR</Text>
      </TouchableOpacity>

      {/* Barra inferior */}
      <View style={[styles.rectangle, styles.bottomBar]}>
        <View style={styles.bottomBarContent}>
          {/* Contenedor para CALENDAR y texto */}
          <View style={styles.calContainer}>
            <Ionicons
              name="calendar"
              size={width * 0.12}
              color="#FFFFFF"
              style={styles.cal}
            />
            <Text
              style={[
                styles.calText,
                { fontFamily: "Oswald", fontSize: width * 0.05 },
              ]}
            >
              RECORDATORIOS
            </Text>
          </View>

          {/* Contenedor para PERFIL y texto */}
          <View style={styles.recomContainer}>
            <AntDesign
              name="like2"
              size={width * 0.12}
              color="#FFFFFF"
              style={styles.recom}
            />
            <Text
              style={[
                styles.recomText,
                { fontFamily: "Oswald", fontSize: width * 0.05 },
              ]}
            >
              RECOMENDACIONES
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeUA;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: Platform.OS === "android" ? RNStatusBar.currentHeight : 0,
  },

  rectangle: {
    width: "100%",
    height: height * 0.12,
  },

  topBar: {
    backgroundColor: "#02515B",
    alignItems: "flex-start",
    justifyContent: "center",
  },

  topBarContent: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: width * 0.05,
  },

  homeContainer: {
    flexDirection: "column",
    alignItems: "center",
  },

  home: {
    padding: 0,
  },

  homeText: {
    color: "#FFFFFF",
    marginTop: -10,
  },

  logo: {
    marginLeft: width * 0.05,
  },

  notif: {
    marginLeft: width * 0.31,
  },

  profileContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginLeft: width * 0.05,
  },

  profile: {
    padding: 0,
  },

  profileText: {
    color: "#FFFFFF",
    marginTop: -10,
  },

  cuidadoresContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: height * 0.015,
  },

  c: {
    color: "#0A7280",
    marginRight: width * 0.035,
  },

  ll: {
    padding: 0,
  },

  cuidadorContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: height * 0.02,
  },

  c1: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 25,
    width: width * 0.85,
    height: height * 0.14,
    backgroundColor: "#02515B",
  },

  c2: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 25,
    width: width * 0.85,
    height: height * 0.14,
    backgroundColor: "#F6931E",
  },

  c3: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 25,
    width: width * 0.85,
    height: height * 0.14,
    backgroundColor: "#FB663C",
  },

  c1Icon: {
    marginLeft: width * 0.035,
  },

  c1TextContainer: {
    flexDirection: "column",
    marginLeft: height * 0.015,
  },

  c1Text: {
    color: "#FFFFFF",
    fontFamily: "Oswald",
    fontSize: width * 0.07,
  },

  c1Apellido: {
    fontSize: width * 0.07,
  },

  addButton: {
    position: "absolute",
    bottom: height * 0.125,
    backgroundColor: "#02515B",
    width: width * 0.8,
    height: height * 0.06,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    alignSelf: "center",
  },

  addButtonText: {
    color: "#FFFFFF",
    fontFamily: "Oswald",
    fontSize: width * 0.05,
  },

  bottomBar: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#02515B",
    width: "100%",
    height: height * 0.1,
  },

  bottomBarContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: height * 0.005,
  },

  calContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  cal: {
    padding: 0,
  },

  calText: {
    color: "#FFFFFF",
    marginTop: height * -0.001,
  },

  recomContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: width * 0.1,
  },

  recom: {
    padding: 0,
  },

  recomText: {
    color: "#FFFFFF",
    marginTop: height * -0.005,
  },
});
