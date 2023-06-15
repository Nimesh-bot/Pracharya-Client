import { View, ScrollView } from 'react-native'
import React from 'react'
import AppBar from '../../components/AppBar'
import Grid from './components/Categories/Grid'
import Lists from './components/Posts/Lists'

const HomeScreen = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexDirection: 'column',
        flex: 1,
        width: '100%',
      }}
    >
      <AppBar />
      <View className='p-xl w-1 justify-start flex-col mx-auto'>
        <Grid />
        <Lists />
      </View>
    </ScrollView>
  )
}

export default HomeScreen