import { View, Text } from 'react-native'
import React from 'react'
import AppBar from '../../components/AppBar'
import Grid from './components/Categories/Grid'

const HomeScreen = () => {
  return (
    <>
      <AppBar />
      <View className='p-xl'>
        <Grid />
      </View>
    </>
  )
}

export default HomeScreen