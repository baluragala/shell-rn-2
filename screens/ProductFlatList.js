import React, { Component } from "react";
import { View, Text, FlatList, Dimensions, RefreshControl } from "react-native";
import { connect } from "react-redux";
import {
  refresh,
  getProductsAction,
  getProductsActionCreator
} from "../actions/product";
import ProductListItem from "./ProductListItem";

class ProductFlatList extends Component {
  componentDidMount() {
    this.getMore();
  }

  getMore = () =>
    !this.props.isRefreshing &&
    !this.props.isLoading &&
    this.props.loadMore &&
    this.props.dispatch(
      getProductsActionCreator(this.props.nextPage, this.props.limit)
    );

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "grey" }}>
        <FlatList
          refreshing={this.props.isRefreshing}
          onRefresh={() => this.props.dispatch(refresh)}
          keyExtractor={item => `${item.id}`}
          data={this.props.products}
          onEndReached={this.getMore}
          onEndReachedThreshold={0.5}
          renderItem={({ item }) => (
            <ProductListItem
              product={item}
              navigation={this.props.navigation}
            />
          )}
        />
        {this.props.isLoading && (
          <Text
            style={{
              alignSelf: "center"
            }}
          >
            Loading...
          </Text>
        )}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.productState.products,
    isLoading: state.productState.isLoading,
    nextPage: state.productState.nextPage,
    limit: state.productState.limit,
    loadMore: state.productState.loadMore,
    isRefreshing: state.productState.isRefreshing
  };
}

export default connect(mapStateToProps)(ProductFlatList);
