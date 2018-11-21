import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

export default class catologo extends Component {
  constructor(props) {
    super(props);
    console.log("Construindo a aplicação");
  }

  componentWillMount() {
    console.log("Fazendo alguma coisa antes da renderização.");
  }

  componentDidMount() {
    console.log("Fazer alguma coisa depois da renderização.");
  }

  render() {
    console.log("Objeto é renderizado");
    return <Text>Testando</Text>;
  }
}
