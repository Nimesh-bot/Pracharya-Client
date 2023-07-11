import { BlurView } from "expo-blur";
import React, { useEffect, useState } from "react";
import { Modal, Pressable, ScrollView, Text, View } from "react-native";

import Card from "../Posts/Card";
import Comments from "./Comments";
import Interactions from "./Interactions";
import PostComment from "./PostComment";

import { RightArrowIcon } from "../../../../../assets/icons/svg-icons";
import { usePostDetailContext } from "../../../../context/PostDetailContextProvider";
import { fakePosts } from "../../../../libs/constants";

import LoadingIndicator from "../../../../components/LoadingIndicator";
import { useGetCommentsOfThreadQuery } from "../../../../redux/features/comments/commentsApi.slice";
import { useGetLikesofThreadQuery } from "../../../../redux/features/likes/likeApi.slice";
import { useGetThreadByIdQuery } from "../../../../redux/features/thread/threadApi.slice";

const DetailPopup = () => {
  const { isVisible, setIsVisible, post } = usePostDetailContext();

  const [commentShown, setCommentShown] = useState(false);

  const { data, isLoading, isFetching } = useGetThreadByIdQuery(post.id);
  const { data: likesCount, isLoading: likesCountLoading } =
    useGetLikesofThreadQuery(post.id);
  const { data: commentsCount, isLoading: commentsCountLoading } =
    useGetCommentsOfThreadQuery(post.id);

  useEffect(() => {
    data;
    likesCount;
    commentsCount;

    console.log("likes", likesCount);
    console.log("comments", commentsCount);
  }, [data]);

  if (isLoading || isFetching || likesCountLoading || commentsCountLoading)
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
              likes={likesCount.like_count}
              comments={commentsCount.length === 0 ? 0 : commentsCount.length}
              commentShown={commentShown}
              setCommentShown={setCommentShown}
            />
            <PostComment />
            {fakePosts[0].comments.map((comment: any, index: number) => (
              <Comments comment={comment} key={index} />
            ))}
          </View>
        </ScrollView>
      </BlurView>
    </Modal>
  );
};

export default DetailPopup;
