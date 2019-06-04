import React, { Component } from "react";
import { View, Text, Picker, TextInput } from "react-native";
import { Button } from "react-native-elements";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: "laptops"
    };
  }

  render() {
    return (
      <View style={{ paddingTop: 100 }}>
        <Button title="Close" onPress={() => this.props.navigation.pop()} />
        <Picker
          selectedValue={this.state.selectedValue}
          onValueChange={value => {
            this.setState({ selectedValue: value });
          }}
        >
          <Picker.Item label="Mobile" value="mobile" />
          <Picker.Item label="Laptops" value="laptops" />
          <Picker.Item label="Desktops" value="desktops" />
        </Picker>
        <TextInput
          multiline={true}
          numberOfLines={5}
          placeholder="enter category"
          keyboardType="number-pad"
          value={this.state.selectedValue}
          onChangeText={value => {
            this.setState({ selectedValue: value });
          }}
        />
      </View>
    );
  }
}

export default AddProduct;
