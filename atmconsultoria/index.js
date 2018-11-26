import React, { Component } from "react";
import { AppRegistry } from "react-native";
import CenaPrincipal from "./src/components/CenaPrincipal";
import CenaCliente from "./src/components/CenaCliente";

export default class atmconsultoria extends Component {
  render() {
    return <CenaCliente />;
  }
}

AppRegistry.registerComponent("atmconsultoria", () => atmconsultoria);
