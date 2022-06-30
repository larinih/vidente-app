import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

type Props = {
  onPress: () => void
}

const ConfigButton = ({ onPress }: Props) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Ionicons name="settings" size={24} color="white" />
    </TouchableOpacity>
  )
}

export default ConfigButton

