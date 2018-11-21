import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Button } from "react-native";

class jockeypo extends Component {
  constructor(props) {
    super(props);
    this.state = { escolhaUsuario: "", escolhaComputador: "" };
  }

  jokenpo(escolhaUsuario) {
    var numComputador = Math.floor(Math.random() * 3);
    var arrJokenpo = Array(3);
    arrJokenpo[0] = "Pedra";
    arrJokenpo[1] = "Papel";
    arrJokenpo[2] = "Tesoura";    

    var escolhaComputador = arrJokenpo[numComputador];    

    this.setState({
      escolhaUsuario: escolhaUsuario,
      escolhaComputador: escolhaComputador
    });
  }

  render() {
    return (
      <View>
        <Text>Escolha do computador: {this.state.escolhaComputador}</Text>
        <Text>Escolha do usuário: {this.state.escolhaUsuario}</Text>
        <Text>Resultado</Text>
        <Button
          title="pedra"
          onPress={() => {
            this.jokenpo("Pedra");
          }}
        />
        <Button
          title="papel"
          onPress={() => {
            this.jokenpo("Papel");
          }}
        />
        <Button
          title="tesoura"
          onPress={() => {
            this.jokenpo("Tesoura");
          }}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent("jockeypo", () => jockeypo);
