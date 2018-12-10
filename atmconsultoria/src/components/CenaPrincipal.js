import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const logo = require('../../imgs/logo.png');
const menuCliente = require('../../imgs/menu_cliente.png');
const menuContato = require('../../imgs/menu_contato.png');
const menuEmpresa = require('../../imgs/menu_empresa.png');
const menuServicos = require('../../imgs/menu_servico.png');

export default class CenaPrincipal extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor="#CCC" />
        <BarraNavegacao />
        <View style={styles.logo}>
          <Image source={logo} />
        </View>
        <View style={styles.menu}>
          <View style={styles.menuGrupo}>
            <TouchableHighlight
              onPress={() => this.props.navigation.push('CenaCliente')}
            >
              <Image style={styles.imgMenu} source={menuCliente} />
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => this.props.navigation.push('CenaContatos')}
            >
              <Image style={styles.imgMenu} source={menuContato} />
            </TouchableHighlight>
          </View>
          <View style={styles.menuGrupo}>
            <TouchableHighlight
              onPress={() => this.props.navigation.push('CenaEmpresa')}
            >
              <Image style={styles.imgMenu} source={menuEmpresa} />
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() => this.props.navigation.push('CenaServicos')}
            >
              <Image style={styles.imgMenu} source={menuServicos} />
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 30,
    alignItems: 'center'
  },
  menu: {
    alignItems: 'center',
    marginTop: 15
  },
  menuGrupo: {
    flexDirection: 'row'
  },
  imgMenu: {
    margin: 15
  }
});
