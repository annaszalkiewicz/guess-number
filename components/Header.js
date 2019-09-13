import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Header = props => {
  return (
    <LinearGradient 
      colors={["#00A1C9", "#0BD68F"]}
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
    height: 150,
    paddingVertical: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 36,
    color: "#fff",
    textAlign: 'center'
  }
});

export default Header;
