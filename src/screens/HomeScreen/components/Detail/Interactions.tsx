import { View, Pressable, Text } from 'react-native'
import React from 'react'
import { CommentIcon, ContributorsIcon, LikeIcon, ShareIcon } from '../../../../../assets/icons/svg-icons'

interface IteractionsProps {
    commentShown: boolean,
    setCommentShown: (commentShown: boolean) => void,
}

const Interactions = ({ commentShown, setCommentShown }: IteractionsProps) => {
  return (
    <View className='w-full py-default px-xl rounded-default bg-light flex-row items-center justify-between'>
        <Pressable className='flex-row items-center'>
            <LikeIcon size={24} />
            <Text className='text-sm ml-xs text-dark'>14</Text>    
        </Pressable>  
        <Pressable className='flex-row items-center' onPress={() => {
            setCommentShown(!commentShown)
        }}>
            <CommentIcon size={24} active={commentShown} />
            <Text className='text-sm ml-xs text-dark'>1</Text>
        </Pressable>
        <Pressable className='flex-row items-center'>
            <ShareIcon size={24} />
            <Text className='text-sm ml-xs text-dark'></Text>
        </Pressable>
        <Pressable className='flex-row items-center'>
            <ContributorsIcon size={24} />
            <Text className='text-sm ml-xs text-dark'></Text>
        </Pressable>
    </View>
  )
}

export default Interactions