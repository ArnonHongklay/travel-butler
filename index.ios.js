/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import _ from "lodash";
import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

import ui from "./app/ui";
import DatePicker from "react-native-datepicker";
import { RadioButtons, SegmentedControls } from "react-native-radio-buttons";
import Button from "react-native-button";

export default class TravelButler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "2017-08-01",
      dateDeparture: "",
      dateReturn: "",
      films: [],
      query: "",
      queryOrigin: "",
      queryDestination: "",
      selectedOption: "Round trip",
      inputValue: "You can change me!"
    };
  }

  _handleTextChange = inputValue => {
    this.setState({ inputValue });
  };

  render() {
    const options = ["Round trip", "Oneway"];

    function setSelectedOption(selectedOption) {
      this.setState({
        selectedOption
      });
    }

    return (
      <View style={ui.container}>
        <View style={ui.toolbar}>
          <Text style={ui.toolbarTitle}>Travel Butler!</Text>
        </View>

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

        <DatePicker
          style={{
            height: 50,
            width: 335,
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20
          }}
          date={this.state.dateDeparture}
          mode="date"
          placeholder="Select departure date"
          format="YYYY-MM-DD"
          minDate="2017-01-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: "absolute",
              left: 10,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 0
            }
          }}
          onDateChange={date => {
            this.setState({ dateDeparture: date });
          }}
        />

        <DatePicker
          style={{
            height: 100,
            width: 335,
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20
          }}
          date={this.state.dateReturn}
          mode="date"
          placeholder="Select return date"
          format="YYYY-MM-DD"
          minDate="2017-01-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: "absolute",
              left: 10,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 0
            }
          }}
          onDateChange={date => {
            this.setState({ dateReturn: date });
          }}
          hidden={this.state.selectedOption == "Oneway"}
        />

        <Button
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
        </Button>
      </View>
    );
  }
}

AppRegistry.registerComponent("TravelButler", () => TravelButler);
