import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import RNDateTimePicker from '@react-native-community/datetimepicker';

import { PlainInputField } from '../../../components/InputFields'
import { PrimaryButton } from '../../../components/Buttons'
import { RegisterProps } from '../Register'

import { CalendarIcon } from '../../../../assets/icons/svg-icons';
import tailwindConfig from '../../../../tailwind.config';

const RegisterInfo = ({ registerInfo, setRegisterInfo }: RegisterProps) => {
    const primaryColor = (tailwindConfig as any).theme.colors.blue
    const [showDatePicker, setShowDatePicker] = useState(false)

    const handleSubmit = () => {
        const payload = {
            firstname: registerInfo.firstname,
            middlename: registerInfo.middlename,
            lastname: registerInfo.lastname,
            email: registerInfo.email,
            dob: registerInfo.dob,
            mobile_number: registerInfo.mobile_number,
        }
        console.log(payload)
    }

    return (
        <>
            <View>
                <View>
                    <Text className='text-dark opacity-80 mb-sm'>First Name</Text>
                    <PlainInputField
                        placeholder='Tim'
                        value={registerInfo.firstname}
                        onChangeText={(text: string) => {
                            setRegisterInfo({
                                ...registerInfo,
                                firstname: text,
                            })
                        }}
                    />
                </View>
                <View className='mt-default'>
                    <Text className='text-dark opacity-80 mb-sm'>Middle Name (Optional)</Text>
                    <PlainInputField
                        placeholder='Alber'
                        value={registerInfo.middlename}
                        onChangeText={(text: string) => {
                            setRegisterInfo({
                                ...registerInfo,
                                middleName: text,
                            })
                        }}
                    />
                </View>
                <View className='mt-default'>
                    <Text className='text-dark opacity-80 mb-sm'>Last Name</Text>
                    <PlainInputField
                        placeholder='McGraw'value={registerInfo.lastname}
                        onChangeText={(text: string) => {
                            setRegisterInfo({
                                ...registerInfo,
                                lastname: text,
                            })
                        }}
                    />
                </View>
                <View className='mt-default'>
                    <Text className='text-dark opacity-80 mb-sm'>Email</Text>
                    <PlainInputField
                        placeholder='example@mail.com'
                        keyboardType='email-address'
                        value={registerInfo.email}
                        onChangeText={(text: string) => {
                            setRegisterInfo({
                                ...registerInfo,
                                email: text,
                            })
                        }}
                    />
                </View>
                <View className='mt-default'>
                    <Text className='text-dark opacity-80 mb-sm'>Date of Birth</Text>
                    <Pressable
                        className='relative flex-row justify-between px-lg items-center bg-light rounded-default h-12'
                        onPressIn={() => {
                            setShowDatePicker(true)
                        }}
                    >
                        <Text className='text-dark opacity-80'>{registerInfo.dob.toDateString()}</Text>
                        <CalendarIcon size={16} color={primaryColor} />   
                    </Pressable>
                    {
                        showDatePicker &&
                        <RNDateTimePicker mode="date" 
                            value={registerInfo.dob}
                            onChange={(event, selectedDate) => {
                                if(event.type == 'set') {
                                    setRegisterInfo({
                                        ...registerInfo,
                                        dob: selectedDate,
                                    })
                                    setShowDatePicker(false)
                                }
                                setShowDatePicker(false)
                            }}
                        />
                    }
                </View>
                <View className='mt-default'>
                    <Text className='text-dark opacity-80 mb-sm'>Phone Number</Text>
                    <PlainInputField
                        placeholder=''
                        keyboardType='phone-pad'
                        value={registerInfo.mobile_number}
                        onChangeText={(text: string) => {
                            setRegisterInfo({
                                ...registerInfo,
                                mobile_number: text,
                            })
                        }}
                    />
                </View>
            </View>
            <PrimaryButton
                text='Register'
                additionalCss='mt-2xl'
                onPress={handleSubmit}
            />
        </>
    )
}

export default RegisterInfo