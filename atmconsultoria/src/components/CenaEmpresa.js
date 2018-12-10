import React, { Component } from 'react';
import { View, StatusBar, Image, Text, StyleSheet } from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalheEmpresa = require('../../imgs/detalhe_empresa.png');

export default class CenaEmpresa extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF' }}>
        <StatusBar backgroundColor="#EC7148" />
        <BarraNavegacao
          voltar
          navigation={this.props.navigation}
          corFundo="#EC7148"
        />
        <View style={styles.cabecalho}>
          <Image source={detalheEmpresa} />
          <Text style={styles.txtTitulo}>A Empresa</Text>
        </View>
        <View style={styles.detalheEmpresa}>
          <Text style={styles.txtContatos}>
            A Empresa é composta por um desenvolvedor em formação.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnVoltar: {
    margin: 10
  },
  cabecalho: {
    flexDirection: 'row',
    marginTop: 15
  },
  txtTitulo: {
    fontSize: 30,
    color: '#EC7148',
    marginTop: 20
  },
  detalheEmpresa: {
    marginTop: 20,
    fontSize: 18,
    color: '#000',
    marginLeft: 20
  },
  txtContatos: {
    fontSize: 18
  }
});
