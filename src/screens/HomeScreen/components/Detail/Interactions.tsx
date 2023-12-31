import React, { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { useSelector } from "react-redux";

import {
  CommentIcon,
  ContributorsIcon,
  LikeIcon,
  ShareIcon,
} from "../../../../../assets/icons/svg-icons";
import tailwindConfig from "../../../../../tailwind.config";
import {
  useLikeThreadMutation,
  useRemoveLikeMutation,
} from "../../../../redux/features/likes/likeApi.slice";
import { useGetThreadByIdQuery } from "../../../../redux/features/thread/threadApi.slice";

import ErrorIndicator from "../../../../components/ErrorIndicator";

interface IteractionsProps {
  commentShown: boolean;
  setCommentShown: (commentShown: boolean) => void;
  likes: number;
  comments: number;
  active?: boolean;
  threadId: number;
}

const Interactions = ({
  commentShown,
  setCommentShown,
  likes,
  comments,
  active,
  threadId,
}: IteractionsProps) => {
  const primaryColor = (tailwindConfig as any).theme.colors.blue;
  const defaultColor = (tailwindConfig as any).theme.colors.dark;

  const { isLoggedIn } = useSelector((state: any) => state.auth);

  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const { refetch: refetchCurrentThread } = useGetThreadByIdQuery(threadId);

  const [openPop, setOpenPop] = useState<boolean>(false);

  useEffect(() => {
    if(openPop) {
      setTimeout(() => {
        setOpenPop(false);
      }, 1500);
    }
  }, [openPop])

  useEffect(() => {
    if (active) setIsLiked(true);
  }, [active]);

  useEffect(() => {
    setLikeCount(likes);
  }, []);

  const [likeThread] = useLikeThreadMutation();
  const [removeLike] = useRemoveLikeMutation();

  const handleLike = () => {
    if(!isLoggedIn) {
      setOpenPop(true);
      return;
    }

    if (!isLiked) {
      setIsLiked(true);
      setLikeCount(likeCount + 1);
      likeThread(threadId)
        .unwrap()
        .then(() => {
          refetchCurrentThread();
        });
    } else {
      setIsLiked(false);
      setLikeCount(likeCount - 1);
      removeLike(threadId)
        .unwrap()
        .then(() => {
          refetchCurrentThread();
        });
    }
  };

  return (
    <>
      <View className="w-full py-default px-xl rounded-default bg-light flex-row items-center justify-between">
        <Pressable className="flex-row items-center" onPress={handleLike}>
          <LikeIcon size={24} color={isLiked ? primaryColor : defaultColor} />
          <Text className="text-sm ml-xs text-dark">{likeCount}</Text>
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
        {/* <Pressable className="flex-row items-center">
          <ContributorsIcon size={24} />
          <Text className="text-sm ml-xs text-dark"></Text>
        </Pressable> */}
      </View>

      {
        openPop && (
          <ErrorIndicator 
            text="Login"
            subText="You need to login to like"
          />
        )
      }
    </>
  );
};

export default Interactions;
