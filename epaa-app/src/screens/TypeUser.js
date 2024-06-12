import React from 'react';
import { View, StyleSheet, Image, Platform, Dimensions, StatusBar as RNStatusBar, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

const TypeUser = () => {
    const navigation = useNavigation();

    const [fontsLoaded] = useFonts({
        Oswald: require("../assets/fonts/Oswald.ttf"),
    });

    return (
        <View style={styles.container}>
            <StatusBar style='auto' backgroundColor='#FFFFFF'/>

                {/*Rectángulos superiores*/}
                <View style={[styles.rectangle, { backgroundColor: "#5CF4D6" }]} />
                <View style={[styles.rectangle, { backgroundColor: "#00E5BE" }]} />
                <View style={[styles.rectangle, { backgroundColor: "#00BBC2" }]} />
                <View style={[styles.rectangle, { backgroundColor: "#0097AA" }]} />

                {/*BORRAR - ES SOLO UNA PRUEBA*/}
                <TouchableOpacity style={styles.ppabutton} onPress={() => navigation.navigate('PPA')}>
                    <Text style={styles.buttonText}>PPA</Text>
                </TouchableOpacity>

                {/* Texto */}
                <Text style={[styles.pText, fontsLoaded && { fontFamily: "Oswald" }]}>
                    QUIÉN USARÁ ESTE DISPOSITIVO
                </Text>

                {/* UA */}
                <View style={styles.UAContainer}>
                    <Image source={require('../assets/UA.png')} style={styles.UA} />
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UALogin')}>
                        <Text style={styles.buttonText}>USUARIO ASISTIDO</Text>
                    </TouchableOpacity>
                </View>

                {/* Cuidador */}
                <View style={styles.CuiContainer}>
                    <Image source={require('../assets/Cuidador.png')} style={styles.Cui} />
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

const screenHeight = Dimensions.get("window").height;
const totalRectangleHeight = 8 * 7;

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
        fontSize: 31,
        marginTop: 30,
    },
    UAContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: -110,
        width: "100%",
        height: screenHeight - totalRectangleHeight,
    },
    UA: {
        width: 220,
        height: "100%",
        resizeMode: "contain",
    },
    CuiContainer: {
        flex: 1,
        alignItems: "center",
        marginTop: -110,
        width: "100%",
        height: screenHeight - totalRectangleHeight,
    },
    Cui: {
        width: 210,
        height: "100%",
        resizeMode: "contain",
    },
    rectangle: {
        width: "100%",
        height: 10,
    },
    button: {
        backgroundColor: "#006B78",
        width: 240,       // Ancho fijo
        height: 60,       // Alto fijo
        borderRadius: 20,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        justifyContent: 'center', // Centrar texto verticalmente
        alignItems: 'center', // Centrar texto horizontalmente
        marginTop: -105,
    },
    buttonText: {
        color: "#FFFFFF",
        fontFamily: "Oswald",
        fontSize: 27,
    },


    ppabutton: {
        backgroundColor: "#006B78",
        borderRadius: 20,
        width: 60,
        height: 50,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        justifyContent: 'center', // Centrar texto verticalmente
        alignItems: 'center', // Centrar texto horizontalmente
        marginTop: 10,
    },

});
