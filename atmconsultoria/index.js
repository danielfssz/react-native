import React, { Component } from "react";
import { AppRegistry } from "react-native";
import CenaPrincipal from "./src/components/CenaPrincipal";

export default class atmconsultoria extends Component {
  render() {
    return <CenaPrincipal />;
  }
}

AppRegistry.registerComponent("atmconsultoria", () => atmconsultoria);
