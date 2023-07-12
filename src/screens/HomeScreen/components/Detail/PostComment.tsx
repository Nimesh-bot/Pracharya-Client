import React, { useEffect, useState } from "react";
import { View } from "react-native";

import { SendButton } from "../../../../../assets/icons/svg-icons";

import { IconButton } from "../../../../components/Buttons";
import { CommentInputField } from "../../../../components/InputFields";

import { Toast } from "react-native-toast-message/lib/src/Toast";
import LoadingIndicator from "../../../../components/LoadingIndicator";
import { usePostDetailContext } from "../../../../context/PostDetailContextProvider";
import { useCreateCommentMutation } from "../../../../redux/features/comments/commentsApi.slice";

interface PostCommentProps {
  comment: any;
  threadId: number;
}

const PostComment = ({ comment, threadId }: PostCommentProps) => {
  const { replying, setReplying } = usePostDetailContext();
  const [commentingTo, setCommentingTo] = useState<string>("");

  const [commentText, setCommentText] = useState<string>("");

  const [createComment, { isLoading }] = useCreateCommentMutation();

  console.log("threadId", threadId);

  useEffect(() => {
    if (replying.isReplying) {
      console.log("comment", comment);
      console.log("replying", replying);
      const name = comment?.find((each: any) => each.id === replying.replyingTo)
        ?.profile.firstname!;
      setCommentingTo(name);
    } else {
      setCommentingTo("");
    }
  }, [replying.isReplying]);

  const handleComment = () => {
    const data = {
      content: commentText,
      parentid: replying.isReplying ? replying.replyingTo : null,
    };
    console.log("payload", data);
    createComment({
      threadId,
      data,
    })
      .unwrap()
      .then(() => {
        setCommentText("");
      })
      .catch((err) => {
        console.log(err);
        Toast.show({
          type: "error",
          text1: "Error",
          text2: err.data.msg || "Something went wrong",
          visibilityTime: 3000,
        });
      });
  };
  return (
    <>
      <View className="flex-row items-center mt-xl">
        <CommentInputField
          placeholder={
            replying.isReplying
              ? `Replying to ${commentingTo}`
              : `Post your comment`
          }
          additionalCss="flex-1"
          value={commentText}
          onChangeText={(text) => setCommentText(text)}
          isReplying={replying.isReplying}
          handleCancelReply={() => {
            setReplying({
              isReplying: false,
              replyingTo: "",
            });
            setCommentingTo("");
          }}
        />
        <IconButton
          icon={<SendButton size={24} color={"#fff"} />}
          additionalCss="ml-default p-default"
          onPress={handleComment}
        />
      </View>

      {isLoading && (
        <LoadingIndicator
          text="Processing..."
          subText="Your comment is being posted. Please wait"
        />
      )}
    </>
  );
};

export default PostComment;
