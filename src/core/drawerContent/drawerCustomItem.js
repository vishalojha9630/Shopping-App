import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { color } from 'react-native-reanimated'

const DrawerCustomItem = ({
  screenName,
  Icon,
  text,
  onPress,
}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => onPress(screenName)}>
        <View style={{ flexDirection: 'row' }}>
          <View>{Icon && <Icon style={{ color: 'red' }} />}</View>
          {/* <Text>{Icon}</Text> */}
          <Text style={{ marginStart: 10, fontSize: 18, color: '#000' }}>{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}
export default DrawerCustomItem