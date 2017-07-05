import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import ReactNativeButton from "react-native-button";

export default class Button extends Component {
  render() {
    return (
      <ReactNativeButton
        containerStyle={{
          marginTop: 20,
          marginLeft: 20,
          marginRight: 20,
          padding: 10,
          height: 45,
          overflow: "hidden",
          borderRadius: 4,
          backgroundColor: "#000"
        }}
        style={{ fontSize: 20, color: "#fff" }}
      >
        Search
      </ReactNativeButton>
    );
  }
}
