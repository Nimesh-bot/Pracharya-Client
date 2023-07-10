import { View, Text, Pressable, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import React, { SetStateAction, useState } from 'react'

import { RightArrowIcon } from '../../../assets/icons/svg-icons'
import { InputFieldWithPrefix } from '../../components/InputFields'
import { PrimaryButton } from '../../components/Buttons'

import RegisterInfo from './components/RegisterInfo'
import RegisterPhone from './components/RegisterPhone'
import { Dispatch } from '@reduxjs/toolkit'
import OPTVerification from './components/OPTVerification'

import { useVerifyOtpMutation } from '../../redux/features/auth/authApi.slice';
import Toast from 'react-native-toast-message'
import LoadingIndicator from '../../components/LoadingIndicator'

export interface IRegisterInfo {
  firstname: string
  middlename: string
  lastname: string
  email: string
  dob: Date
  mobile_number: string
  code: string
  step: number
}
export interface RegisterProps {
  registerInfo: IRegisterInfo
  setRegisterInfo: Function
}

const Register = ({ navigation }: any) => {
  const [registerInfo, setRegisterInfo] = useState<IRegisterInfo>({
    firstname: '',
    middlename: '',
    lastname: '',
    email: '',
    dob: new Date(),
    mobile_number: '',
    code: '',
    step: 1,
  })

  const [ verifyOTP, { data, isLoading } ] = useVerifyOtpMutation()
  const [error, setError] = useState('')

  const handleOTPVerification = (input_code: string) => {
    console.log('here', )
    setError('')
    if(input_code.length !== 6) {
      setError('Please enter the 6 digit OTP sent to your phone number')
    } else if(registerInfo.code !== input_code) {
      console.log('here')
      setError('Invalid OTP')
    } else {
      const payload = {
        mobile_number: registerInfo.mobile_number,
        otp: input_code,
        type: 'signup'
      }
      verifyOTP(payload).unwrap().then((res) => {
        Toast.show({
          type: 'success',
          text1: 'Verified',
          text2: 'Phone number verified successfully. Redirecting to final step in 3 seconds',
        })
        setTimeout(() => {
          setRegisterInfo({
            ...registerInfo,
            step: 3
          })
        }, 3000)  
      }).catch((err) => {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: err.data.message || 'Something went wrong. Please try again later',
        })
      })
    }
  }


  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className='p-xl w-full flex-col justify-between flex-1'
    >
      <ScrollView>
        <Pressable className='flex-row items-center' onPress={() => {
          navigation.navigate('Login')
        }}>
            <View className='rotate-180 max-w-fit'>
                <RightArrowIcon size={21} />
            </View>
            <Text className='ml-default'>Back to Login</Text>
        </Pressable>

        <View className='mt-2xl flex-row items-center'>
          <Text className='text-3xl text-dark'>Step</Text>
          <Text className='text-3xl font-bold text-blue mx-xs'>{registerInfo.step}</Text>
          <Text className='text-3xl text-dark'>of 3</Text>
        </View>

        <View className='mt-2xl'>
            <Text className='text-xl font-bold text-dark'>Get Started</Text>
            {
              registerInfo.step === 1 ?
              <Text className='text-dark opacity-80'>We require you to verify your phone and provide your information to continue</Text>
              :
              <Text className='text-dark opacity-80'>Join the helpful community and contribute in creating a helpful environment.</Text>
            }
        </View>

        <View className='mt-2xl'>
          {
            registerInfo.step === 1 ?
            <RegisterPhone 
              registerInfo={registerInfo}
              setRegisterInfo={setRegisterInfo}
            />
            :
            registerInfo.step === 2 ?
            <OPTVerification
              phone={registerInfo.mobile_number}
              error={error}
              handleOTPVerification={handleOTPVerification}
            />
            :
            <RegisterInfo 
              registerInfo={registerInfo}
              setRegisterInfo={setRegisterInfo}
            />
          }
        </View>
      </ScrollView>
      {
        isLoading &&
        <LoadingIndicator 
          text='Verifying OTP' 
          subText='Please wait while we verify the OTP'
        />
      }
    </KeyboardAvoidingView>
  )
}

export default Register