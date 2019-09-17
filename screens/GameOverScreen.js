import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import StartGameScreen from "./StartGameScreen";

const GameOverScreen = props => {
  const [newGame, setNewGame] = useState(false);

  const configureNewGame = () => {
    props.setRounds(0);
    props.setStartGame(false)
    setNewGame(true);
  };

  return (
    <React.Fragment>
      {!newGame && (
        <View style={styles.container}>
          <Text>Game Over Screen</Text>
          <Text>Rounds: {props.rounds}</Text>
          <Text>Your number was {props.currentGuess}</Text>
          <PrimaryButton onPress={configureNewGame}>
            Start new game
          </PrimaryButton>
        </View>
      )}
      {newGame && <StartGameScreen />}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default GameOverScreen;
