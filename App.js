import React, {useState} from 'react';
import {Switch, Text, View} from 'react-native';
import styles from './src/assets/styles';

export default function App() {
  const [isEnable, setIsEnable] = useState(false);

  function alterarSwitch() {
    setIsEnable(previousState => !previousState);
    console.warn(isEnable);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Aula de Switch</Text>
      <Switch
        trackColor={{false: '#95a5a6', true: '#95a5a6'}}
        thumbColor={isEnable ? 'blue' : '#2c3e50'}
        onValueChange={alterarSwitch}
        value={isEnable}
      />
      <View>
        <Text style={styles.texto}>{isEnable ? 'Switch Ligado' : 'Switch Desligado'}</Text>
      </View>
    </View>
  );
}
