import React from "react";
import { Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Card from "./ui/Card";
import Number from "./ui/Number";
import PrimaryButton from "../components/ui/PrimaryButton";

const NumberContainer = props => {
  return (
    <Card style={styles.container}>
      <Text>You selected</Text>
      <Number>{props.selectedNumber}</Number>
      <PrimaryButton onPress={() => props.startGame(true)} style={styles.button}>
        Start Game
        <MaterialCommunityIcons
          name="play"
          color="#fff"
          size={16}
          style={styles.icon}
        />
      </PrimaryButton>
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginLeft: 10
  }
});
export default NumberContainer;
