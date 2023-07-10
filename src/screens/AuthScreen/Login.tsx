import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'

import { RightArrowIcon } from '../../../assets/icons/svg-icons'
import { InputFieldWithPrefix } from '../../components/InputFields'
import { PrimaryButton } from '../../components/Buttons'
import OPTVerification from './components/OPTVerification'

import { useVerifyPhoneMutation } from '../../redux/features/auth/authApi.slice'

const Login = ({ navigation }: any) => {
    const [loginStep, setLoginStep] = useState(1)
    const [ verifyPhone, { data, isLoading } ] = useVerifyPhoneMutation()

    const [phone_number, setPhoneNumber] = useState('')
    const [error, setError] = useState('')
    const [responses, setResponses] = useState({
        verifyPhone: {
            msg: '',
            user_exists: false,
            type: '',
            code: ''
        },
        verifyOTP: {
            email: '',
            phone_number: '',
            firstname: '',
            lastname: '',
            access_token: '',
            refresh_token: '',
        }
    })

    const handleNavigateBack = () => {
        navigation.navigate('Home')
    }

    const handlePhoneVerification = () => {
        if(phone_number.length !== 10 || phone_number.match(/[a-z]/i)) {
            setError('Valid phone number must be 10 digits long')
            return
        }
        setError('')
        const payload = {
            phone_number: phone_number
        }
        verifyPhone(payload).unwrap().then((res: Authentication.VerifyPhoneResponse) => {
            if(res.user_exists) {
                setResponses({
                    ...responses,
                    verifyPhone: {
                        msg: res.msg,
                        user_exists: res.user_exists,
                        type: res.type,
                        code: res.code
                    }
                })
                setLoginStep(2)
            } else {
                setError(res.msg)
            }
        })
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
                                additionalCss={`bg-white ${error !== '' && 'border border-red'}`}
                                keyboardType='phone-pad'
                                value={phone_number}
                                onChangeText={(text: string) => {
                                    setPhoneNumber(text);
                                }}
                            />
                            {
                                error &&
                                <Text className='text-red text-sm mt-xs'>{error}</Text>
                            }
                            <PrimaryButton
                                text='Verify'
                                additionalCss='mt-2xl'
                                onPress={handlePhoneVerification}
                            />
                        </View>
                        :
                        <OPTVerification 
                            phone='9841234567'
                            handleOTPVerification={() => {}}
                            error=""
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