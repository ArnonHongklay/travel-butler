import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

import { RadioButtons, SegmentedControls } from "react-native-radio-buttons";

export default class Segment extends Component {
  state = {
    selectedOption: "Round trip"
  };

  render() {
    const options = ["Round trip", "Oneway"];
    const setSelectedOption = selectedOption => {
      this.setState({
        selectedOption
      });
    };

    return (
      <SegmentedControls
        tint={"#81c04d"}
        selectedTint={"white"}
        backTint={"#fff"}
        options={options}
        allowFontScaling={false} // default: true
        onSelection={setSelectedOption.bind(this)}
        selectedOption={this.state.selectedOption}
        containerStyle={ui.segmentContainerStyle}
        optionStyle={ui.segmentOptionStyle}
        optionContainerStyle={ui.segmentOptionContainerStyle}
      />
    );
  }
}

const ui = StyleSheet.create({
  segmentContainerStyle: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20
  },
  segmentOptionStyle: {
    fontFamily: "AvenirNext-Medium"
  },
  segmentOptionContainerStyle: {
    flex: 1
  }
});
