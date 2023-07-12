import React, { useEffect, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import RenderHTML from "react-native-render-html";

import {
  BookmarksIcon,
  RightArrowIcon,
} from "../../../../../assets/icons/svg-icons";
import Tags from "../../../../components/Tags";

import tailwindConfig from "../../../../../tailwind.config";
import { usePostDetailContext } from "../../../../context/PostDetailContextProvider";
import { SCREEN_WIDTH } from "../../../../libs/constants";

const Card = ({ post, fullContent }: any) => {
  const primaryColor = (tailwindConfig as any).theme.colors.blue;

  const [source, setSource] = useState({
    html: "",
  } as any);

  useEffect(() => {
    if (!fullContent) {
      setSource({
        html: post.content.slice(0, 300),
      });
    } else {
      setSource({
        html: post.content,
      });
    }
  }, [fullContent]);

  const { setIsVisible, setPost } = usePostDetailContext();

  const handleOpenDetail = () => {
    setPost({
      content: post?.content,
      category: post?.category,
      creators: post?.creators,
      title: post?.title,
      id: post?.id,
    });
    setIsVisible(true);
  };

  return (
    <Pressable
      className="py-default px-xl w-full bg-white rounded-md flex-col mt-default first-of-type:mt-0"
      onPress={handleOpenDetail}
    >
      <View className="flex-row justify-between items-center">
        <Tags title={post.category} />
        <BookmarksIcon size={24} color={primaryColor} />
      </View>
      <View className="opacity-60 text-dark mt-base">
        <RenderHTML source={source} contentWidth={SCREEN_WIDTH - 64} />
      </View>
      <View className="flex-row justify-between items-center mt-xl">
        <View className="flex-row items-center">
          <View className="flex-row items-center">
            {post.creators.map((contributor: any, index: number) => (
              <View className="w-10 h-10 rounded-full" key={index}>
                <Image
                  source={{ uri: contributor.avatar }}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 100,
                    // marginLeft: index === 0 ? 0 : -10,
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
        <RightArrowIcon size={24} />
      </View>
    </Pressable>
  );
};

export default Card;
