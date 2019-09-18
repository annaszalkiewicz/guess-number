import React from "react";
import { Text, StyleSheet } from "react-native";

import variables from "../../constants/variables";

const HeadingOne = props => {
  return (
    <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: variables.ralewayBold,
    fontSize: 24
  }
});
export default HeadingOne;
