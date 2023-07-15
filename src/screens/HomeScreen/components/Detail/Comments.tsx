import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { usePostDetailContext } from "../../../../context/PostDetailContextProvider";
import { useGetRepliesQuery } from "../../../../redux/features/comments/commentsApi.slice";

interface CommentsProps {
  comment: any;
}

const Comments = ({ comment }: CommentsProps) => {
  const dateToLocaleISOString = (date: string) => {
    const dateObj = new Date(date);
    return dateObj.toLocaleString();
  };

  const [repliesOf, setRepliesOf] = React.useState<any>(null); // [commentId, replies
  const [showReplies, setShowReplies] = React.useState(false);

  const { data: repliesData, refetch: repliesRefetch } = useGetRepliesQuery(
    comment?.id
  );

  const { setReplying } = usePostDetailContext();

  const handleShowReplies = () => {
    setShowReplies(!showReplies);
    if (showReplies) {
      repliesRefetch();
    }
  };

  return (
    <View className="w-full flex-row gap-x-4 mt-default">
      <Image
        source={{
          uri: comment?.profile?.avatar,
        }}
        className="w-12 h-12 rounded-full"
      />
      <View className="flex-1 flex-col">
        {/* Comment */}
        <View>
          <View className="flex-col mb-xs">
            <Text className="font-bold">
              {comment?.profile?.firstname + " " + comment?.profile?.lastname}
            </Text>
            <Text className="font-light text-sm">
              {dateToLocaleISOString(comment?.createdAt)}
            </Text>
          </View>
          <Text>{comment?.content}</Text>
          <View className="flex-row">
            <Pressable
              className="mt-sm"
              onPress={() =>
                setReplying({
                  isReplying: true,
                  replyingTo: comment?.id,
                })
              }
            >
              <Text className="font-medium text-blue">Reply</Text>
            </Pressable>

            <Pressable className="mt-sm ml-default" onPress={handleShowReplies}>
              <Text className="font-light text-blue">
                {comment._count.child > 0 && (
                  <>{showReplies ? "Hide Replies" : "Show Replies"}</>
                )}
              </Text>
            </Pressable>
          </View>
        </View>
        {/* Replies */}
        <View className="flex-col mt-sm">
          <View className="flex-row items-center">
            <View className="flex-1 h-[1px] bg-border"></View>
            <Text className="mx-default text-sm text-dark font-light">
              {comment._count.child} Replies
            </Text>
            <View className="flex-1 h-[1px] bg-border"></View>
          </View>
          {showReplies && (
            <>
              {repliesData?.map((reply: any, index: number) => (
                <View
                  className="flex-1 flex-row mt-lg first-of-type:mt-xl"
                  key={index}
                >
                  <Image
                    source={{
                      uri: reply?.profile?.avatar,
                    }}
                    className="w-10 h-10 rounded-full mr-default"
                  />
                  <View className="flex-col flex-1">
                    <View>
                      <View className="flex-col mb-xs">
                        <Text className="font-bold">
                          {reply?.profile?.firstname +
                            " " +
                            reply?.profile?.lastname}
                        </Text>
                        {/* <Text className="font-light text-sm">
                            {dateToLocaleISOString(reply.repliedAt)}
                        </Text> */}
                      </View>
                      <Text>{reply?.content}</Text>
                    </View>
                  </View>
                </View>
              ))}
            </>
          )}
          {/* {comment.replies.map((reply: any, index: number) => (
            <View
              className="flex-1 flex-row mt-lg first-of-type:mt-xl"
              key={index}
            >
              <Image
                source={{
                  uri: reply.replier.avatar,
                }}
                className="w-10 h-10 rounded-full mr-default"
              />
              <View className="flex-col flex-1">
                <View>
                  <View className="flex-col mb-xs">
                    <Text className="font-bold">{reply.replier.name}</Text>
                    <Text className="font-light text-sm">
                      {dateToLocaleISOString(reply.repliedAt)}
                    </Text>
                  </View>
                  <Text>{reply.content}</Text>
                </View>
              </View>
            </View>
          ))} */}
        </View>
      </View>
    </View>
  );
};

export default Comments;
