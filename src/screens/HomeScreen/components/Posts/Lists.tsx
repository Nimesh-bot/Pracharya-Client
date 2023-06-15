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
                description={post.description}
                tag={post.tag}
                contributors={post.contributors}
            />
        ))
      }
    </View>
  )
}

export default Lists