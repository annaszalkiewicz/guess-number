import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import Card from "../components/ui/Card";

const StartGameScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Start new game</Text>
      <Card style={styles.card}>
        <Text>Select a number</Text>
        <TextInput />
        <View>
          <Button title="Reset" />
          <Button title="Confirm" />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  card: {
    width: 300,
    maxWidth: '80%'
  }
});

export default StartGameScreen;
