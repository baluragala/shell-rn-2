import React from "react";
import { Text } from "react-native";

export default class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date().toTimeString(),
      date: new Date()
    };
    setInterval(() => {
      this.setState({
        time: new Date().toTimeString()
      });
    }, 1000);
  }

  render() {
    return <Text>{this.state.time}</Text>;
  }
}
