import React, { Component } from 'react';
import { View } from 'react-native';
import { Topo, Resultado, Painel } from './src/components';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { num1: '', num2: '', operacao: 'soma', resultado: '' };

    //Bind mantem o contexto onde vai ser chamado
    this.calcular = this.calcular.bind(this);
    this.atualizaValor = this.atualizaValor.bind(this);
    this.atualizaOperacao = this.atualizaOperacao.bind(this);
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
    this.setState({ resultado : resultado.toString() });
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
        <Topo />
        <Resultado resultado={this.state.resultado} />
        <Painel
          num1={this.state.num1}
          num2={this.state.num2}
          operacao={this.state.operacao}
          calcular={this.calcular}
          atualizaOperacao={this.atualizaOperacao}
          atualizaValor={this.atualizaValor}
        />
      </View>
    );
  }
}
