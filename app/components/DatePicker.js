import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import ReactNativeDatePicker from "react-native-datepicker";

export default class DatePicker extends Component {
  state = {
    dateDeparture: "",
    dateReturn: ""
  };
  render() {
    return (
      <View>
        <ReactNativeDatePicker
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

        {/* <DatePicker
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
        /> */}
      </View>
    );
  }
}
