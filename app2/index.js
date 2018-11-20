import React from "react";
import { Text, View, AppRegistry, TouchableOpacity } from "react-native";

const Estilos = {
  principal: {
    paddingTop: 40
  },
  botao: {
    backgroundColor: '#48BBEC',
    padding: 10,
    borderColor: '#1d8eb8',
    borderWidth: 3,
    borderRadius: 8
  }, 
  textoBotao:{
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
};

const botaoPressionado = () => {
  alert('Botao Pressionado');
}

const App = () => {
  const { principal, botao, textoBotao } = Estilos;
  return (
    <View style={principal}>
      <TouchableOpacity style={botao}>
        <Text style={textoBotao}>Clique aqui</Text>
      </TouchableOpacity>
    </View>
  );
};

AppRegistry.registerComponent('app2', () => App);