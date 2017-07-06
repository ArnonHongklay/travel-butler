import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Toolbar extends Component {
  render() {
    return (
      <View style={ui.toolbar}>
        <Text style={ui.toolbarTitle}>
          {this.props.name}
        </Text>
      </View>
    );
  }
}

const ui = StyleSheet.create({
  toolbar: {
    backgroundColor: "#81c04d",
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: "row"
  },
  toolbarButton: {
    width: 50,
    color: "#fff",
    textAlign: "center"
  },
  toolbarTitle: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    flex: 1
  }
});
