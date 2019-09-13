import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from "../components/ui/Card";

const StartGameScreen = () => {
  return (
    <View>
      <Text>Start new game</Text>
      <Card>
        <Text>Select a number</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({});

export default StartGameScreen;
