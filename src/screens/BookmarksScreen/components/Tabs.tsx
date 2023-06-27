import { View, Text, Pressable } from 'react-native'
import React from 'react'

interface TabsProps {
    isBookmark: boolean
    setIsBookmark: (isBookmark: boolean) => void
}

const Tabs = ({ isBookmark, setIsBookmark }: TabsProps) => {
  return (
    <View className='bg-white px-xl rounded-default'>
        <View className='flex-row items-center justify-around'>
            <Pressable className={`${isBookmark && 'border-b-2 border-b-blue'}`} onPress={() => setIsBookmark(true)}>
                <Text className='text-dark text-lg py-xl'>Bookmarks</Text>
            </Pressable>
            <Pressable className={`${!isBookmark && 'border-b-2 border-b-blue'}`} onPress={() => setIsBookmark(false)}>
                <Text className='text-dark text-lg py-xl'>Comments</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default Tabs