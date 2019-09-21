import React, { useState, useRef } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Card from "../components/ui/Card";
import Number from "../components/ui/Number";
import PrimaryButton from "../components/ui/PrimaryButton";
import BodyText from "../components/ui/BodyText";
import GameOverScreen from "./GameOverScreen";
import GuessesList from "../components/GuessesList";

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

  const initialGuess = generateRandomBetween(1, 100, props.userChoice);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess]);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const nextGuessHandler = direction => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie", "You gave incorrect hint", [
        { text: "Sorry", style: "cancel" }
      ]);
      return;
    }

    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setPastGuesses(prevGuesses => [nextNumber, ...prevGuesses]);
  };

  return (
    <React.Fragment>
      {props.userChoice !== currentGuess && (
        <View style={styles.container}>
          <Card style={styles.card}>
            <BodyText>Opponent's Guess</BodyText>
            <Number>{currentGuess}</Number>
            <View style={styles.buttonsContainer}>
              <PrimaryButton
                style={styles.button}
                onPress={nextGuessHandler.bind(this, "lower")}
              >
                <MaterialCommunityIcons name="minus" size={28} color="#fff" />
              </PrimaryButton>
              <PrimaryButton
                style={styles.button}
                onPress={nextGuessHandler.bind(this, "greater")}
              >
                <MaterialCommunityIcons name="plus" size={28} color="#fff" />
              </PrimaryButton>
            </View>
          </Card>
          <GuessesList pastGuesses={pastGuesses} />
        </View>
      )}

      {props.userChoice === currentGuess && (
        <GameOverScreen
          rounds={pastGuesses.length}
          setRounds={setPastGuesses}
          currentGuess={currentGuess}
          setStartGame={props.setStartGame}
        />
      )}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: "center"
  },
  card: {
    width: "100%",
    alignItems: "center"
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    width: 110
  }
});

export default GameScreen;
