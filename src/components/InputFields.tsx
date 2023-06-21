import { View, Text, TextInput, TextInputProps } from 'react-native'
import React from 'react'

interface InputProps extends TextInputProps {
  placeholder?: string;
  additionalCss?: string;
  prefix?: string | JSX.Element;
}

const PlainInputField = ({ additionalCss, ...otherProps}: InputProps) => {
  return (
    <TextInput 
        className={`py-default px-xl rounded-default bg-light ${additionalCss}`}
        {...otherProps}
    >
    </TextInput>
  )
}

const InputFieldWithPrefix = ({ prefix, additionalCss, ...otherProps}: InputProps) => {
  return (
    <View className={`flex-row items-center rounded-default bg-light ${additionalCss} px-xl py-default`}>
        <Text className='text-dark opacity-80'>{prefix}</Text>
        <TextInput 
          className='flex-1 h-full text-base ml-default' 
          {...otherProps}
        >
        </TextInput>
    </View>
  )
}

export {
  PlainInputField, InputFieldWithPrefix
}