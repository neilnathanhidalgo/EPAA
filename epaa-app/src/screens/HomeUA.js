import React from 'react';
import { View, StyleSheet, Image, Platform, StatusBar as RNStatusBar, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const cuidadores = [
    { name1: 'Felipe', lastname1: 'Adanaque Medina' },
    { name2: 'Alejandra', lastname2: 'Ruiz Zapata' },
    { name3: 'Esteban', lastname3: 'Castillo Soto' },
    { name4: 'Mirella', lastname4: 'Rufino Granja' },
  ];

const HomeUA = ({navigation}) => {   
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
                    <TouchableOpacity onPress={() => navigation.navigate('HomeUA')}>
                        <View style={styles.homeContainer}>
                            <Ionicons name="home" size={40} color="#FFFFFF" style={styles.home} />
                            <Text style={[styles.homeText, { fontFamily: "Oswald" }]}>HOME</Text>
                        </View>
                    </TouchableOpacity>
                    
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
            
            {/* Contenedor para CUIDADORES e icono LL */}
            <View style={styles.cuidadoresContainer}>
                <Text style={[styles.c, { fontFamily: "Oswald" }]}>CUIDADORES</Text>
                <FontAwesome6 name="square-phone" size={87} color="#FFBE00" style={styles.ll} />
            </View>

            {/* Contenedor para CUIDADOR1 */}
            <View style={styles.cuidador1Container}>
                <View style={[styles.c1, { backgroundColor: "#1B3B52"}]}>
                    <Ionicons name="person-circle-outline" size={95} color="#FFFFFF" style={styles.c1Icon} />
                    <View style={styles.c1TextContainer}>
                        <Text style={[styles.c1Text, { fontFamily: "Oswald" }]}>{cuidadores[0].name1.toUpperCase()}</Text>
                        <Text style={[styles.c1Text, styles.c1Apellido, { fontFamily: "Oswald" }]}>{cuidadores[0].lastname1.toUpperCase()}</Text>
                    </View>
                </View>
            </View>

            {/* Contenedor para CUIDADOR2 */}
            <View style={[styles.cuidador2Container]}>
                <View style={[styles.c1, { backgroundColor: "#F6931E" }]}>
                    <Ionicons name="person-circle-outline" size={95} color="#FFFFFF" style={styles.c1Icon} />
                    <View style={styles.c1TextContainer}>
                    <Text style={[styles.c1Text, { fontFamily: "Oswald" }]}>{cuidadores[1].name2.toUpperCase()}</Text>
                    <Text style={[styles.c1Text, styles.c1Apellido, { fontFamily: "Oswald" }]}>{cuidadores[1].lastname2.toUpperCase()}</Text>
                    </View>
                </View>
            </View>

            {/* Contenedor para CUIDADOR3 */}
            <View style={[styles.cuidador3Container]}>
                <View style={[styles.c1, { backgroundColor: "#FB663C" }]}>
                    <Ionicons name="person-circle-outline" size={95} color="#FFFFFF" style={styles.c1Icon} />
                    <View style={styles.c1TextContainer}>
                    <Text style={[styles.c1Text, { fontFamily: "Oswald" }]}>{cuidadores[2].name3.toUpperCase()}</Text>
                    <Text style={[styles.c1Text, styles.c1Apellido, { fontFamily: "Oswald" }]}>{cuidadores[2].lastname3.toUpperCase()}</Text>
                    </View>
                </View>
            </View>

            {/* Contenedor para CUIDADOR4 */}
            <View style={[styles.cuidador4Container]}>
                <View style={[styles.c1, { backgroundColor: "#8A572C" }]}>
                    <Ionicons name="person-circle-outline" size={95} color="#FFFFFF" style={styles.c1Icon} />
                    <View style={styles.c1TextContainer}>
                    <Text style={[styles.c1Text, { fontFamily: "Oswald" }]}>{cuidadores[3].name4.toUpperCase()}</Text>
                    <Text style={[styles.c1Text, styles.c1Apellido, { fontFamily: "Oswald" }]}>{cuidadores[3].lastname4.toUpperCase()}</Text>
                    </View>
                </View>
            </View>

            {/* Botón "+ AGREGAR CUIDADOR" */}
            <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+ AGREGAR CUIDADOR</Text>
            </TouchableOpacity>

            {/* Barra inferior */}
            <View style={[styles.rectangle, styles.bottomBar]}>
                <View style={styles.bottomBarContent}>
                    {/* Contenedor para CALENDAR y texto */}
                    <View style={styles.calContainer}>
                        <Ionicons name="calendar" size={50} color="#FFFFFF" style={styles.cal} />
                        <Text style={[styles.calText, { fontFamily: "Oswald" }]}>RECORDATORIOS</Text>
                    </View>
                    
                    {/* Contenedor para PERFIL y texto */}
                    <View style={styles.recomContainer}>
                        <AntDesign name="like2" size={52} color="#FFFFFF" style={styles.recom} />
                        <Text style={[styles.recomText, { fontFamily: "Oswald" }]}>RECOMENDACIONES</Text>
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
        marginRight: 10, // Centrar el texto según el ícono
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

    addButton: {
        backgroundColor: '#02515B',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 300,
        marginHorizontal: 'auto',
        borderRadius: 20,
        marginTop: 23, // Ajusta según sea necesario
    },
    
    addButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily: 'Oswald',
    },    

    bottomBar: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#02515B',
    },

    bottomBarContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 'auto',
    },

    calContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 3,
    },

    cal: {
        padding: 0,
    },

    calText: {
        color: '#FFFFFF',
        fontSize: 16,
        marginTop: -5,
    },

    recomContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 55,
        marginTop: 3,
    },

    recom: {
        padding: 0,
    },

    recomText: {
        color: '#FFFFFF',
        fontSize: 16,
        marginTop: -5,
    },
});