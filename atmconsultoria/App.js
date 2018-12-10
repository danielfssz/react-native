import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import CenaPrincipal from './src/components/CenaPrincipal';
import CenaCliente from './src/components/CenaCliente';
import CenaContatos from './src/components/CenaContatos';

const AppNavigator = createStackNavigator(
  {
    CenaPrincipal: CenaPrincipal,
    CenaCliente: CenaCliente,
    CenaContatos: CenaContatos
  },
  {
    initialRouteName: 'CenaPrincipal',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
