import { View, Image } from 'react-native'
import React from 'react'

const StatusBar = () => {
  return (
    <View className='w-full flex-row justify-between items-center'>
      <View className='h-8 w-32'>
        <Image 
          source={require('../../assets/lgo.png')}
          alt='Logo'
          className='w-full h-full object-contain'
        />
      </View>
      <View className='rounded-md bg-white w-8 h-8 flex justify-center items-center'>
        <Image 
          source={require('../../assets/icons/settings.svg')}
          alt='Settings'
        />
      </View>
    </View>
  )
}

export default StatusBar