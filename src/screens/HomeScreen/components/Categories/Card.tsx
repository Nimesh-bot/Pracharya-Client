import { TouchableOpacity, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AirplaneSquareIcon, CarIcon, FileIcon, MenuIcon, PersonalCardIcon, SecurityIcon } from '../../../../../assets/icons/svg-icons'

const Card = ({ icon, title, active, onPress, index, additionalCss, }: CategoryCardProps) => {
  const [categoryIcon, setCategoryIcon] = useState('' as any)

  useEffect(() => {
    switch(icon) {
      case 'id':
        return setCategoryIcon(<PersonalCardIcon active={active} size={24} />)
      case 'menu':
        return setCategoryIcon(<MenuIcon active={active} size={24} />)
      case 'car':
        return setCategoryIcon(<CarIcon active={active} size={24} />)
      case 'security':
        return setCategoryIcon(<SecurityIcon active={active} size={24} />)
      case 'plane':
        return setCategoryIcon(<AirplaneSquareIcon active={active} size={24} />)
      default:
        return setCategoryIcon(<FileIcon active={active} size={24} />)
    }
  }, [icon])

  return (
    <TouchableOpacity 
      className={`flex-col w-[80px] h-[80px] p-sm rounded-md ml-lg bg-white items-center justify-center flex-shrink-0 ${additionalCss}`}
      onPress={onPress}
    >
        {categoryIcon}
        <Text className={`text-sm mt-1 font-light ${active ? 'text-blue' : 'text-dark'}`}>
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default Card