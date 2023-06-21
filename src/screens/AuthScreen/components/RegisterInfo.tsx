import { View, Text } from 'react-native'
import React from 'react'
import { PlainInputField } from '../../../components/InputFields'
import { PrimaryButton } from '../../../components/Buttons'

const RegisterInfo = () => {
  return (
    <>
        <View>
            <View>
                <Text className='text-dark opacity-80 mb-sm'>First Name</Text>
                <PlainInputField
                    placeholder='Tim'
                />
            </View>
            <View className='mt-default'>
                <Text className='text-dark opacity-80 mb-sm'>Middle Name (Optional)</Text>
                <PlainInputField
                    placeholder='Alber'
                />
            </View>
            <View className='mt-default'>
                <Text className='text-dark opacity-80 mb-sm'>Last Name</Text>
                <PlainInputField
                    placeholder='McGraw'
                />
            </View>
            <View className='mt-default'>
                <Text className='text-dark opacity-80 mb-sm'>Email</Text>
                <PlainInputField
                    placeholder='example@mail.com'
                    keyboardType='email-address'
                />
            </View>
            <View className='mt-default'>
                <Text className='text-dark opacity-80 mb-sm'>Date of Birth</Text>
                <PlainInputField
                    placeholder='YYYY-MM-DD'
                    keyboardType='numbers-and-punctuation'
                />
            </View>
        </View>
        <PrimaryButton
            text='Next'
            additionalCss='mt-2xl'
        />
    </>
  )
}

export default RegisterInfo