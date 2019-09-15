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
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bold"
  }
});
export default SecondaryButton;
