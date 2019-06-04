import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Item from "./Item";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteItem: "",
      items: [
        {
          id: 1,
          name: "item1"
        },
        {
          id: 2,
          name: "item2",
          isFavorite: true
        },
        {
          id: 3,

          isFavorite: false
        }
      ]
    };
  }

  _renderItems() {
    return this.state.items.map((i, index) => (
      <Item
        key={i.id}
        name={i.name}
        index={index}
        onFavorite={this.setFavoriteItem}
        isFavorite={i.isFavorite}
      />
    ));
  }

  setFavoriteItem = (name, index) => {
    this.state.items[index].isFavorite = !this.state.items[index].isFavorite;
    this.setState({ favoriteItem: name });
  };

  render() {
    return (
      <View>
        <Text style={[{ fontSize: 32 }, styles.heading]}>
          Items (<Text style={{ fontSize: 16 }}>{this.state.favoriteItem}</Text>
          )
        </Text>
        {this._renderItems()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    color: "purple"
  }
});

export default List;
