import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

const ua = [
    { name1: 'Emilio', name2: 'Eduardo', lastname1: 'Díaz', lastname2: 'Garnique' },
];

const AlertaCaidaUA = () => {
    const [fontsLoaded] = useFonts({
        Oswald: require("../assets/fonts/Oswald.ttf"),
    });

    const { name1, lastname1 } = ua[0];

    const [seconds, setSeconds] = useState(60);
    const [alertSent, setAlertSent] = useState(false);
    const [blink, setBlink] = useState(false);
    const [cancelled, setCancelled] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!cancelled && seconds > 0) {
                setSeconds(seconds - 1);
                setBlink(prevState => !prevState);
            } else if (!cancelled && seconds === 0) {
                setBlink(false);
                setAlertSent(true);
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [seconds, cancelled]);

    const handleCancel = () => {
        setCancelled(true);
        setSeconds(0);
    };

    return (
        <View style={styles.container}>

            <Text style={[styles.title, styles.whiteText, styles.oswald]}>¡ALERTA!</Text>

            <Ionicons name="warning" size={200} color={alertSent ? "#AA1A1F" : (blink ? "#FFFFFF" : "#AA1A1F")} />

            <Text style={[styles.name, styles.whiteText, styles.oswald]}>{name1.toUpperCase()} {lastname1.toUpperCase()}</Text>
            <Text style={[styles.question, styles.whiteText, styles.oswald]}>¿HAS SUFRIDO UNA CAIDA?</Text>
            <Text style={[styles.countdown, styles.whiteText, styles.oswald]}>
                {alertSent ? <Text style={{ color: '#AA1A1F' }}>ALERTA ENVIADA</Text> : (cancelled ? <Text style={{ color: '#AA1A1F' }}>ALERTA CANCELADA</Text> : `EMITIENDO ALERTA EN...`)}
            </Text>
            <Text style={[styles.timer, styles.whiteText, styles.oswald]}>
                {alertSent ? "" : (cancelled ? "" : `${seconds} SEGUNDOS`)}
            </Text>
            {(!alertSent || cancelled) &&
                <Text style={[styles.cancel, styles.whiteText, styles.oswald]}>PUEDE CANCELAR LA ALERTA</Text>
            }
            {(!alertSent || cancelled) &&
                <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                    <Text style={[styles.cancelButtonText, styles.oswald]}>CANCELAR</Text>
                </TouchableOpacity>
            }
        </View>
    );
};

export default AlertaCaidaUA;

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
        fontSize: 45,
    },

    question: {
        fontSize: 35,
        marginBottom: 10,
    },

    countdown: {
        fontSize: 30,
        marginBottom: 5,
    },

    timer: {
        fontSize: 30,
        marginBottom: 20,
    },
    cancel: {
        fontSize: 25,
        marginBottom: 10,
    },
    cancelButton: {
        backgroundColor: '#02515B',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginTop: 20,
    },
    cancelButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily: "Oswald",
        textTransform: "uppercase",
    },
    whiteText: {
        color: '#FFFFFF',
    },
    oswald: {
        fontFamily: "Oswald",
        textTransform: "uppercase",
    }
});
