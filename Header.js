import React from "react";
import { View, Text } from "react-native";

export default function Header(a) {
  return (
    <View>
      <Text>{a.title}</Text>
      <Text>{a.subTitle}</Text>
    </View>
  );
}
