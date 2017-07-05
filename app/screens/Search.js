import _ from "lodash";
import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";

import UI from "../UI";
import ToolBar from "../components/ToolBar";
import AutoComplete from "../components/AutoComplete";
import Segment from "../components/Segment";
import DatePicker from "../components/DatePicker";
import Button from "../components/Button";

export default class Search extends Component {
  render() {
    return (
      <View style={UI.container}>
        <ToolBar name="TRAVEL BUTLER!" />
        <Segment />
        <AutoComplete name="departure" />
        <AutoComplete name="return" />
        <DatePicker name="departure" />
        <DatePicker name="return" />
        <Button name="SEARCH FIGHTS" />
      </View>
    );
  }
}
