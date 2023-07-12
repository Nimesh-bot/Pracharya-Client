import { BlurView } from "expo-blur";
import React, { useEffect, useState } from "react";
import { Modal, Pressable, ScrollView, Text, View } from "react-native";

import Card from "../Posts/Card";
import Comments from "./Comments";
import Interactions from "./Interactions";
import PostComment from "./PostComment";

import { RightArrowIcon } from "../../../../../assets/icons/svg-icons";
import { usePostDetailContext } from "../../../../context/PostDetailContextProvider";

import LoadingIndicator from "../../../../components/LoadingIndicator";
import { useGetCommentsOfThreadQuery } from "../../../../redux/features/comments/commentsApi.slice";
import { useGetLikesofThreadQuery } from "../../../../redux/features/likes/likeApi.slice";
import { useUserDetailQuery } from "../../../../redux/features/profile/profileApi.slice";
import { useGetThreadByIdQuery } from "../../../../redux/features/thread/threadApi.slice";

const DetailPopup = () => {
  const { isVisible, setIsVisible, post } = usePostDetailContext();

  const [commentShown, setCommentShown] = useState(false);

  const { data, isLoading, isFetching } = useGetThreadByIdQuery(post.id);
  const {
    data: likesCount,
    isLoading: likesCountLoading,
    refetch: likeRefetch,
  } = useGetLikesofThreadQuery(post.id);
  const {
    data: commentsCount,
    isLoading: commentsCountLoading,
    refetch: commentRefetch,
  } = useGetCommentsOfThreadQuery(post.id);

  const { data: profileData, refetch: profileRefetch } = useUserDetailQuery();

  const [globalLoading, setGlobalLoading] = useState(true);

  useEffect(() => {
    data;
    likeRefetch();
    commentRefetch();
    profileRefetch();
  }, [data, likesCount, commentsCount]);

  useEffect(() => {
    if (globalLoading) {
      setTimeout(() => {
        setGlobalLoading(false);
      }, 2000);
    }
  }, [globalLoading]);

  if (globalLoading)
    return (
      <LoadingIndicator
        text="Fetching Details"
        subText="Please wait while we fetch the details of the thread."
      />
    );

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        setIsVisible(false);
      }}
    >
      <BlurView
        className="bg-opacity-60 backdrop-blur-sm w-screen h-screen flex-col justify-end absolute top-0 left-0 z-50"
        tint="light"
        intensity={80}
      >
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 20,
            flexDirection: "column",
            flexGrow: 1,
          }}
        >
          <View className="w-full flex-1 mt-3xl rounded-t-lg bg-white flex-col p-xl">
            <Pressable
              className="flex-row items-center"
              onPress={() => {
                setIsVisible(false);
              }}
            >
              <View className="rotate-180 max-w-fit">
                <RightArrowIcon size={24} />
              </View>
              <Text className="ml-default text-xl font-bold">
                Thread Details
              </Text>
            </Pressable>
            <Card post={post} fullContent={true} />
            <Interactions
              threadId={post.id}
              active={likesCount?.some(
                (like: any) => like?.profileid === profileData?.id
              )}
              likes={
                likesCount && likesCount?.length > 0 ? likesCount?.length : 0
              }
              comments={
                commentsCount && commentsCount?.length > 0
                  ? commentsCount?.length
                  : 0
              }
              commentShown={commentShown}
              setCommentShown={setCommentShown}
            />
            <PostComment comment={commentsCount} threadId={post.id} />
            {commentsCount?.map((comment: any, index: number) => (
              <Comments comment={comment} key={index} />
            ))}
          </View>
        </ScrollView>
      </BlurView>
    </Modal>
  );
};

export default DetailPopup;
