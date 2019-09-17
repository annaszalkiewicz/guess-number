import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const GameOverScreen = props => {
  return (
    <View style={styles.container}>
      <Text>Game Over Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default GameOverScreen
