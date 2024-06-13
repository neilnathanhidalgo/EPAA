import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Dimensions, Text, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get("window");

const dialPad = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "del"];
const pinLength = 4;
const dialPadSize = width * 0.2;

const users = [
    { name1: 'Emilio', name2: 'Eduardo', lastname1: 'Díaz', lastname2: 'Garnique', pin: '1111' },
];

const UALogin = ({ navigation }) => {
    const [pinCode, setPinCode] = useState([]);
    const [currentUser, setCurrentUser] = useState(users[0]);
    const [errorMessage, setErrorMessage] = useState('');

    const [fontsLoaded] = useFonts({
        Oswald: require("../assets/fonts/Oswald.ttf"),
        OldRegular: require("../assets/fonts/OldSRegular.ttf"),
    });

    useEffect(() => {
        if (pinCode.length === pinLength) {
            const enteredPin = pinCode.join('');
            const currentPin = currentUser.pin.toString(); // Asegurar que la contraseña sea una cadena
            if (enteredPin === currentPin) {
                navigation.navigate('HomeUA'); 
            } else {
                setErrorMessage('La contraseña no es correcta');
                setPinCode([]);
                setTimeout(() => setErrorMessage(''), 1500); // El mensaje de error desaparece después de 1.5 segundos
            }
        }
    }, [pinCode, currentUser, navigation]);

    const DialPad = ({ onPress }) => (
        <View style={styles.dialPadContainer}>
            <FlatList
                data={dialPad}
                scrollEnabled={false}
                numColumns={3}
                keyExtractor={(_, index) => index.toString()}
                columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 15, gap: 10 }}
                contentContainerStyle={{ justifyContent: 'space-between', flexGrow: 1 }}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => onPress(item)}
                        disabled={item === ""}
                        style={{
                            width: dialPadSize,
                            height: dialPadSize,
                            borderRadius: dialPadSize / 2,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: item === "del" ? "#FFFFFF" : "#EFEFEF",
                        }}
                    >
                        {item === "del" ? (
                            <Ionicons name="backspace" size={dialPadSize / 1.25} color="#006B78" />
                        ) : (
                            <Text style={{
                                fontSize: dialPadSize / 2.3,
                                color: "#006B78",
                            }}>
                                {item}
                            </Text>
                        )}
                    </TouchableOpacity>
                )}
            />
        </View>
    );

    return (
        <View style={styles.container}>
            <StatusBar style='auto'/>

            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo.png')} style={styles.logo} />
            </View>

            <Text style={[styles.BText, { fontFamily: "Oswald", fontSize: width * 0.1 }]}>
                BIENVENIDO/A
            </Text>

            <Text style={[styles.NombreText, { fontFamily: "Oswald", fontSize: width * 0.099 }]}>
                {currentUser.name1} {currentUser.lastname1}
            </Text>

            <Text style={[styles.cText, { fontFamily: "OldRegular", fontSize: width * 0.07 }]}>
                Ingresa tu clave
            </Text>

            <View style={styles.pinContainer}>
                {[...Array(pinLength).keys()].map((index) => (
                    <View
                        key={index}
                        style={[styles.pinDot, { backgroundColor: pinCode.length > index ? "#006B78" : "#EFEFEF" }]}
                    />
                ))}
            </View>

            <DialPad onPress={(item) => {
                if (item === "del") {
                    setPinCode(pinCode.slice(0, -1));
                } else if (!isNaN(item)) {
                    if (pinCode.length < pinLength) {
                        setPinCode([...pinCode, item]);
                    }
                }
            }} />

            {errorMessage ? (
                <Text style={styles.errorMessage}>
                    {errorMessage}
                </Text>
            ) : null}

            <TouchableOpacity onPress={() => console.log("Forgot password pressed")} style={styles.forgotPassword}>
                <Text style={[styles.oText, { fontFamily: "OldRegular", fontSize: width * 0.05 }]}>
                    ¿Olvidaste tu clave?
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default UALogin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
    },
    logoContainer: {
        marginVertical: height * 0.045,
        marginBottom: height * -0.01,
    },
    logo: {
        width: width * 0.4,
        height: width * 0.4,
        resizeMode: "contain",
    },
    BText: {
        color: "#006B78",
        alignSelf: 'center',
        textAlign: 'center',
    },
    NombreText: {
        color: "#006B78",
        alignSelf: 'center',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: height * -0.015,
    },
    cText: {
        color: "#006B78",
        alignSelf: 'center',
        marginVertical: height * 0.025,
    },
    pinContainer: {
        flexDirection: "row",
        marginBottom: height * 0.02,
    },
    pinDot: {
        width: width * 0.04,
        height: width * 0.04,
        borderRadius: width * 0.02,
        marginHorizontal: width * 0.03,
    },
    dialPadContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.009,
    },
    errorMessage: {
        color: 'red',
        fontSize: width * 0.04,
        marginVertical: height * 0.01,
    },
    oText: {
        color: "#006B78",
        textDecorationLine: 'underline',
    },
    forgotPassword: {
        marginBottom: height * 0.02,
    },
});