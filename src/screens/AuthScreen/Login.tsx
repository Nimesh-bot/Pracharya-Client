import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'

import { RightArrowIcon } from '../../../assets/icons/svg-icons'
import { InputFieldWithPrefix } from '../../components/InputFields'
import { PrimaryButton } from '../../components/Buttons'
import OPTVerification from './components/OPTVerification'

const Login = ({ navigation }: any) => {
    const [loginStep, setLoginStep] = useState(2)

    const handleNavigateBack = () => {
        navigation.navigate('Tab')
    }

    return (
        <View className='p-xl w-full flex-col justify-between flex-1'>
            <View>
                <Pressable className='flex-row items-center' onPress={handleNavigateBack}>
                    <View className='rotate-180 max-w-fit'>
                        <RightArrowIcon size={21} />
                    </View>
                    <Text className='ml-default'>Back to Home</Text>
                </Pressable>

                <View className='mt-2xl'>
                    <Text className='text-xl font-bold text-dark'>Welcome Back</Text>
                    <Text className='text-dark opacity-80'>Rid yourself with all the confusions and help rid other’s confusions</Text>
                </View>

                <View className='mt-2xl'>
                    {
                        loginStep === 1 ?
                        <View>
                            <Text className='text-dark opacity-80 mb-sm'>Phone Number</Text>
                            <InputFieldWithPrefix 
                                prefix='+977'
                                additionalCss='bg-white'
                                keyboardType='phone-pad'
                            />
                            <PrimaryButton
                                text='Verify'
                                additionalCss='mt-2xl'
                            />
                        </View>
                        :
                        <OPTVerification 
                            phone='9841234567'
                        />
                    }
                </View>
            </View>

            <View className='flex-row items-center mb-2xl'>
                <Text className='text-dark opacity-80'>Click here to</Text>
                <Pressable onPress={() => {
                    navigation.navigate('Register')
                }}>
                    <Text className='text-blue font-bold ml-xs'>Register</Text>
                </Pressable>
                <Text className='text-dark opacity-80 ml-xs'>for Free</Text>
            </View>
        </View>
    )
}

export default Login