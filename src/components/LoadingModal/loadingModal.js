import React from 'react'
import { ActivityIndicator, View } from 'react-native'

const LoadingModal = () => {

  return (
    <View style={{ flex: 1, justifyContent: 'center', }}>
      <ActivityIndicator size='large' color='#999999' />
    </View>
  )
}

export default LoadingModal