import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import AppBar from '../../components/AppBar'

const CreateForm = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexDirection: 'column',
        flex: 1,
        width: '100%',
        position: 'relative',
      }}
    >
      <AppBar />
      <View className='p-xl h-full w-full justify-start flex-col mx-auto'>
        
      </View>
    </ScrollView>
  )
}

export default CreateForm