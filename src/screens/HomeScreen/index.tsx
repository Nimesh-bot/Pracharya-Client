import { View, Text } from 'react-native'
import React from 'react'
import AppBar from '../../components/AppBar'

const HomeScreen = () => {
  return (
    <>
      <AppBar />
      <View className='h-1 p-xl'>
        <Text>HomeScreen</Text>
      </View>
    </>
  )
}

export default HomeScreen