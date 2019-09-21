import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

const GuessesList = props => {

  const { pastGuesses } = props;
  return (
    <View>
      <ScrollView>
       {pastGuesses.map((guess, index) => {
         return (
           <View key={index}>
             <Text>#{index}</Text>
             <Text>{guess}</Text>
           </View>
         )
       })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  
});

export default GuessesList;
