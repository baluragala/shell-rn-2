import React, { Component } from "react";
import { View, Text, TouchableHighlight, Image } from "react-native";
import { Rating } from "react-native-elements";

class ProductListItem extends Component {
  render() {
    let { product } = this.props;
    return (
      <TouchableHighlight
        onPress={() =>
          this.props.navigation.navigate("Detail", {
            title: product.title,
            id: product.id
          })
        }
        key={product.id}
        un
      >
        <View
          style={{
            height: 120,
            flexDirection: "row",
            margin: 10,
            backgroundColor: "#fff"
          }}
        >
          <Image
            source={{ uri: `http://localhost:4000/images/${product.image}` }}
            style={{ width: 100, height: 100, margin: 10 }}
          />
          <View style={{ flex: 1, flexDirection: "column" }}>
            <Text
              style={{
                fontWeight: "bold",
                textAlign: "left",
                marginTop: 10
              }}
              numberOfLines={2}
            >
              {product.title}
            </Text>
            <Rating
              style={{
                marginTop: 5,
                width: 200,
                flexShrink: 1
              }}
              type="custom"
              readonly
              ratingCount={5}
              startingValue={product.rating}
              ratingColor="red"
              imageSize={24}
            />
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

export default ProductListItem;
