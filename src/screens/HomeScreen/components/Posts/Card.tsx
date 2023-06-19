import React, { useEffect, useState } from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import RenderHTML from 'react-native-render-html'

import Tags from '../../../../components/Tags'
import { BookmarksIcon, RightArrowIcon } from '../../../../../assets/icons/svg-icons'
import { SCREEN_WIDTH } from '../../../../libs/constants'

const Card = ({ description, tag, contributors, fullContent}: PostCardProps) => {
  const [source, setSource] = useState({} as any)
  
  useEffect(() => {
    if(!fullContent) {
      setSource(
        {
          html: description.slice(0, 300)
        }
      )
    } else {
      setSource(
        {
          html: description
        }
      )
    }
  }, [description, fullContent])

  return (
    <Pressable className='py-base px-xl w-full bg-white rounded-md flex-col mt-base first-of-type:mt-0'>
        <View className='flex-row justify-between items-center'>
          <Tags title={tag} />
          <BookmarksIcon size={24} active={false} />
        </View>
        <View className='opacity-60 text-dark mt-base'>
          <RenderHTML
            source={source}
            contentWidth={SCREEN_WIDTH - 64}
          />
        </View>
        <View className='flex-row justify-between items-center mt-xl'>
          <View className='flex-row items-center'>
            <View className='flex-row items-center'>
              {
                contributors.map((contributor, index) => (
                  <View className='w-10 h-10 rounded-full' key={index}>
                    <Image
                      source={{ uri: contributor.avatar }}
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 100,
                        marginLeft: index === 0 ? 0 : -10,
                        borderWidth: 2,
                        borderColor: '#fff'
                      }}
                    />
                  </View>
                ))
              }
            </View>
            <Text className='text-dark text-lg font-medium ml-sm'>Contributors</Text>
          </View>
          <RightArrowIcon size={24} />
        </View>
    </Pressable>
  )
}

export default Card