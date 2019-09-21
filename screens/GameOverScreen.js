import React, { useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import BodyText from "../components/ui/BodyText";
import HeadingTwo from "../components/ui/HeadingTwo";
import StartGameScreen from "./StartGameScreen";

const GameOverScreen = props => {
  const [newGame, setNewGame] = useState(false);

  const configureNewGame = () => {
    props.setRounds([]);
    props.setStartGame(false);
    setNewGame(true);
  };

  return (
    <React.Fragment>
      {!newGame && (
        <View style={styles.container}>
          <HeadingTwo>Game Over</HeadingTwo>
          <View style={styles.imageContainer}>
          <Image
            source={{uri: 'https://images.pexels.com/photos/1314536/pexels-photo-1314536.jpeg'}}
            style={styles.image}
          />
          </View>
          <BodyText>Rounds: {props.rounds}</BodyText>
          <BodyText>Your number was {props.currentGuess}</BodyText>
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
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderColor: '#000',
    borderWidth: 1,
    overflow: 'hidden',
    marginVertical: 30
  },
  image: {
    width: '100%',
    height: '100%'
  }
});
export default GameOverScreen;
