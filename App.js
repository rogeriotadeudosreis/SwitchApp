import React, {useState} from 'react';
import {Switch, Text, View} from 'react-native';
import styles from './src/assets/styles';

export default function App() {
  const [habilitado, setHabilitado] = useState(false);

  function valorDoSwitch() {
    setHabilitado(estadoAnterior => !estadoAnterior);
    console.warn(habilitado);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Aula de Switch</Text>
      <Switch
        trackColor={{false: '#767577', true: '#f4f3f4'}}
        thumbColor={habilitado ? 'blue' : '#f4f3f4'}
        onValueChange={valorDoSwitch}
        value={habilitado}
      />
    </View>
  );
}
