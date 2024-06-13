import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

const ua = [
    { name1: 'Emilio', name2: 'Eduardo', lastname1: 'Díaz', lastname2: 'Garnique' },
];

const AlertaAyudaCui = () => {
    const [fontsLoaded] = useFonts({
        Oswald: require("../assets/fonts/Oswald.ttf"),
    });

    const { name1, lastname1 } = ua[0];
    const [blinking, setBlinking] = useState(true);
    const [iconColor, setIconColor] = useState("#FFFFFF");

    useEffect(() => {
        const interval = setInterval(() => {
            setIconColor(prevColor => prevColor === "#FFFFFF" ? "#AA1A1F" : "#FFFFFF");
        }, 500);

        return () => clearInterval(interval);
    }, []);

    const toggleBlink = () => {
        setBlinking(!blinking);
    };

    return (
        <View style={styles.container}>
            <Text style={[styles.title, styles.whiteText, styles.oswald]}>¡ALERTA!</Text>

            <View style={styles.iconContainer}>
                <Ionicons name="warning" size={300} color={blinking ? iconColor : "#AA1A1F"} />
            </View>

            <Text style={[styles.name, styles.whiteText, styles.oswald]}>{name1.toUpperCase()} {lastname1.toUpperCase()}</Text>
            <Text style={[styles.question, styles.whiteText, styles.oswald]}>ESTÁ SOLICITANDO AYUDA</Text>

            <TouchableOpacity style={styles.atenderButton} onPress={toggleBlink}>
                <Text style={[styles.atenderButtonText, styles.oswald]}>ATENDER</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AlertaAyudaCui;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0097AA',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 65,
    },

    name: {
        fontSize: 60,
        top: -30,
    },

    question: {
        fontSize: 40,
        top: 0,
    },

    whiteText: {
        color: '#FFFFFF',
    },
    
    iconContainer: {
        marginBottom: 20,
    },
    
    atenderButton: {
        backgroundColor: '#02515B',
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        height: 75,
        borderRadius: 20,
        marginTop: 40,
    },
    
    atenderButtonText: {
        color: '#FFFFFF',
        fontSize: 40,
    },
    
    oswald: {
        fontFamily: "Oswald",
        textTransform: "uppercase",
    }
});
