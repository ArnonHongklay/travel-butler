import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import ReactAutoComplete from "react-native-autocomplete-input";
import Countries from "../apis/countries.json";

const API = "https://swapi.co/api";
const API_AMADEUS = "https://api.sandbox.amadeus.com";
const API_VERSION = "v1.2";
const API_PATH = "airports/autocomplete";
const API_KEY = "bUe60BHjxhdts81QJRHmOCT2lyszowVT";

export default class AutoComplete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: [],
      fights: {},
      query: ""
    };
  }

  loadData() {
    if (this.state.query) {
      link = `${API_AMADEUS}/${API_VERSION}/${API_PATH}?apikey=${API_KEY}&term=${this
        .state.query}`;
    } else {
      link = `${API_AMADEUS}/${API_VERSION}/${API_PATH}?apikey=${API_KEY}&term=a`;
    }

    fetch(link).then(response => response.json()).then(json => {
      this.setState({ fights: json });
    });
  }

  componentWillMount() {
    this.loadData();
  }

  onSelection(query) {
    if (query === "") {
      return [];
    }

    const { fights } = this.state;
    const regex = new RegExp(`${query.trim()}`, "i");
    return fights.filter(fight => fight.label.search(regex) >= 0);
  }

  render() {
    const { query } = this.state;
    const fights = this.onSelection(query);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();

    return (
      <ReactAutoComplete
        autoCapitalize="none"
        autoCorrect={false}
        defaultValue={query}
        placeholder={`Enter ${this.props.name}`}
        data={
          fights.length === 1 && comp(query, fights[0].label.split("[")[0])
            ? []
            : fights
        }
        onChangeText={text => this.setState({ query: text })}
        renderItem={({ label, value }) =>
          <TouchableOpacity
            onPress={() => this.setState({ query: label.split(" [")[0] })}
          >
            <Text style={ui.itemText}>
              {label.split(" [")[0]}
            </Text>
          </TouchableOpacity>}
        containerStyle={ui.autoCompleteContainerStyle}
        listStyle={ui.autoCompleteListStyle}
        listContainerStyle={ui.autoCompleteListContainerStyle}
        inputContainerStyle={ui.autoCompleteInputContainerStyle}
      />
    );
  }
}

const ui = StyleSheet.create({
  autoCompleteContainerStyle: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 10,
    zIndex: 1
  },
  autoCompleteListStyle: {
    // backgroundColor: "#fff"
    // fontSize: 10,
    // zIndex: 2
  },
  autoCompleteListContainerStyle: {
    // backgroundColor: "#000"
    // fontSize: 10,
    // zIndex: 5
  },
  autoCompleteInputContainerStyle: {
    borderRadius: 2,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: "#fff",
    fontSize: 10
  },
  itemText: {
    fontSize: 10,
    margin: 5,
    borderRadius: 4
  }
});
