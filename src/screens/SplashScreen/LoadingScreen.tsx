import { View, Text, Image } from 'react-native'
import React from 'react'

const LoadingScreen = () => {
  return (
    <View className='bg-light h-screen w-screen flex-col justify-center items-center'>
        <Image
            source={require('../../../assets/logo.png')}
            className='w-40 h-auto'
        />
    </View>
  )
}

export default LoadingScreen