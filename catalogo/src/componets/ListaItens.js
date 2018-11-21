import React, { Component } from "react";
import { View } from "react-native";
import Item from "../componets/Item";
import axios from "axios";

export default class catologo extends Component {
  componentWillMount() {
    //Requisição http
    axios
      .get("http://faus.com.br/recursos/c/dmairr/api/itens.html")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

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
