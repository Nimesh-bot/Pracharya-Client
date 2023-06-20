import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const PrimaryButton = ({ text, additionalCss, additionalTextCss, ...otherProps }: ButtonProps) => {
  return (
    <TouchableOpacity 
      className={`py-xl px-base bg-blue rounded-default ${additionalCss}`} 
      style={{
        width: "auto"
      }}
      {...otherProps}
    >
      <Text className={`text-white text-center ${additionalTextCss}`}>{text}</Text>
    </TouchableOpacity>
  )
}

const TextButton = ({ text, additionalCss, additionalTextCss, ...otherProps }: ButtonProps) => {
  return (
    <TouchableOpacity 
      className={`py-xl px-base bg-transparent rounded-default ${additionalCss}`} 
      style={{
        width: "auto"
      }}
      {...otherProps}
    >
      <Text className={`text-blue text-center ${additionalTextCss}`}>{text}</Text>
    </TouchableOpacity>
  )
}

const IconButton = ({ icon, additionalCss, ...otherProps }: ButtonProps) => {
  return (
    <TouchableOpacity 
      className={`py-xl px-base bg-blue rounded-default ${additionalCss}`} 
      style={{
        width: "auto"
      }}
      {...otherProps}
    >
      {icon}
    </TouchableOpacity>
  )
}

export {
    PrimaryButton,
    TextButton,
    IconButton
}