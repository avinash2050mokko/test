/**
 * Sample React Native App child
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, TextInput, View } from "react-native";

export default class Child extends Component<Props> {
  state = {
    data: "Test"
  };

  componentDidMount() {
    // User data goes here
  }

  change(x) {
    this.setState({ data: x * 5 });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={text => this.change(text)}
          placeholder={"Avinsh"}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 25,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
