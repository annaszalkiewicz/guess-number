import React from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import HeadingOne from "./ui/HeadingOne";
import variables from "../constants/variables";

const Header = props => {
  return (
    <LinearGradient
      colors={[variables.secondaryColor, variables.primaryColor]}
      start={[0, 0]}
      end={[1, 1]}
    >
      <View style={styles.container}>
        <HeadingOne style={styles.title}>{props.title}</HeadingOne>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 50,
    paddingBottom: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: "#fff",
    textAlign: "center"
  }
});

export default Header;
