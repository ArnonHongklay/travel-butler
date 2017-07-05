import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Toolbar extends Component {
  render() {
    return (
      <View style={UI.toolbar}>
        <Text style={UI.toolbarTitle}>Travel Butler!</Text>
      </View>
    );
  }
}

const UI = StyleSheet.create({
  toolbar: {
    backgroundColor: "#81c04d",
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: "row" //Step 1
  },
  toolbarButton: {
    width: 50, //Step 2
    color: "#fff",
    textAlign: "center"
  },
  toolbarTitle: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    flex: 1 //Step 3
  }
});
