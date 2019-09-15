import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";
import Card from "../components/ui/Card";
import variables from "../constants/variables";
import Input from "../components/ui/Input";
import NumberContainer from "../components/NumberContainer";

const StartGameScreen = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedNumber, setSelectedNumber] = useState();
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
      Alert.alert(
        "Input is invalid.", 
        "Number has to be between 1 and 99.", 
        [
          { text: "OK", onPress: resetInputHandler, style: "destructive" }
        ]
      );
    } else {
      setIsValid(true);
      submitInputHandler();
    }
  };

  const submitInputHandler = () => {
    let chosenNumber = parseInt(inputValue);
    setIsConfirmed(true);
    setSelectedNumber(chosenNumber);
    setInputValue("");
    Keyboard.dismiss();
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
              <View style={styles.button}>
                <Button
                  title="Reset"
                  color={variables.secondaryColor}
                  onPress={resetInputHandler}
                />
              </View>
              <View style={styles.button}>
                <Button
                  title="Confirm"
                  color={variables.primaryColor}
                  onPress={validationHandler}
                />
              </View>
            </View>
          </Card>
          {isConfirmed && <NumberContainer selectedNumber={selectedNumber} />}
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
  title: {
    fontSize: 18,
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