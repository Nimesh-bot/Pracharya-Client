import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { BlurView } from 'expo-blur';

import Card from '../Posts/Card';
import { RightArrowIcon } from '../../../../../assets/icons/svg-icons';
import { fakePosts } from '../../../../libs/constants';

const DetailPopup = () => {
  return (
    <BlurView 
        className='bg-opacity-60 backdrop-blur-sm w-screen h-screen flex-col justify-end absolute top-0 left-0 z-50'
        tint='light'
        intensity={80}
    >
        <ScrollView>
            <View className='w-full flex-1 mt-3xl rounded-t-lg bg-white flex-col p-xl'>
                <View className='flex-row items-center'>
                    <View className='rotate-180 max-w-fit'>
                        <RightArrowIcon size={24} />
                    </View>
                    <Text className='ml-base text-xl font-bold'>Thread Details</Text>
                </View>
                <Card 
                    tag={fakePosts[0].tag}
                    description={fakePosts[0].description}
                    contributors={fakePosts[0].contributors}
                    fullContent={true}
                />
            </View>
        </ScrollView>
    </BlurView>
  )
}

export default DetailPopup