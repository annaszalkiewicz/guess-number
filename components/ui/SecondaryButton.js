import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import variables from "../../constants/variables";

const SecondaryButton = props => {
  return (
    <TouchableOpacity {...props}>
      <View style={{ ...styles.button, ...props.style }}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 16,
    backgroundColor: variables.secondaryColor,
    borderRadius: 5
  },
  buttonText: {
    fontFamily: variables.ralewayBold,
    fontSize: 16,
    color: "#fff",
    textTransform: "uppercase",
    textAlign: "center"
  }
});
export default SecondaryButton;
