import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import Card from "../components/ui/Card";

const StartGameScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Start new game</Text>
      <Card style={styles.card}>
        <Text>Select a number</Text>
        <View style={styles.input}>
          <TextInput />
        </View>
        <View style={styles.buttonsContainer}>
          <Button title="Reset" color="#00A1C9" />
          <Button title="Confirm" color="#0BD68F" />
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
  input: {
    width: '100%',
    borderBottomColor: '#000',
    borderBottomWidth: 2,
    marginVertical: 10
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  }
});

export default StartGameScreen;
