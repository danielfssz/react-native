import React, { Component } from "react";
import { AppRegistry, View } from "react-native";

import BarraNavegacao from "./src/components/BarraNavegacao";

export default class atmconsultoria extends Component {
  render() {
    return (
      <View>
        <BarraNavegacao />
      </View>
    );
  }
}

AppRegistry.registerComponent("atmconsultoria", () => atmconsultoria);
