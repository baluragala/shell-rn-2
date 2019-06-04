import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableHighlight,
  Alert,
  Button
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Rating } from "react-native-elements";
import { connect } from "react-redux";
import { getProductsAction } from "../actions/product";

class ProductList extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <Button
        onPress={() => navigation.navigate("MyModal")}
        title="Add"
        color="#fff"
      />
    )
  });

  componentDidMount() {
    this.props.dispatch(getProductsAction);
  }

  _renderProduct() {
    return this.props.products.map(p => (
      <TouchableHighlight
        onPress={() =>
          this.props.navigation.navigate("Detail", { title: p.title, id: p.id })
        }
        key={p.id}
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
            source={{ uri: `http://localhost:4000/images/${p.image}` }}
            style={{ width: 100, height: 100, margin: 10 }}
          />
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                fontWeight: "bold",
                paddingRight: 150,
                textAlign: "left",
                marginTop: 10
              }}
              numberOfLines={2}
            >
              {p.title}
            </Text>
            <Rating
              style={{
                marginLeft: -40,
                marginTop: 5,
                width: 200,
                flexShrink: 1
              }}
              type="custom"
              readonly
              ratingCount={5}
              startingValue={p.rating}
              ratingColor="red"
              imageSize={24}
            />
          </View>
        </View>
      </TouchableHighlight>
    ));
  }

  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: "grey" }}>
        {this.props.isLoading ? (
          <Text
            style={{
              alignSelf: "center",
              marginTop: Dimensions.get("screen").height / 2
            }}
          >
            Loading...
          </Text>
        ) : (
          this._renderProduct()
        )}
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  console.log("state", state);
  return {
    products: state.productState.products,
    isLoading: state.productState.isLoading
  };
}

export default connect(mapStateToProps)(ProductList);
