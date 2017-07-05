import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

import { RadioButtons, SegmentedControls } from "react-native-radio-buttons";

export default class Segment extends Component {
  state = {
    selectedOption: "Round trip"
  };

  render() {
    const options = ["Round trip", "Oneway"];

    function setSelectedOption(selectedOption) {
      this.setState({
        selectedOption
      });
    }

    return (
      <SegmentedControls
        tint={"#000"}
        selectedTint={"white"}
        backTint={"#fff"}
        options={options}
        allowFontScaling={false} // default: true
        onSelection={setSelectedOption.bind(this)}
        containerStyle={{
          marginTop: 20,
          marginLeft: 20,
          marginRight: 20
        }}
        selectedOption={this.state.selectedOption}
        optionStyle={{
          fontFamily: "AvenirNext-Medium"
        }}
        optionContainerStyle={{ flex: 1 }}
      />
    );
  }
}
