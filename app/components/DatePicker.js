import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import ReactNativeDatePicker from "react-native-datepicker";

export default class DatePicker extends Component {
  state = {
    minDate: "2017-08-01",
    format: "YYYY-MM-DD",
    date: "",
    selectedOption: ""
  };

  render() {
    return (
      <View>
        <ReactNativeDatePicker
          date={this.state.date}
          mode="date"
          format={this.state.format}
          minDate={this.state.minDate}
          placeholder={`Select ${this.props.name} date`}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          onDateChange={date => {
            this.setState({ date: date });
            this.props.onChange({ date });
          }}
          style={ui.datePickerStyle}
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
        />
      </View>
    );
  }
}

const ui = StyleSheet.create({
  datePickerStyle: {
    height: 50,
    width: 335,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20
    // color: "#81c04d"
  },
  datePickerCustomStyle: {}
});
