import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import Card from '../components/ui/Card';
import Number from '../components/ui/Number';
import PrimaryButton from '../components/ui/PrimaryButton';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );

  return (
    <View style={styles.container}>
      
      <Card style={styles.card}>
        <Text>Opponent's Guess</Text>
        <Number>{currentGuess}</Number>
        <View style={styles.buttonsContainer}>
          <PrimaryButton style={styles.button}>Lower</PrimaryButton>
          <PrimaryButton style={styles.button}>Greater</PrimaryButton>
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
  card: {
    width: '100%',
    alignItems: 'center'
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  button: {
    width: 110
  }
});

export default GameScreen;
