import { View, Text } from 'react-native'
import React from 'react'
import { CategoryCardProps } from 'src/@types/home'

const Card = ({ icon, title, active }: CategoryCardProps) => {
  return (
    <View className='flex flex-col w-16 h-16 bg-white items-center'>
        {icon}
        <Text className={`text-sm font-light ${active ? 'text-blue' : 'text-dark'}`}>
            {title}
        </Text>
    </View>
  )
}

export default Card