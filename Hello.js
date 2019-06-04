import React from "react";
import { View, Text } from "react-native";

export default class Hello extends React.Component {
  render() {
    return (
      <View>
        <Text>Hello {this.props.message}</Text>
      </View>
    );
  }
}
