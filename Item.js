import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Button } from "react-native";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("constructor");
  }

  handleFavorite = () => {
    this.props.onFavorite(this.props.name, this.props.index);
  };

  getLable() {
    return this.props.isFavorite ? "Unfavorite" : "Favorite";
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    return (
      this.props.name !== nextProps.name ||
      this.props.isFavorite !== nextProps.isFavorite
    );
  };

  componentDidMount = () => {
    console.log("componentDidMount");
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  render() {
    console.log("render");
    return (
      <View>
        <Text>{this.props.name}</Text>
        <Button title={this.getLable()} onPress={this.handleFavorite} />
      </View>
    );
  }
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onFavorite: PropTypes.func.isRequired
};

Item.defaultProps = {
  isFavorite: true,
  name: "No Name Set"
};

export default Item;
