import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";

import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import PrimaryButton from "../components/ui/PrimaryButton";
import SecondaryButton from "../components/ui/SecondaryButton";
import HeadingTwo from '../components/ui/HeadingTwo';
import BodyText from '../components/ui/BodyText';
import NumberContainer from "../components/NumberContainer";

const StartGameScreen = props => {
  const [inputValue, setInputValue] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const changeInputHandler = inputText => {
    setInputValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setInputValue("");
    setIsConfirmed(false);
  };

  const validationHandler = () => {
    let chosenNumber = parseInt(inputValue);

    setIsTouched(true);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      setIsValid(false);
      Alert.alert("Input is invalid.", "Number has to be between 1 and 99.", [
        { text: "OK", onPress: resetInputHandler, style: "destructive" }
      ]);
    } else {
      setIsValid(true);
      submitInputHandler();
    }
  };

  const submitInputHandler = () => {
    let chosenNumber = parseInt(inputValue);
    setIsConfirmed(true);
    props.setSelectedNumber(chosenNumber);
    setInputValue("");
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <React.Fragment>
        <View style={styles.container}>
          <HeadingTwo>Start new game</HeadingTwo>
          <Card style={styles.card}>
            <BodyText style={styles.text}>Select a number</BodyText>
            <View style={styles.inputContainer}>
              <Input
                keyboardType="number-pad"
                style={styles.input}
                maxLength={2}
                autoCapitalize="none"
                autoCorrect={false}
                blurOnSubmit
                onChangeText={changeInputHandler}
                value={inputValue}
              />
            </View>
            <View style={styles.buttonsContainer}>
              <SecondaryButton
                onPress={resetInputHandler}
                style={styles.button}
              >
                Reset
              </SecondaryButton>
              <PrimaryButton onPress={validationHandler} style={styles.button}>
                Confirm
              </PrimaryButton>
            </View>
          </Card>
          {isConfirmed && (
            <NumberContainer
              selectedNumber={props.selectedNumber}
              startGame={props.setStartGame}
            />
          )}
        </View>
      </React.Fragment>
    </TouchableWithoutFeedback>
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
    maxWidth: 320,
    marginTop: 30
  },
  text: {
    textAlign: "center"
  },
  inputContainer: {
    width: "100%",
    marginVertical: 10,
    alignItems: "center"
  },
  input: {
    width: 100,
    textAlign: "center",
    fontSize: 24
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10
  },
  button: {
    width: 110
  }
});

export default StartGameScreen;
