import { View, Image } from 'react-native'
import React from 'react'
import { LogoutIcon } from '../../assets/icons/svg-icons'
import tailwindConfig from '../../tailwind.config'

const AppBar = () => {
  const primaryColor = (tailwindConfig.theme as any).colors.blue

  return (
    <View className='w-full flex-row justify-between items-center p-xl'>
      <View className='h-8 w-32'>
        <Image 
          source={require('../../assets/lgo.png')}
          alt='Logo'
          className='w-full h-full object-contain mix-blend-multiply'
        />
      </View>
      <View className='rounded-md bg-white p-default flex justify-center items-center'>
        <LogoutIcon size={24} color={primaryColor} />
      </View>
    </View>
  )
}

export default AppBar