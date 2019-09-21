import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import BodyText from '../components/ui/BodyText'

const GuessesList = props => {
  const { pastGuesses } = props;
  return (
    <ScrollView contentContainerStyle={styles.container}>
        {pastGuesses.map((guess, index) => {
          return (
            <View key={index} style={styles.listItem}>
              <BodyText>#{pastGuesses.length - index}</BodyText>
              <BodyText>{guess}</BodyText>
            </View>
          );
        })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1
  },
  listItem: {
    width: 300,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 5,
    padding: 10,
    backgroundColor: "#f9f9f9"
  }
});

export default GuessesList;
