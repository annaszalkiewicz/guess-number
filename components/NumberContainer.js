import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Card from './ui/Card'

const NumberContainer = props => {
  return (
    <Card style={styles.container}>
      <Text>You selected</Text>
      <Text>{props.selectedNumber}</Text>
      <TouchableOpacity>
        <View>
          <Text>Start Game</Text>
          <MaterialCommunityIcons name="play" />
        </View>
      </TouchableOpacity>
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 320,
    marginTop: 20,
    alignItems: 'center'
  }
});
export default NumberContainer
