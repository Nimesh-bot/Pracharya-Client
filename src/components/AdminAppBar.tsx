import { View, Image, Text } from 'react-native'
import React from 'react'

const AdminAppBar = () => {
  return (
    <View className='w-full flex-row justify-between items-center p-xl'>
      <View className='h-8 w-32'>
        <Image 
          source={require('../../assets/lgo.png')}
          alt='Logo'
          className='w-full h-full object-contain mix-blend-multiply'
        />
      </View>
      <Text className='text-2xl font-bold text-blue'>Admin</Text>
    </View>
  )
}

export default AdminAppBar