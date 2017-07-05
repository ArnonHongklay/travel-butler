import _ from "lodash";
import React, { Component } from "react";
import { AppRegistry, Text, View } from "react-native";

import Search from "./app/screens/Search";

export default class TravelButler extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     date: "2017-08-01",
  //     dateDeparture: "",
  //     dateReturn: "",
  //     films: [],
  //     query: "",
  //     queryOrigin: "",
  //     queryDestination: "",
  //     selectedOption: "Round trip",
  //     inputValue: "You can change me!"
  //   };
  // }
  //
  // _handleTextChange = inputValue => {
  //   this.setState({ inputValue });
  // };

  render() {
    return <Search />;
  }
}

AppRegistry.registerComponent("TravelButler", () => TravelButler);
