import { View, Text, TextInput } from 'react-native'
import React from 'react'

const PlainInputField = ({ additionalCss, ...otherProps}: InputProps) => {
  return (
    <TextInput 
        className={`py-default px-xl rounded-default bg-light ${additionalCss}`}
        {...otherProps}
    >
    </TextInput>
  )
}

export {
    PlainInputField
}