import React, { useEffect, useState } from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";

import { BookmarksIcon } from "../../../../assets/icons/svg-icons";
import Tags from "../../../components/Tags";

import { Toast } from "react-native-toast-message/lib/src/Toast";
import { useSelector } from "react-redux";
import tailwindConfig from "../../../../tailwind.config";
import { usePostDetailContext } from "../../../context/PostDetailContextProvider";
import {
  useAddBookmarkMutation,
  useDeleteBookmarkMutation,
  useGetBookmarksQuery,
} from "../../../redux/features/bookmarks/bookmarksApi.slice";
import { useGetCategoriesQuery } from "../../../redux/features/category/categoryApi.slice";

const Card = ({ post, fullContent }: PostCardProps) => {
  const textColor = (tailwindConfig as any).theme.colors.dark;
  const primaryColor = (tailwindConfig as any).theme.colors.blue;

  const { isLoggedIn } = useSelector((state: any) => state.auth);

  const { category, title, content, creators, id } = post;

  const { data: categoriesData, refetch: categoriesRefetch } =
    useGetCategoriesQuery();

  const { data: bookmarksData, refetch: bookmarksRefetch } =
    useGetBookmarksQuery();
  const [addBookmark] = useAddBookmarkMutation();
  const [deleteBookmark] = useDeleteBookmarkMutation();

  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    if (bookmarksData) {
      setIsBookmarked(
        bookmarksData.some((bookmark: any) => bookmark.thread.id === id)
      );
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      bookmarksRefetch();
    }
  }, [isLoggedIn]);

  //   const [source, setSource] = useState({
  //     html: "",
  //   } as any);

  //   useEffect(() => {
  //     if (!fullContent) {
  //       setSource({
  //         html: content.slice(0, 100),
  //       });
  //     } else {
  //       setSource({
  //         html: content,
  //       });
  //     }
  //   }, [content, fullContent]);

  const { setIsVisible, setPost } = usePostDetailContext();

  const handleOpenDetail = () => {
    setPost({
      content,
      category,
      creators,
      title,
      id,
    });
    setIsVisible(true);
  };

  const handleBookmark = () => {
    if (!isLoggedIn) {
      Toast.show({
        type: "error",
        text1: "Login",
        text2: "You need to login to bookmark",
      });
      return;
    }
    setIsBookmarked(!isBookmarked);

    if (isBookmarked) {
      const payload = {
        bookmark_id: bookmarksData.find(
          (bookmark: any) => bookmark.thread.id === id
        ).id,
      };
      deleteBookmark(payload);
    } else {
      const payload = {
        thread_id: id,
      };
      addBookmark(payload);
    }
  };

  return (
    <Pressable
      className="py-default px-xl w-full bg-white rounded-md flex-col mt-lg first-of-type:mt-0"
      onPress={handleOpenDetail}
    >
      <View className="flex-row justify-between items-center">
        <Tags title={category ? category : ""} />
        <TouchableOpacity onPress={handleBookmark}>
          <BookmarksIcon
            size={24}
            color={isBookmarked ? primaryColor : textColor}
          />
        </TouchableOpacity>
      </View>
      <View className="text-dark mt-default">
        <View className="py-xs border-b border-b-border">
          <Text className="text-lg font-bold">{title}</Text>
        </View>
        {/* <View className="opacity-70 mt-default">
          <RenderHTML
            source={content ? {
                html: content.slice(0, 100),
                } : {
                    html: '',
                }
            }
            contentWidth={SCREEN_WIDTH - 64}
            tagsStyles={{
              h1: {
                fontSize: 18,
                fontWeight: "bold",
                color: textColor,
              },
              h2: {
                fontSize: 16,
                fontWeight: "bold",
                color: textColor,
              },
              p: {
                fontSize: 14,
                color: textColor,
              },
              a: {
                fontSize: 14,
                color: primaryColor,
              },
              li: {
                fontSize: 14,
                color: textColor,
              },
            }}
          />
        </View> */}
      </View>
      <View className="flex-row justify-between items-center mt-xl">
        <View className="flex-row items-center">
          <View className="flex-row items-center">
            {creators?.map((contributor: any, index: number) => (
              <View className="w-10 h-10 rounded-full" key={index}>
                <Image
                  source={{ uri: contributor.avatar }}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 100,
                    marginLeft: index === 0 ? 0 : -10,
                    borderWidth: 2,
                    borderColor: "#fff",
                  }}
                />
              </View>
            ))}
          </View>
          <Text className="text-dark text-lg font-medium ml-sm">
            Contributors
          </Text>
        </View>
        {/* <RightArrowIcon size={24} /> */}
      </View>
    </Pressable>
  );
};

export default Card;
