import React from "react";
import { Text, StyleSheet } from "react-native";

import variables from "../../constants/variables";

const BodyText = props => {
  return (
    <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: variables.raleway,
    fontSize: 16
  }
});
export default BodyText;
