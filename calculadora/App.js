import React from 'react';
import { View } from 'react-native';
import { Topo, Resultado, Painel } from './src/components';

export default props => (
  <View>
    <Topo />
    <Resultado />
    <Painel />
  </View>
);
