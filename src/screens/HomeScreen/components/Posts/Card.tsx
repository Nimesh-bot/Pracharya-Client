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

const Card = ({ post, fullContent }: PostCardProps) => {
  const textColor = (tailwindConfig as any).theme.colors.dark;
  const primaryColor = (tailwindConfig as any).theme.colors.blue;

  const { category, title, content, creators } = post;

  const [source, setSource] = useState({
    html: "",
  } as any);

  console.log("creator", creators[0].avatar);

  useEffect(() => {
    if (!fullContent) {
      setSource({
        html: content.slice(0, 100),
      });
    } else {
      setSource({
        html: content,
      });
    }
  }, [content, fullContent]);

  const { setIsVisible, setPost } = usePostDetailContext();

  const handleOpenDetail = () => {
    setPost({
      content,
      category,
      creators,
    });
    setIsVisible(true);
  };

  return (
    <Pressable
      className="py-default px-xl w-full bg-white rounded-md flex-col mt-lg first-of-type:mt-0"
      onPress={handleOpenDetail}
    >
      <View className="flex-row justify-between items-center">
        <Tags title={category} />
        <BookmarksIcon size={24} active={false} />
      </View>
      <View className="text-dark mt-default">
        <View className="py-xs border-b border-b-border">
          <Text className="text-lg font-bold">{title}</Text>
        </View>
        <View className="opacity-70 mt-default">
          <RenderHTML
            source={source}
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
        </View>
      </View>
      <View className="flex-row justify-between items-center mt-xl">
        <View className="flex-row items-center">
          <View className="flex-row items-center">
            {creators.map((contributor: any, index: number) => (
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
        <RightArrowIcon size={24} />
      </View>
    </Pressable>
  );
};

export default Card;
