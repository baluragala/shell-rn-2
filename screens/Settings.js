import React, { Component } from "react";
import { View, Text, Switch, TextInput, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import {
  enableSettingsAC,
  disableSettingsAC,
  setActiveTintColorAC,
  saveSettingsAC,
  getSettingsAC
} from "../actions/setting";
import { Button } from "react-native-elements";

class Settings extends Component {
  componentDidMount() {
    this.props.dispatch(getSettingsAC());
  }

  render() {
    return (
      <View style={{ flex: 1, paddingLeft: 20, paddingRight: 20 }}>
        <Text
          style={{
            paddingTop: 60,
            alignSelf: "center",
            fontSize: 32,
            fontWeight: "bold",
            color: "purple"
          }}
        >
          Settings
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Enable</Text>
          <Switch
            value={this.props.enable}
            onValueChange={value => {
              if (value) {
                this.props.dispatch(enableSettingsAC());
              } else {
                this.props.dispatch(disableSettingsAC());
              }
            }}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Active Tint Color</Text>
          <TextInput
            style={{ borderColor: "black", borderWidth: 1 }}
            editable={this.props.enable}
            value={this.props.activeTintColor}
            onChangeText={text =>
              this.props.dispatch(setActiveTintColorAC(text))
            }
          />
        </View>
        <Button
          title="Save"
          onPress={() => {
            this.props.dispatch(
              saveSettingsAC({
                enable: this.props.enable,
                activeTintColor: this.props.activeTintColor
              })
            );
          }}
        />
        {this.props.isLoading && (
          <View
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    enable: state.settingState.enable,
    activeTintColor: state.settingState.activeTintColor,
    isLoading: state.settingState.isLoading
  };
}

export default connect(mapStateToProps)(Settings);
