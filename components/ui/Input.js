import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = props => {
  return (
    <TextInput
      {...props}
      style={{...styles.input, ...props.style}}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "rgba(0,0,0,0.5)",
    borderBottomWidth: 2
  }
});
export default Input;
