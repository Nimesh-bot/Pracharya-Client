import { View, Text, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'

import { SendButton } from '../../../../../assets/icons/svg-icons'

import { CommentInputField, PlainInputField } from '../../../../components/InputFields'
import { IconButton } from '../../../../components/Buttons'

import { usePostDetailContext } from '../../../../context/PostDetailContextProvider'
import { fakeUsers } from '../../../../libs/constants'

const PostComment = () => {
  const { replying, setReplying } = usePostDetailContext();
  const [commentingTo, setCommentingTo] = useState<string>('');

  useEffect(() => {
    if(replying.isReplying) {
      const name = fakeUsers.find(user => user.id === replying.replyingTo)?.name!
      setCommentingTo(name)
    } else {
      setCommentingTo('')
    }
  })

  return (
    <View className='flex-row items-center mt-xl'>
        <CommentInputField 
          placeholder={
            replying.isReplying ? `Replying to ${commentingTo}` : `Post your comment`
          }
          additionalCss='flex-1'
          isReplying={replying.isReplying}
          handleCancelReply={() => {
            setReplying({
              isReplying: false,
              replyingTo: ''
            })
            setCommentingTo('')
          }}
        />
        <IconButton
          icon={<SendButton size={24} color={'#fff'} />}
          additionalCss='ml-default p-default'
        />
    </View>
  )
}

export default PostComment