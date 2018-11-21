import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Button } from "react-native";

class jockeypo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      escolhaUsuario: "",
      escolhaComputador: "",
      resultado: "Faça uma jogada!"
    };
  }

  jokenpo(escolhaUsuario) {
    var numComputador = Math.floor(Math.random() * 3);
    var arrJokenpo = Array(3);
    arrJokenpo[0] = "Pedra";
    arrJokenpo[1] = "Papel";
    arrJokenpo[2] = "Tesoura";

    var escolhaComputador = arrJokenpo[numComputador];

    var resultado;
    if (escolhaUsuario == escolhaComputador) {
      resultado = "Empate";
    } else if (escolhaComputador == "Pedra") {
      if (escolhaUsuario == "Papel") {
        resultado = "Você ganhou! :D";
      } else if (escolhaUsuario == "Tesoura") {
        resultado = "Você perdeu :(";
      }
    } else if (escolhaComputador == "Papel") {
      if (escolhaUsuario == "Tesoura") {
        resultado = "Você ganhou! :D";
      } else if (escolhaUsuario == "Pedra") {
        resultado = "Você perdeu :(";
      }
    } else if (escolhaComputador == "Tesoura") {
      if (escolhaUsuario == "Pedra") {
        resultado = "Você ganhou! :D";
      } else if (escolhaUsuario == "Papel") {
        resultado = "Você perdeu :(";
      }
    }

    this.setState({
      escolhaUsuario: escolhaUsuario,
      escolhaComputador: escolhaComputador,
      resultado: resultado
    });
  }

  render() {
    return (
      <View>
        <Text>Escolha do computador: {this.state.escolhaComputador}</Text>
        <Text>Escolha do usuário: {this.state.escolhaUsuario}</Text>
        <Text>Resultado: {this.state.resultado}</Text>
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
