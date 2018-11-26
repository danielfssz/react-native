import { createStackNavigator, createAppContainer } from "react-navigation";
import CenaPrincipal from "./src/components/CenaPrincipal";
import CenaCliente from "./src/components/CenaCliente";

const AppNavigator = createStackNavigator(
  {
    CenaPrincipal: CenaPrincipal,
    CenaCliente: CenaCliente
  },
  {
    initialRouteName: "CenaPrincipal",
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default createAppContainer(AppNavigator);
