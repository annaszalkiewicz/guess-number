import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const GuessesList = props => {
  const { pastGuesses } = props;
  return (
    <ScrollView contentContainerStyle={styles.container}>
        {pastGuesses.map((guess, index) => {
          return (
            <View key={index} style={styles.listItem}>
              <Text>#{pastGuesses.length - index}</Text>
              <Text>{guess}</Text>
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
