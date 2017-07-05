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
  state = {
    segmentValue: "",
    originValue: "",
    destinationValue: "",
    departureValue: "",
    returnValue: ""
  };

  onChangeSegment(data) {
    this.setState({
      segmentValue: data
    });
  }

  onChangeOrigin(data) {
    this.setState({
      originValue: data
    });
  }

  onChangeDestination(data) {
    this.setState({
      destinationValue: data
    });
  }

  onChangeDeparture(data) {
    this.setState({
      departureValue: data
    });
  }
  onChangeReturn(data) {
    this.setState({
      returnValue: data
    });
  }

  render() {
    return (
      <View style={UI.container}>
        <ToolBar name="TRAVEL BUTLER!" />
        <Segment onChange={this.onChangeSegment.bind(this)} />
        <AutoComplete name="origin" onChange={this.onChangeOrigin.bind(this)} />
        <AutoComplete
          name="destination"
          onChange={this.onChangeDestination.bind(this)}
        />
        <DatePicker
          name="departure"
          onChange={this.onChangeDeparture.bind(this)}
        />
        {this.state.segmentValue == "Oneway"
          ? null
          : <DatePicker
              name="return"
              onChange={this.onChangeReturn.bind(this)}
            />}
        <Button name="SEARCH FIGHTS" dataSubmit={this.state} />
      </View>
    );
  }
}
