import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import variables from '../../constants/variables';

const Number = props => {
  return (
    <Text style={{...styles.number, ...props.style}}>{props.children}</Text>
  )
}

const styles = StyleSheet.create({
  number: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    borderRadius: 10,
    color: variables.secondaryColor
  }
});
export default Number;
