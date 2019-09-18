import React from "react";
import { Text, StyleSheet } from "react-native";

import variables from "../../constants/variables";

const HeadingTwo = props => {
  return (
    <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: variables.ralewayBold,
    fontSize: 18
  }
});
export default HeadingTwo;
