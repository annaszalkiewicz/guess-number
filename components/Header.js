import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import variables from '../constants/variables';

const Header = props => {
  return (
    <LinearGradient 
      colors={[variables.secondaryColor, variables.primaryColor]}
      start={[0, 0]} 
      end={[1, 1]}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 40,
    paddingBottom: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 24,
    color: "#fff",
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

export default Header;
