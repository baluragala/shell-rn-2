import React from "react";
import { Text, View, Button } from "react-native";
import { connect } from "react-redux";
import { incAction, decAction } from "./actions/counter";

class Counter extends React.Component {
  constructor() {
    super();

    this.inc = this.inc.bind(this);
  }

  inc() {
    this.props.dispatch(incAction);
  }

  dec = () => {
    this.props.dispatch(decAction);
  };

  render() {
    console.log(this.props);
    return (
      <View
        style={{
          marginTop: 300,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Button title="INC" onPress={this.inc} />
        <Text>{this.props.ctr}</Text>
        <Button title="DEC" onPress={this.dec} />
      </View>
    );
  }
}

function mapStatetToProps(state) {
  return {
    ctr: state.counter,
    prop1: "my"
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     dispatchIncAction: () => dispatch(incAction),
//     dispatchDecAction: () => dispatch(decAction)
//   };
// }

const connectedComponent = connect(mapStatetToProps);
export default connectedComponent(Counter);
