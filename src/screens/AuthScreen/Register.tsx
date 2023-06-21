import { View, Text, Pressable, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'

import { RightArrowIcon } from '../../../assets/icons/svg-icons'
import { InputFieldWithPrefix } from '../../components/InputFields'
import { PrimaryButton } from '../../components/Buttons'

import RegisterInfo from './components/RegisterInfo'
import RegisterPhone from './components/RegisterPhone'

const Register = ({ navigation }: any) => {
  const [registerStep, setRegisterStep] = useState(2)

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className='p-xl w-full flex-col justify-between flex-1'
    >
      <View>
        <Pressable className='flex-row items-center' onPress={() => {
          navigation.navigate('Login')
        }}>
            <View className='rotate-180 max-w-fit'>
                <RightArrowIcon size={21} />
            </View>
            <Text className='ml-default'>Back to Login</Text>
        </Pressable>

        <View className='mt-2xl'>
            <Text className='text-xl font-bold text-dark'>Get Started</Text>
            <Text className='text-dark opacity-80'>Join the helpful community and contribute in creating a helpful environment.</Text>
        </View>

        <View className='mt-2xl'>
          {
            registerStep === 1 ?
            <RegisterInfo />
            :
            <RegisterPhone />
          }
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Register