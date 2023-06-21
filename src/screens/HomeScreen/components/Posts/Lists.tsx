import { View, Text } from 'react-native'
import React from 'react'
import Card from './Card'
import { fakePosts } from '../../../../libs/constants'

const Lists = () => {
  return (
    <View className='flex-col mt-xl items-center w-full'>
      {
        fakePosts.map((post, index) => (
            <Card 
              key={index}
              post={post}
            />
        ))
      }
    </View>
  )
}

export default Lists