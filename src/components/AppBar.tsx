import { View, Image, ScrollView } from 'react-native'
import React from 'react'
import { SettingsIcon } from '../../assets/icons/svg-icons'

const AppBar = () => {
  return (
    <View className='w-full flex-row justify-between items-center p-xl'>
      <View className='h-8 w-32'>
        <Image 
          source={require('../../assets/lgo.png')}
          alt='Logo'
          className='w-full h-full object-contain mix-blend-multiply'
        />
      </View>
      <View className='rounded-md bg-white w-8 h-8 flex justify-center items-center'>
        <SettingsIcon width={24} height={24} active={true} />
      </View>
    </View>
  )
}

export default AppBar