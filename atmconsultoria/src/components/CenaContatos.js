import React, { Component } from 'react';
import { View, StatusBar, Image, Text, StyleSheet } from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalheContato = require('../../imgs/detalhe_contato.png');

export default class CenaContatos extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF' }}>
        <StatusBar backgroundColor="#CCC" />
        <BarraNavegacao voltar navigation={this.props.navigation} />
        <View style={styles.cabecalho}>
          <Image source={detalheContato} />
          <Text style={styles.txtTitulo}>Contatos</Text>
        </View>
        <View style={styles.detalheContatos}>
          <Text style={styles.txtContatos}>Tel: 12345678</Text>
          <Text style={styles.txtContatos}>Cel: 987654321</Text>
          <Text style={styles.txtContatos}>Email: daniel@daniel.com</Text>
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
    color: '#61BD8C',
    marginTop: 20
  },
  detalheContatos: {
    marginTop: 20,
    fontSize: 18,
    color: '#000',
    marginLeft: 20
  },
  txtContatos: {
    fontSize: 18
  }
});
