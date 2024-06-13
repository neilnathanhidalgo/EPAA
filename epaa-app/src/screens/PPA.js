import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const PPA = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AlertaCaidaUA')}>
        <Text style={styles.buttonText}>CAIDA-UA</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AlertaCaidaCui')}>
        <Text style={styles.buttonText}>CAIDA-CUI</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AlertaRangoCui')}>
        <Text style={styles.buttonText}>FUERA-CUI</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AlertaAyudaCui')}>
        <Text style={styles.buttonText}>AYUDA-CUI</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PPA;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
});