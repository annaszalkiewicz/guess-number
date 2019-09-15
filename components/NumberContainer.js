import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Card from './ui/Card'

const NumberContainer = props => {
  return (
    <Card>
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

export default NumberContainer
