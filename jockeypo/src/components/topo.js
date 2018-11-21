import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";

class Topo extends Component {
  render() {
    return (
      <View style={styles.topo}>
        <Image source={require("../../imgs/jokenpo.png")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topo: {
    justifyContent: "center",
    flexDirection: 'row'
  }
});

export default Topo;
