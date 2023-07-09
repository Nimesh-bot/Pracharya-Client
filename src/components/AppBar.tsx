import { View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { LogoutIcon } from '../../assets/icons/svg-icons'
import tailwindConfig from '../../tailwind.config'
import { RootState } from '../redux/store'
import { useAppSelector } from '../redux/hooks'

const AppBar = () => {
  const navigation = useNavigation<any>()
  const { isLoggedIn } = useAppSelector((state: RootState) => state.auth)

  const primaryColor = (tailwindConfig.theme as any).colors.blue

  return (
    <View className='w-full flex-row justify-between items-center p-xl'>
      <View className='h-6 w-32'>
        <Image 
          source={require('../../assets/logo.png')}
          alt='Logo'
          className='w-full h-full object-contain mix-blend-multiply'
        />
      </View>
      <TouchableOpacity 
        className='rounded-md bg-white p-default flex justify-center items-center'
        onPress={() => {
          navigation.navigate('AdminTab')
        }}
      >
        {

        }
        <LogoutIcon size={24} color={primaryColor} />
      </TouchableOpacity>
    </View>
  )
}

export default AppBar