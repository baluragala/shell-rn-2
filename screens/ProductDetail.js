import React, { Component } from "react";
import { View, Text } from "react-native";

class ProductDetail extends Component {
  static navigationOptions = props => {
    console.log("ProductDetail", props);
    return {
      title: `Detail - ${props.navigation.getParam("id", "-")}`
    };
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillUnmount() {
    console.log("componentWillUnmount - detail");
  }

  render() {
    return (
      <View>
        <Text> Detail - {this.props.navigation.getParam("title", "N/A")}</Text>
      </View>
    );
  }
}

export default ProductDetail;
