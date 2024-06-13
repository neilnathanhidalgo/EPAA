import React from 'react';
import { View, StyleSheet, Image, Platform, Dimensions, StatusBar as RNStatusBar, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

const TypeUser = () => {
    const navigation = useNavigation();

    const [fontsLoaded] = useFonts({
        Oswald: require("../assets/fonts/Oswald.ttf"),
    });

    return (
        <View style={styles.container}>
            <StatusBar style='auto' backgroundColor='#FFFFFF'/>

            {/* Rectángulos superiores */}
            <View style={[styles.rectangle, { backgroundColor: "#5CF4D6" }]} />
            <View style={[styles.rectangle, { backgroundColor: "#00E5BE" }]} />
            <View style={[styles.rectangle, { backgroundColor: "#00BBC2" }]} />
            <View style={[styles.rectangle, { backgroundColor: "#0097AA" }]} />

            {/* Texto */}
            <Text style={[styles.pText, fontsLoaded && { fontFamily: "Oswald" }]}>
                QUIÉN USARÁ ESTE DISPOSITIVO
            </Text>

            {/* UA */}
            <View style={styles.optionContainer}>
                <Image source={require('../assets/UA.png')} style={styles.optionImage1} />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UALogin')}>
                    <Text style={styles.buttonText}>USUARIO ASISTIDO</Text>
                </TouchableOpacity>
            </View>

            {/* Cuidador */}
            <View style={styles.optionContainer}>
                <Image source={require('../assets/Cuidador.png')} style={styles.optionImage2} />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CuiLogin')}>
                    <Text style={styles.buttonText}>CUIDADOR</Text>
                </TouchableOpacity>
            </View>

            {/* Rectángulos inferiores */}
            <View style={[styles.rectangle, { backgroundColor: "#0097AA" }]} />
            <View style={[styles.rectangle, { backgroundColor: "#00BBC2" }]} />
            <View style={[styles.rectangle, { backgroundColor: "#00E5BE" }]} />
            <View style={[styles.rectangle, { backgroundColor: "#5CF4D6" }]} />
        </View>
    );
};

export default TypeUser;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0,
    },
    pText: {
        color: "#0A7280",
        fontSize: 0.075 * screenWidth, // Tamaño de fuente relativo
        marginTop: 0.025 * screenHeight, // Margen superior relativo
    },
    optionContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    optionImage1: {
        width: 0.6 * screenWidth, // Ancho relativo
        height: "100%", // Altura ocupando todo el contenedor
        resizeMode: "contain",
    },
    optionImage2: {
        width: 0.54 * screenWidth, // Ancho relativo
        height: "100%", // Altura ocupando todo el contenedor
        resizeMode: "contain",
    },
    rectangle: {
        width: "100%",
        height: 0.01 * screenHeight, // Altura relativa
    },
    button: {
        backgroundColor: "#006B78",
        width: 0.7 * screenWidth, // Ancho relativo
        height: 0.075 * screenHeight, // Alto relativo
        borderRadius: 0.04 * screenHeight, // Radio del borde relativo
        borderTopLeftRadius: 0 * screenHeight,
        borderTopRightRadius: 0 * screenHeight,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -0.057 * screenHeight,
        marginBottom: 0.07 * screenHeight,
    },
    buttonText: {
        color: "#FFFFFF",
        fontFamily: "Oswald",
        fontSize: 0.037 * screenHeight, // Tamaño de fuente relativo
    },
});