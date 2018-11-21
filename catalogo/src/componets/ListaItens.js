import React, { Component } from "react";
import { ScrollView } from "react-native";
import Item from "../componets/Item";
import axios from "axios";

export default class catologo extends Component {
  constructor(props) {
    super(props);
    this.state = { listaItens: [] };
  }

  componentWillMount() {
    //Requisição http
    axios
      .get("http://faus.com.br/recursos/c/dmairr/api/itens.html")
      .then(res => {
        this.setState({ listaItens: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <ScrollView>
        {this.state.listaItens.map(item => (
          <Item key={item.titulo} item={item} />
        ))}
      </ScrollView>
    );
  }
}
