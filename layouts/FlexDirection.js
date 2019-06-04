import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class FlexDirection extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.item, styles.one]} />
        <View style={[styles.item, styles.two]} />
        <View style={[styles.item, styles.three]} />
        <View style={[styles.item, styles.one]} />
        <View style={[styles.item, styles.two]} />
        <View style={[styles.item, styles.three]} />
        <View style={[styles.item, styles.one]} />
        <View style={[styles.item, styles.two]} />
        <View style={[styles.item, styles.three]} />
        <View style={[styles.item, styles.one]} />
        <View style={[styles.item, styles.two]} />
        <View style={[styles.item, styles.three]} />
        <View style={[styles.item, styles.one]} />
        <View style={[styles.item, styles.two]} />
        <View style={[styles.item, styles.three]} />
        <View style={[styles.item, styles.one]} />
        <View style={[styles.item, styles.two]} />
        <View style={[styles.item, styles.three]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 50,
    alignContent: "space-between"
  },
  item: { width: 50 },
  one: {
    backgroundColor: "red"
  },
  two: {
    backgroundColor: "orange"
  },
  three: {
    backgroundColor: "green"
  }
});
