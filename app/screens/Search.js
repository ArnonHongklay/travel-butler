import _ from "lodash";
import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";

import UI from "../UI";
import ToolBar from "../components/ToolBar";
import Segment from "../components/Segment";
import DatePicker from "../components/DatePicker";

export default class Search extends Component {
  render() {
    return (
      <View style={UI.container}>
        <ToolBar />
        <Segment />
        <DatePicker />
      </View>
    );
  }
}
