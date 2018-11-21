import React, { Component } from "react";
import {
  AppRegistry,
  Image,
  Text,
  View,
  Button,
  StyleSheet
} from "react-native";

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
        <Topo />
        <View style={styles.palco}>
          <View style={styles.pnlAcoes}>
            <View style={styles.btnEscolha}>
              <Button
                title="pedra"
                onPress={() => {
                  this.jokenpo("Pedra");
                }}
              />
            </View>
            <View style={styles.btnEscolha}>
              <Button
                title="papel"
                onPress={() => {
                  this.jokenpo("Papel");
                }}
              />
            </View>
            <View style={styles.btnEscolha}>
              <Button
                title="tesoura"
                onPress={() => {
                  this.jokenpo("Tesoura");
                }}
              />
            </View>
          </View>
          <Text style={styles.txtResultado}>
            Resultado: {this.state.resultado}
          </Text>
          <Text>Escolha do computador: {this.state.escolhaComputador}</Text>
          <Image source={require("./imgs/papel.png")} />
          <Text>Escolha do usuário: {this.state.escolhaUsuario}</Text>
          <Image source={require("./imgs/papel.png")} />
        </View>
      </View>
    );
  }
}

class Topo extends Component {
  render() {
    return (
      <View style={styles.topo}>
        <Image source={require("./imgs/jokenpo.png")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  pnlAcoes: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10
  },
  topo: {
    justifyContent: "center"
  },
  palco: {
    alignItems: "center"
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: "bold",
    color: "red",
    height: 60
  }
});

AppRegistry.registerComponent("jockeypo", () => jockeypo);
