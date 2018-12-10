import React from 'react';
import { View } from 'react-native';
import Topo from './src/components/Topo';
import Resultado from './src/components/Resultado';
import Painel from './src/components/Painel';

export default props => (
  <View>
    <Topo />
    <Resultado />
    <Painel />
  </View>
);
