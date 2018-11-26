import React, { Component } from "react";
import { View, StatusBar, Image, Text } from "react-native";
import BarraNavegacao from "./BarraNavegacao";

const detalheCliente = require("../../imgs/detalhe_cliente.png");
const cliente1 = require("../../imgs/cliente1.png");
const cliente2 = require("../../imgs/cliente2.png");

export default class CenaCliente extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor="#CCC" />
        <BarraNavegacao />
    
        <Image source={detalheCliente} />
        <Text>Nossos clientes</Text>
        <Image source={cliente1} />
        <Text>Nossos clientes</Text>
        <Image source={cliente2} />
        <Text>Nossos clientes</Text>
      </View>
    );
  }
}
