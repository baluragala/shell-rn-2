import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";

export function Message1({ transformFn, subMessage }) {
  return (
    <Text>
      {transformFn("one")} - {transformFn(subMessage)}
    </Text>
  );
}

Message1.propTypes = {
  transformFn: PropTypes.func.isRequired,
  subMessage: PropTypes.string.isRequired
};

export const Message2 = () => {
  return (
    <View>
      <Text>Hello Message2</Text>
    </View>
  );
};

const Messages = { Message1, Message2 };
export default Messages;
