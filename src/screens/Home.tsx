import { View, Text } from 'react-native'
import React from 'react'
import StatusBar from '../components/StatusBar'
import { PrimaryButton } from '../components/Buttons'

const Home = () => {
  return (
    <>
      <StatusBar />
      <View>
        <Text>Home</Text>
        <PrimaryButton text="Primary Button" />
      </View>
    </>
  )
}

export default Home