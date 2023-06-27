import { View, Image, Text, Pressable } from 'react-native'
import React from 'react'
import { usePostDetailContext } from '../../../../context/PostDetailContextProvider'

interface CommentsProps {
    comment: any
}

const Comments = ({ comment }: CommentsProps) => {
    const dateToLocaleISOString = (date: string) => {
        const dateObj = new Date(date);
        return dateObj.toLocaleString();
    }

    const { setReplying } = usePostDetailContext();

    return (
        <View className='w-full flex-row gap-x-4 mt-default'>
            <Image 
                source={{
                    uri: comment.commentor.avatar
                }}
                className='w-12 h-12 rounded-full'
            />
            <View className='flex-1 flex-col'>
                {/* Comment */}
                <View>
                    <View className="flex-col mb-xs">
                        <Text className='font-bold'>{comment.commentor.name}</Text>
                        <Text className='font-light text-sm'>{dateToLocaleISOString(comment.commentedAt)}</Text>
                    </View>
                    <Text>{comment.content}</Text>
                    <Pressable className='mt-sm' onPress={() => setReplying({
                        isReplying: true,
                        replyingTo: comment.commentor.id
                    })}>
                        <Text className='font-medium text-blue'>Reply</Text>
                    </Pressable>
                </View>
                {/* Replies */}
                <View className='flex-col mt-sm'>
                    <View className='flex-row items-center'>
                        <View className='flex-1 h-[1px] bg-border'></View>
                        <Text className='mx-default text-sm text-dark font-light'>{comment.replies.length} Replies</Text>
                        <View className='flex-1 h-[1px] bg-border'></View>
                    </View>
                    {
                        comment.replies.map((reply: any, index: number) => (
                            <View className='flex-1 flex-row mt-lg first-of-type:mt-xl' key={index}>
                                <Image 
                                    source={{
                                        uri: reply.replier.avatar
                                    }}
                                    className='w-10 h-10 rounded-full mr-default'
                                />
                                <View className='flex-col flex-1'>
                                    {/* Reply */}
                                    <View>
                                        <View className="flex-col mb-xs">
                                            <Text className='font-bold'>{reply.replier.name}</Text>
                                            <Text className='font-light text-sm'>{dateToLocaleISOString(reply.repliedAt)}</Text>
                                        </View>
                                        <Text>{reply.content}</Text>
                                    </View>
                                </View>
                            </View>
                        ))
                    }
                </View>
            </View>
        </View>
    )
}

export default Comments