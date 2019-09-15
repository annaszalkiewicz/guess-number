import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

const App = props => {
  const [startGame, setStartGame] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  startGameHandler = () => {
    setStartGame(true);
  };

  return (
    <View style={styles.container}>
      <Header title="Guess a Number" />
      {!startGame && <StartGameScreen setStartGame={setStartGame} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />}
      {startGame && <GameScreen userChoice={selectedNumber} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default App;