import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import CenaPrincipal from './src/components/CenaPrincipal';
import CenaCliente from './src/components/CenaCliente';

const AppNavigator = createStackNavigator(
  {
    CenaPrincipal: CenaPrincipal,
    CenaCliente: CenaCliente
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
