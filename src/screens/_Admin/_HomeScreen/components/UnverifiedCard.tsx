import React, { useEffect, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import RenderHTML from "react-native-render-html";

import { IconButton, PrimaryButton } from "../../../../components/Buttons";
import ConfirmationModal from "../../../../components/ConfirmationModal";
import Tags from "../../../../components/Tags";

import { TrashIcon } from "../../../../../assets/icons/svg-icons";
import tailwindConfig from "../../../../../tailwind.config";
import LoadingIndicator from "../../../../components/LoadingIndicator";
import { SCREEN_WIDTH } from "../../../../libs/constants";

import { Toast } from "react-native-toast-message/lib/src/Toast";
import { useVerifyThreadMutation } from "../../../../redux/features/thread/threadApi.slice";

const UnverifiedCard = ({ post }: PostCardProps) => {
  const textColor = (tailwindConfig as any).theme.colors.dark;
  const whiteColor = (tailwindConfig as any).theme.colors.white;
  const primaryColor = (tailwindConfig as any).theme.colors.blue;

  const { category, title, content, creators, id } = post;

  const [confirmDelete, setConfirmDelete] = useState({
    isVisible: false,
    id: 0,
  });

  const [source, setSource] = useState({
    html: "",
  } as any);

  useEffect(() => {
    setSource({
      html: content,
    });
  }, [content]);

  const [verifyThread, { isLoading }] = useVerifyThreadMutation();
  //   const [ deleteT]

  const onVerify = () => {
    verifyThread(id)
      .then(() => {
        Toast.show({
          type: "success",
          text1: "Success",
          text2: "Thread has been verified",
          visibilityTime: 1000,
          autoHide: true,
        });
      })
      .catch((err) => {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: err.data.msg || "Something went wrong",
          visibilityTime: 1000,
          autoHide: true,
        });
      });
  };

  const onDelete = () => {
    setConfirmDelete({
      isVisible: true,
      id: id,
    });
  };

  return (
    <>
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
            <PrimaryButton text="Verify" onPress={onVerify} />
          </View>
          <IconButton
            additionalCss="bg-[#ff0000] flex-[0.2] flex justify-center items-center ml-default"
            icon={<TrashIcon size={21} color={whiteColor} />}
            onPress={() => {
              setConfirmDelete({
                isVisible: true,
                id: id,
              });
            }}
          />
        </View>
      </Pressable>

      {confirmDelete.isVisible && (
        <ConfirmationModal
          text="Delete Thread"
          subText="Are you sure you want to delete this thread?"
          btnText="Delete"
          isDanger={true}
          handleAction={onDelete}
          close={() => {
            setConfirmDelete({
              ...confirmDelete,
              isVisible: false,
            });
          }}
        />
      )}

      {isLoading && (
        <LoadingIndicator
          text="Verifying"
          subText="Please wait while we verify the thread"
        />
      )}
    </>
  );
};

export default UnverifiedCard;
