import { View, Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { LogoutIcon } from '../../assets/icons/svg-icons'
import tailwindConfig from '../../tailwind.config'

const AdminAppBar = () => {
  const navigation = useNavigation<any>()

  const primaryColor = (tailwindConfig.theme as any).colors.blue

  return (
    <View className='w-full flex-row justify-between items-center p-xl'>
      <View className='h-8 w-[120px]'>
        <Image 
          source={require('../../assets/admin.png')}
          alt='Logo'
          className='w-full h-full object-fill mix-blend-multiply'
        />
      </View>
      <TouchableOpacity 
        className='rounded-md bg-white p-default flex justify-center items-center'
        onPress={() => {
          navigation.navigate('AdminTab')
        }}
      >
        <LogoutIcon size={24} color={primaryColor} />
      </TouchableOpacity>
    </View>
  )
}

export default AdminAppBar