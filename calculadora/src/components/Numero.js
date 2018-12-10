import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default props => (
  <TextInput
    keyboardType={'numeric'}
    style={styles.numero}
    underlineColorAndroid={'#000'}
  />
);

const styles = StyleSheet.create({
  numero: {
    width: 140,
    height: 80,
    fontSize: 20
  }
});
