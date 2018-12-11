import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Entrada from './Entrada';
import Operacao from './Operacao';
import Comando from './Comando';

export class Painel extends Component {
  constructor(props) {
    super(props);

    this.state = { num1: '10', num2: '25', operacao: 'soma' };
    this.calcular = this.calcular.bind(this);
    this.atualizaValor = this.atualizaValor.bind(this);
    this.atualizaOperacao = this.atualizaOperacao.bind(this);
    //Bind mantem o contexto onde vai ser chamado
  }

  calcular() {
    let resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);

    switch (this.state.operacao) {
      case 'soma':
        resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
        break;
      case 'subtracao':
        resultado = parseFloat(this.state.num1) - parseFloat(this.state.num2);
        break;
      default:
        resultado = 0;  
        break;
    }

    alert(resultado);
  }

  atualizaValor(nome, numero) {
    const obj = {};
    obj[nome] = numero;
    this.setState(obj);
  }
  atualizaOperacao(opr) {
    this.setState({ operacao: opr });
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
        <Operacao
          operacao={this.state.operacao}
          atualizaOperacao={this.atualizaOperacao}
        />
        <Comando acao={this.calcular} />
      </View>
    );
  }
}
