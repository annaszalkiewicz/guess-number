import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Card from "./ui/Card";
import Number from './ui/Number';
import variables from "../constants/variables";

const NumberContainer = props => {
  return (
    <Card style={styles.container}>
      <Text>You selected</Text>
      <Number>{props.selectedNumber}</Number>

      <TouchableOpacity onPress={() => props.startGame(true)}>
        <LinearGradient
          colors={[variables.secondaryColor, variables.primaryColor]}
          start={[0, 0]}
          end={[1, 1]}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Start Game</Text>
            <MaterialCommunityIcons
              name="play"
              color="#fff"
              size={20}
              style={styles.icon}
            />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 320,
    marginTop: 20,
    alignItems: "center"
  },

  button: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  buttonText: {
    color: "#fff",
    textTransform: "uppercase",
    marginRight: 5,
    fontWeight: 'bold'
  },
  icon: {
    marginLeft: 5
  }
});
export default NumberContainer;
