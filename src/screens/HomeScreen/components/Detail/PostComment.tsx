import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { PlainInputField } from '../../../../components/InputFields'
import { IconButton } from '../../../../components/Buttons'
import { SendButton } from '../../../../../assets/icons/svg-icons'

const PostComment = () => {
  return (
    <View className='flex-row items-center mt-xl'>
        <PlainInputField 
            placeholder='Write a comment...'
            additionalCss='flex-1'
        />
        <IconButton
            icon={<SendButton size={24} color={'#fff'} />}
            additionalCss='ml-default p-default'
        />
    </View>
  )
}

export default PostComment