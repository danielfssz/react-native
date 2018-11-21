import React, { Component } from "react";
import { AppRegistry, View } from "react-native";
import ListaItens from "./src/componets/ListaItens";

class catalogo extends Component {
  render() {
    return <ListaItens />;
  }
}

AppRegistry.registerComponent("catalogo", () => catalogo);
