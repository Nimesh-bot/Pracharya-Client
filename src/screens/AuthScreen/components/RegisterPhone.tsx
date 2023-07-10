import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Toast from 'react-native-toast-message'

import { InputFieldWithPrefix } from '../../../components/InputFields'
import { PrimaryButton } from '../../../components/Buttons'
import { RegisterProps } from '../Register'
import LoadingIndicator from '../../../components/LoadingIndicator'

import { useVerifyPhoneMutation } from '../../../redux/features/auth/authApi.slice'

const RegisterPhone = ({ registerInfo, setRegisterInfo }: RegisterProps) => {
  const [error, setError] = useState('')

  const [ verifyPhone, { data, isLoading } ] = useVerifyPhoneMutation()
  
  const handleVerifyPhone = () => {
    const payload = {
      phone_number: registerInfo.mobile_number
    }
    if(payload.phone_number.length !== 10 || payload.phone_number.match(/[a-z]/i)) {
      setError('Valid phone number must be 10 digits long')
      return
    }
    setError('')
 
    console.log('payload', payload)

    verifyPhone({
      mobile_number: registerInfo.mobile_number
    }).unwrap().then((res: Authentication.VerifyPhoneResponse) => {
      if(res.user_exists) {
        setError(
          'User with this phone number already exists. Please login instead.'
        )
        return
      }
      setRegisterInfo({
        ...registerInfo,
        code: res.code
      })
      console.log('response', res)
      Toast.show({
        type: 'success',
        text1: 'OTP sent to your phone number',
        text2: 'Redirecting to OTP verification in 3 seconds',
        visibilityTime: 3000,
        autoHide: true,
      })
      setTimeout(() => {
        setRegisterInfo({
          ...registerInfo,
          code: res.code,
          step: 2
        })
      }, 3000)
    })
  }

  return (
    <View>
      <View>
          <Text className='text-dark opacity-80 mb-sm'>Phone Number</Text>
          <InputFieldWithPrefix 
            prefix='+977'
            additionalCss='bg-white'
            keyboardType='phone-pad'
            value={registerInfo.mobile_number}
            onChange={(e) => {
              setRegisterInfo({
                ...registerInfo,
                mobile_number: e.nativeEvent.text
              })
            }}
          />
          {
            error !== '' &&
            <Text className='text-red text-sm mt-xs'>{error}</Text>
          }
      </View>
      <PrimaryButton
        text='Verify'
        additionalCss='mt-2xl'
        onPress={handleVerifyPhone}
      />
      {
        isLoading &&
        <LoadingIndicator
          text='Verifying phone number'
          subText='Please wait while we verify your phone number'
        />

      }
    </View>
  )
}

export default RegisterPhone