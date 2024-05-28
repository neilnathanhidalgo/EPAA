import React from 'react';
import { View, StyleSheet, Image, Platform, StatusBar as RNStatusBar, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const HomeUA = () => {   
    const [fontsLoaded] = useFonts({
        Oswald: require("../assets/fonts/Oswald.ttf"),
    });

    if (!fontsLoaded) {
        return null; // O muestra un indicador de carga
    }

    return (
        <View style={styles.container}>
            <StatusBar style='auto' />
            
            {/* Barra superior */}
            <View style={[styles.rectangle, styles.topBar]}>
                <View style={styles.topBarContent}>
                    {/* Contenedor para HOME y texto */}
                    <View style={styles.homeContainer}>
                        <Ionicons name="home" size={40} color="#FFFFFF" style={styles.home} />
                        <Text style={[styles.homeText, { fontFamily: "Oswald" }]}>HOME</Text>
                    </View>
                    
                    {/* Logo */}
                    <Image source={require('../assets/logo.png')} style={styles.logo} />

                    {/* Notificaciones */}
                    <Ionicons name="notifications" size={45} color="#FFFFFF" style={styles.notif} />
                    
                    {/* Contenedor para PERFIL y texto */}
                    <View style={styles.profileContainer}>
                        <Ionicons name="person-circle-outline" size={55} color="#FFFFFF" style={styles.profile} />
                        <Text style={[styles.profileText, { fontFamily: "Oswald" }]}>PERFIL</Text>
                    </View>
                </View>
            </View>
            
            {/* Contenedor para CUIDADORES y icono LL */}
            <View style={styles.cuidadoresContainer}>
                <Text style={[styles.c, { fontFamily: "Oswald" }]}>CUIDADORES</Text>
                <FontAwesome6 name="square-phone" size={87} color="#FFBE00" style={styles.ll} />
            </View>

            {/* Contenedor para CUIDADOR1 */}
            <View style={styles.cuidador1Container}>
                <View style={[styles.c1, { backgroundColor: "#1B3B52"}]}>
                    <Ionicons name="person-circle-outline" size={95} color="#FFFFFF" style={styles.c1Icon} />
                    <View style={styles.c1TextContainer}>
                        <Text style={[styles.c1Text, { fontFamily: "Oswald" }]}>NOMBRE</Text>
                        <Text style={[styles.c1Text, styles.c1Apellido, { fontFamily: "Oswald" }]}>APELLIDO</Text>
                    </View>
                </View>
            </View>

            {/* Contenedor para CUIDADOR2 */}
            <View style={[styles.cuidador2Container]}>
                <View style={[styles.c1, { backgroundColor: "#F6931E" }]}>
                    <Ionicons name="person-circle-outline" size={95} color="#FFFFFF" style={styles.c1Icon} />
                    <View style={styles.c1TextContainer}>
                        <Text style={[styles.c1Text, { fontFamily: "Oswald" }]}>NOMBRE</Text>
                        <Text style={[styles.c1Text, styles.c1Apellido, { fontFamily: "Oswald" }]}>APELLIDO</Text>
                    </View>
                </View>
            </View>

            {/* Contenedor para CUIDADOR3 */}
            <View style={[styles.cuidador3Container]}>
                <View style={[styles.c1, { backgroundColor: "#FB663C" }]}>
                    <Ionicons name="person-circle-outline" size={95} color="#FFFFFF" style={styles.c1Icon} />
                    <View style={styles.c1TextContainer}>
                        <Text style={[styles.c1Text, { fontFamily: "Oswald" }]}>NOMBRE</Text>
                        <Text style={[styles.c1Text, styles.c1Apellido, { fontFamily: "Oswald" }]}>APELLIDO</Text>
                    </View>
                </View>
            </View>

            {/* Contenedor para CUIDADOR4 */}
            <View style={[styles.cuidador4Container]}>
                <View style={[styles.c1, { backgroundColor: "#8A572C" }]}>
                    <Ionicons name="person-circle-outline" size={95} color="#FFFFFF" style={styles.c1Icon} />
                    <View style={styles.c1TextContainer}>
                        <Text style={[styles.c1Text, { fontFamily: "Oswald" }]}>NOMBRE</Text>
                        <Text style={[styles.c1Text, styles.c1Apellido, { fontFamily: "Oswald" }]}>APELLIDO</Text>
                    </View>
                </View>
            </View>
            
            {/* Barra inferior */}
            <View style={[styles.rectangle, styles.bottomBar]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0,
    },

    rectangle: {
        width: '100%',
        height: 80,
    },

    topBar: {
        backgroundColor: '#02515B',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },

    topBarContent: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    homeContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },

    home: {
        padding: 0,
    },

    homeText: {
        color: '#FFFFFF',
        fontSize: 16,
        marginTop: -5,
    },

    logo: {
        width: 55,
        height: 55,
        marginLeft: 17,
    },

    notif: {
        padding: 0,
        marginLeft: 147,
    },

    profileContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 13,
    },

    profile: {
        padding: 0,
    },

    profileText: {
        color: '#FFFFFF',
        fontSize: 16,
        marginTop: -10,
    },

    cuidadoresContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },

    c: {
        color: '#0A7280',
        fontSize: 45,
        marginRight: 25,
    },

    ll: {
        padding: 0,
    },

    cuidador1Container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },

    cuidador2Container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
    },

    cuidador3Container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
    },

    cuidador4Container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
    },

    c1: {
        height: 105, // Incrementado para ajustar el icono
        width: 350,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        borderRadius: 25, // Bordes redondeados
    },

    c1Icon: {
        marginLeft: 10, // Centrar el ícono hacia la izquierda
        marginRight: 15, // Centrar el texto según el ícono
    },

    c1TextContainer: {
        flexDirection: 'column',
    },

    c1Text: {
        color: '#FFFFFF',
        fontSize: 27, // Ajustado para mejor visibilidad
    },

    c1Apellido: {
        marginTop: 0, // Espacio entre NOMBRE y APELLIDO
    },

    bottomBar: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#02515B',
    },
});

export default HomeUA;
