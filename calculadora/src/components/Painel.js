import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Entrada from './Entrada';
import Operacao from './Operacao';
import Comando from './Comando';

export class Painel extends Component {
  constructor(props) {
    super(props);

    this.state = { num1: '10', num2: '25' };
    this.calcular = this.calcular.bind(this);
    this.atualizaValor = this.atualizaValor.bind(this);
    //Bind mantem o contexto onde vai ser chamado
  }

  calcular() {
    const resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
    alert(resultado);
  }

  atualizaValor(nome, numero) {
    const obj = {};
    obj[nome] = numero;
    this.setState(obj);
  }

  render() {
    return (
      <View>
        <Text>Painel</Text>
        <Entrada
          num1={this.state.num1}
          num2={this.state.num2}
          atualizaValor={this.atualizaValor}
        />
        <Operacao />
        <Comando acao={this.calcular} />
      </View>
    );
  }
}
