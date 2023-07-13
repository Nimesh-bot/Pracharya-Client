import React, { useEffect, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import RenderHTML from "react-native-render-html";

import { TrashIcon } from "../../../../../assets/icons/svg-icons";
import tailwindConfig from "../../../../../tailwind.config";
import { IconButton, PrimaryButton } from "../../../../components/Buttons";
import Tags from "../../../../components/Tags";
import { SCREEN_WIDTH } from "../../../../libs/constants";

const UnverifiedCard = ({ post }: PostCardProps) => {
  const textColor = (tailwindConfig as any).theme.colors.dark;
  const whiteColor = (tailwindConfig as any).theme.colors.white;
  const primaryColor = (tailwindConfig as any).theme.colors.blue;
  const { category, title, content, creators, id } = post;

  const [source, setSource] = useState({
    html: "",
  } as any);

  useEffect(() => {
    setSource({
      html: content,
    });
  }, [content]);

  return (
    <Pressable className="py-default px-xl w-full bg-white rounded-md flex-col mt-lg first-of-type:mt-0">
      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center">
          {creators?.map((contributor: any, index: number) => (
            <View className="flex-row items-center">
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
              <Text className="text-dark text-lg font-medium ml-sm">
                {contributor.name}
              </Text>
            </View>
          ))}
        </View>
        <Tags title={category ? category : ""} />
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
        <View className="flex-1">
          <PrimaryButton text="Verify" onPress={() => {}} />
        </View>
        <IconButton
          additionalCss="bg-[#ff0000] flex-[0.2] flex justify-center items-center ml-default"
          icon={<TrashIcon size={21} color={whiteColor} />}
          onPress={() => {}}
        />
      </View>
    </Pressable>
  );
};

export default UnverifiedCard;
