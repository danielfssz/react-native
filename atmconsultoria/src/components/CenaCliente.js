import React, { Component } from 'react';
import { View, StatusBar, Image, Text, StyleSheet } from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalheCliente = require('../../imgs/detalhe_cliente.png');
const cliente1 = require('../../imgs/cliente1.png');
const cliente2 = require('../../imgs/cliente2.png');

export default class CenaCliente extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor="#CCC" />

        <BarraNavegacao voltar navigation={this.props.navigation} />

        <View style={styles.cabecalho}>
          <Image source={detalheCliente} />
          <Text style={styles.txtNossosClientes}>Nossos clientes</Text>
        </View>
        <View style={styles.infoCliente}>
          <Image source={cliente1} />
          <Text style={styles.txtInfoCliente}>Nossos clientes</Text>
        </View>
        <View style={styles.infoCliente}>
          <Image source={cliente2} />
          <Text style={styles.txtInfoCliente}> Nossos clientes</Text>
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
  txtNossosClientes: {
    fontSize: 30,
    color: '#B9C941',
    marginTop: 20
  },
  infoCliente: {
    margin: 20
  },
  txtInfoCliente: {
    fontSize: 18,
    color: '#000',
    marginLeft: 20
  }
});
