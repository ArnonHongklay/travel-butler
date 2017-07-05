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
import { Constants } from "expo";

import Autocomplete from "react-native-autocomplete-input";
import DatePicker from "react-native-datepicker";
import { RadioButtons, SegmentedControls } from "react-native-radio-buttons";
import Button from "react-native-button";

const API = "https://swapi.co/api";
const ROMAN = ["", "I", "II", "III", "IV", "V", "VI", "VII"];

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
      <View style={styles.container}>
        <View style={styles.toolbar}>
          <Text style={styles.toolbarButton}>Add</Text>
          <Text style={styles.toolbarTitle}>This is the title</Text>
          <Text style={styles.toolbarButton}>Like</Text>
        </View>
        <Text style={styles.paragraph}>Travel Butler!</Text>

        <TextInput
          value={this.state.inputValue}
          onChangeText={this._handleTextChange}
          style={styles.departure}
        />
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

const styles = StyleSheet.create({
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
  },
  container: {
    backgroundColor: "#F5FCFF",
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  autocompleteContainer: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20
  },
  itemText: {
    fontSize: 15,
    margin: 2
  },
  descriptionContainer: {
    // `backgroundColor` needs to be set otherwise the
    // autocomplete input will disappear on text input.
    backgroundColor: "#F5FCFF",
    marginTop: 8
  },
  infoText: {
    textAlign: "center"
  },
  titleText: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 10,
    marginTop: 10,
    textAlign: "center"
  },
  directorText: {
    color: "grey",
    fontSize: 12,
    marginBottom: 10,
    textAlign: "center"
  },
  openingText: {
    textAlign: "center"
  }
});

AppRegistry.registerComponent("TravelButler", () => TravelButler);
