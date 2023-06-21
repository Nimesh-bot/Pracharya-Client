import { View, Text } from 'react-native'
import React from 'react'

import { InputFieldWithPrefix } from '../../../components/InputFields'
import { PrimaryButton } from '../../../components/Buttons'

const RegisterPhone = () => {
  return (
    <View>
        <View>
            <Text className='text-dark opacity-80 mb-sm'>Phone Number</Text>
            <InputFieldWithPrefix 
                prefix='+977'
                additionalCss='bg-white'
                keyboardType='phone-pad'
            />
        </View>
        <PrimaryButton
            text='Verify'
            additionalCss='mt-2xl'
        />
    </View>
  )
}

export default RegisterPhone