import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Card from './ui/Card';
import variables from '../constants/variables';

const NumberContainer = props => {
  return (
    <Card style={styles.container}>
      <Text>You selected</Text>
      <Text style={styles.number}>{props.selectedNumber}</Text>
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
  },
  number: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    borderRadius: 10,
    color: variables.primaryColor
  }
});
export default NumberContainer
