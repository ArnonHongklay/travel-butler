import { StyleSheet } from "react-native";

const UI = StyleSheet.create({
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

export default UI;
