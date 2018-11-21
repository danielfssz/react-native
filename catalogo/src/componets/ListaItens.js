import React, { Component } from "react";
import { View } from "react-native";
import Item from "../componets/Item";

export default class catologo extends Component {
  render() {
    return (
      <View>
        <Item />
        <Item />
        <Item />
      </View>
    );
  }
}
