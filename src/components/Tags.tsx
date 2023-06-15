import { View, Text } from 'react-native'
import React from 'react'

const Tags = ({ title, additionalCss, additionalTextCss }: TagsProps) => {
  return (
    <View className={`rounded-default px-base py-sm bg-blue200 ${additionalCss}`}>
      <Text className={`text-blue ${additionalTextCss}`}>{title}</Text>
    </View>
  )
}

export default Tags