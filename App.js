import React, {useState} from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';

export default function App() {
  const [habilitado, setHabilitado] = useState(false);

  function valor() {
    setHabilitado(estadoAnterior => !estadoAnterior);
    console.warn(habilitado);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Aula de Switch</Text>
      <Switch 
      trackColor={{false: '#767577', true:'#81b0ff'}}
      thumbColor={habilitado ? '#f5dd4b' : '#f4f3f4'}
      onValueChange={valor}
      value={habilitado}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#804000',
    // color: 
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
