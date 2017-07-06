import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import ReactNativeButton from "react-native-button";

const API_AMADEUS = "https://api.sandbox.amadeus.com";
const API_VERSION = "v1.2";
const API_PATH = "flights/low-fare-search";
const API_KEY = "bUe60BHjxhdts81QJRHmOCT2lyszowVT";

export default class Button extends Component {
  constructor(props, context) {
    super(props, context);
  }

  _handlePress() {
    console.log("Pressed!");

    const originValue = this.props.dataSubmit.originValue.value;
    const destinationValue = this.props.dataSubmit.destinationValue.value;
    const departureValue = this.props.dataSubmit.departureValue.date;
    const returnValue = this.props.dataSubmit.returnValue.date;
    const oneway = this.props.dataSubmit.segmentValue;

    console.log(oneway);
    if (oneway == "oneway") {
      link = `${API_AMADEUS}/${API_VERSION}/${API_PATH}?apikey=${API_KEY}&origin=${originValue}&destination=${destinationValue}&departure_date=${departureValue}&travel_class=ECONOMY`;
    } else {
      link = `${API_AMADEUS}/${API_VERSION}/${API_PATH}?apikey=${API_KEY}&origin=${originValue}&destination=${destinationValue}&departure_date=${departureValue}&return_date=${returnValue}&travel_class=ECONOMY&nonstop=false`;
    }
    console.log(link);
    fetch(link).then(response => response.json()).then(json => {
      console.log(json);
    });
  }

  render() {
    return (
      <ReactNativeButton
        containerStyle={ui.buttonContainerStyle}
        style={ui.buttonStyle}
        onPress={() => this._handlePress()}
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
