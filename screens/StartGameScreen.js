import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import Card from "../components/ui/Card";

const StartGameScreen = () => {
  return (
    <View>
      <Text>Start new game</Text>
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
  card: {
    width: 300,
    maxWidth: '80%'
  }
});

export default StartGameScreen;
