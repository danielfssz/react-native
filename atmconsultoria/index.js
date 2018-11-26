import React, { Component } from "react";
import { AppRegistry, View, StatusBar } from "react-native";

import BarraNavegacao from "./src/components/BarraNavegacao";

export default class atmconsultoria extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor="#CCC" />
        <BarraNavegacao />
      </View>
    );
  }
}

AppRegistry.registerComponent("atmconsultoria", () => atmconsultoria);
