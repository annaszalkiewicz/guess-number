import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import Card from "../components/ui/Card";
import variables from "../constants/variables";
import Input from "../components/ui/Input";

const StartGameScreen = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedNumber, setSelectedNumber] = useState();
  const [isConfirmed, setIsConfirmed] = useState(false);

  const changeInputHandler = inputText => {
    setInputValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setInputValue("");
    setIsConfirmed(false);
  };

  const submitInputHandler = () => {
    let chosenNumber = parseInt(inputValue);
    setIsConfirmed(true);
    setSelectedNumber(chosenNumber);
    setInputValue('');
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <React.Fragment>
        <View style={styles.container}>
          <Text style={styles.title}>Start new game</Text>
          <Card style={styles.card}>
            <Text style={styles.text}>Select a number</Text>
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
              <Button
                title="Reset"
                color={variables.secondaryColor}
                style={styles.button}
                onPress={resetInputHandler}
              />
              <Button
                title="Confirm"
                color={variables.primaryColor}
                style={styles.button}
                onPress={submitInputHandler}
              />
            </View>
          </Card>
        </View>
        {isConfirmed && <Text>Confirmed number: {selectedNumber}</Text>}
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
  title: {
    fontSize: 24,
    fontWeight: "bold"
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
    width: 100
  }
});

export default StartGameScreen;
