import React, { useState } from 'react'
import { View, Text, ScrollView, Modal, Pressable } from 'react-native'
import { BlurView } from 'expo-blur';

import Card from '../Posts/Card';
import { RightArrowIcon } from '../../../../../assets/icons/svg-icons';
import { fakePosts } from '../../../../libs/constants';
import Interactions from './Interactions';
import PostComment from './PostComment';
import { usePostDetailContext } from '../../../../context/PostDetailContextProvider';
import Comments from './Comments';


const DetailPopup = () => {
    const { isVisible, setIsVisible } = usePostDetailContext();

    const [commentShown, setCommentShown] = useState(false)

    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={isVisible}
            onRequestClose={() => {
                setIsVisible(false)
            }}
        >
            <BlurView 
                className='bg-opacity-60 backdrop-blur-sm w-screen h-screen flex-col justify-end absolute top-0 left-0 z-50'
                tint='light'
                intensity={80}
            >
                <ScrollView
                    contentContainerStyle={{
                        paddingBottom: 20
                    }}
                >
                    <View className='w-full flex-1 mt-3xl rounded-t-lg bg-white flex-col p-xl'>
                        <Pressable className='flex-row items-center' onPress={() => {
                            setIsVisible(false)
                        }}>
                            <View className='rotate-180 max-w-fit'>
                                <RightArrowIcon size={24} />
                            </View>
                            <Text className='ml-default text-xl font-bold'>Thread Details</Text>
                        </Pressable>
                        <Card 
                            post={fakePosts[0]}
                            fullContent={true}
                        />
                        <Interactions 
                            commentShown={commentShown}
                            setCommentShown={setCommentShown}
                        />
                        <PostComment />
                        {
                            fakePosts[0].comments.map((comment: any, index: number) => (
                                <Comments
                                    comment={comment}
                                    key={index}
                                />
                            ))
                        }
                    </View>
                </ScrollView>
            </BlurView>
        </Modal>
    )
}

export default DetailPopup