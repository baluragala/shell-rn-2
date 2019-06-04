import React, { Component } from "react";

import ProductList from "./screens/ProductList";

import { Provider } from "react-redux";
import store from "./store";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";
import ProductDetail from "./screens/ProductDetail";

import AddProduct from "./screens/AddProduct";
import Settings from "./screens/Settings";
import ProductFlatList from "./screens/ProductFlatList";

const MainStack = createStackNavigator(
  {
    Home: {
      screen: ProductFlatList
    },
    Detail: {
      screen: ProductDetail
    }
  },
  {
    defaultNavigationOptions: {
      title: "EStore",
      headerStyle: {
        backgroundColor: "blue"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 20
      }
    }
  }
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack
    },
    MyModal: {
      screen: AddProduct
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: RootStack,
    Settings: Settings
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        let iconName =
          navigation.state.routeName === "Home" ? "home" : "settings";
        return (
          <MaterialCommunityIcons name={iconName} size={24} color={tintColor} />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "orange",
      inactiveTintColor: "gray"
    }
  }
);

const AppContainer = createAppContainer(TabNavigator);

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
