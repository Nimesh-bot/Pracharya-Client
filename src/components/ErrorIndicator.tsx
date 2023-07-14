import { View, Text, ActivityIndicator, Modal } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur'

import tailwindConfig from '../../tailwind.config'
import { CloseIcon } from '../../assets/icons/svg-icons'

interface ErrorIndicatorProps {
    text: string
    subText?: string
}

const ErrorIndicator = ({ text, subText }: ErrorIndicatorProps) => {
    const primaryColor = (tailwindConfig as any).theme.colors.blue
  return (
    <Modal
        animationType="fade"
        transparent={true}
        visible={true}
        onRequestClose={() => {}}
    >
        <BlurView
            tint="dark"
            intensity={100}
            className='fixed top-0 left-0 w-screen h-screen flex justify-center items-center'
        >
            <View className='w-3/4 h-56 bg-white rounded-default flex-col justify-center items-center px-default py-lg'>
                <CloseIcon size={32} color={'#ff0000'} />
                <Text className='text-center font-bold mt-default'>{text}</Text>
                <Text className='text-center mt-sm'>{subText}</Text>
            </View>
        </BlurView>
    </Modal>
  )
}

export default ErrorIndicator