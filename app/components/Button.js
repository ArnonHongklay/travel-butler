import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import ReactNativeButton from "react-native-button";

export default class Button extends Component {
  render() {
    return (
      <ReactNativeButton
        containerStyle={ui.buttonContainerStyle}
        style={ui.buttonStyle}
      >
        {this.props.name}
      </ReactNativeButton>
    );
  }
}

const ui = StyleSheet.create({
  buttonStyle: { fontSize: 20, color: "#fff" },
  buttonContainerStyle: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    height: 45,
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: "#81c04d"
  }
});
