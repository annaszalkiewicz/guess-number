import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

const fetchFonts = () => {
  return Font.loadAsync({
    'raleway-regular': require('./assets/fonts/Raleway-Regular_0.ttf'),
    'raleway-semibold': require('./assets/fonts/Raleway-SemiBold_0.ttf')
  })
}

const App = props => {
  const [startGame, setStartGame] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setDataLoaded(true)}
      onError={error => console.log(error)}
    />
  }

  startGameHandler = () => {
    setStartGame(true);
  };

  return (
    <View style={styles.container}>
      <Header title="Guess a Number" />
      {!startGame && <StartGameScreen setStartGame={setStartGame} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />}
      {startGame && <GameScreen userChoice={selectedNumber} setStartGame={setStartGame} />}
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