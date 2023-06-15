import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const Card = ({ icon, title, active, onPress }: CategoryCardProps) => {
  return (
    <TouchableOpacity className='flex flex-col w-20 h-20 p-sm rounded-md bg-white items-center' onPress={onPress}>
        {icon}
        <Text className={`text-sm font-light ${active ? 'text-blue' : 'text-dark'}`}>
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default Card