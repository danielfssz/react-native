import React, { Component } from 'react';
import { View, StatusBar, Image, Text, StyleSheet } from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalheServico = require('../../imgs/detalhe_servico.png');

export default class CenaEmpresa extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor="#CCC" />
        <BarraNavegacao voltar navigation={this.props.navigation} />
        <View style={styles.cabecalho}>
          <Image source={detalheServico} />
          <Text style={styles.txtTitulo}>Nossos serviços</Text>
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
    color: '#19D1C8',
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
