import { View, Text } from 'react-native'
import React from 'react'
import StatusBar from '../../components/StatusBar'

const HomeScreen = () => {
  return (
    <>
      <StatusBar />
      <View className='h-1'>
        <Text>HomeScreen</Text>
      </View>
    </>
  )
}

export default HomeScreen