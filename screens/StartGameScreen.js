import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import Card from "../components/ui/Card";
import variables from '../constants/variables';

const StartGameScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Start new game</Text>
      <Card style={styles.card}>
        <Text style={styles.text}>Select a number</Text>
        <View style={styles.inputContainer}>
          <TextInput keyboardType="numeric" style={styles.input} />
        </View>
        <View style={styles.buttonsContainer}>
          <Button title="Reset" color={variables.secondaryColor} />
          <Button title="Confirm" color={variables.primaryColor} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: "center"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold"
  },
  card: {
    width: '100%',
    maxWidth: 320,
    marginTop: 30
  },
  text: {
    textAlign: 'center'
  },
  inputContainer: {
    width: '100%',
    marginVertical: 10,
    alignItems: 'center'
  },
  input: {
    width: 100,
    textAlign: 'center',
    fontSize: 24,
    borderColor: 'rgba(0,0,0,0.5)',
    borderBottomWidth: 2,

  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  }
});

export default StartGameScreen;
