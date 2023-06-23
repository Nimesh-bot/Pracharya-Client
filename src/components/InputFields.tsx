import { View, Text, TextInput, TextInputProps, Pressable } from 'react-native'
import React from 'react'

import { CloseIcon } from '../../assets/icons/svg-icons';

interface InputProps extends TextInputProps {
  placeholder?: string;
  additionalCss?: string;
  prefix?: string | JSX.Element;
  isReplying?: boolean;
  handleCancelReply?: () => void;
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

const CommentInputField = ({ additionalCss, isReplying, handleCancelReply, ...otherProps}: InputProps) => {
  return (
    <View className='relative flex-1'>
      <TextInput 
        className={`flex-1 py-default px-xl rounded-default bg-light ${additionalCss}`}
        {...otherProps}
      >
      </TextInput>
      {
        isReplying &&
        <View className='absolute right-0 top-0 bottom-0 flex-row items-center px-default'>
          <Pressable onPress={handleCancelReply}>
            <CloseIcon size={24} color={'#1C44AC'} />
          </Pressable>
        </View>
      }
    </View>
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
  PlainInputField, InputFieldWithPrefix,
  CommentInputField
}