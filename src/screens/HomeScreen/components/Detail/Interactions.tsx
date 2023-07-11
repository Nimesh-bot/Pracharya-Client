import React from "react";
import { Pressable, Text, View } from "react-native";
import {
  CommentIcon,
  ContributorsIcon,
  LikeIcon,
  ShareIcon,
} from "../../../../../assets/icons/svg-icons";

interface IteractionsProps {
  commentShown: boolean;
  setCommentShown: (commentShown: boolean) => void;
  likes: number;
  comments: number;
}

const Interactions = ({
  commentShown,
  setCommentShown,
  likes,
  comments,
}: IteractionsProps) => {
  return (
    <View className="w-full py-default px-xl rounded-default bg-light flex-row items-center justify-between">
      <Pressable className="flex-row items-center">
        <LikeIcon size={24} />
        <Text className="text-sm ml-xs text-dark">{likes}</Text>
      </Pressable>
      <Pressable
        className="flex-row items-center"
        onPress={() => {
          setCommentShown(!commentShown);
        }}
      >
        <CommentIcon size={24} active={commentShown} />
        <Text className="text-sm ml-xs text-dark">{comments}</Text>
      </Pressable>
      <Pressable className="flex-row items-center">
        <ShareIcon size={24} />
        <Text className="text-sm ml-xs text-dark"></Text>
      </Pressable>
      <Pressable className="flex-row items-center">
        <ContributorsIcon size={24} />
        <Text className="text-sm ml-xs text-dark"></Text>
      </Pressable>
    </View>
  );
};

export default Interactions;
