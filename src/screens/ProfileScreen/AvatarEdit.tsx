import { BlurView } from "expo-blur";
import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useState } from "react";
import {
  Image,
  Modal,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Toast from "react-native-toast-message";

import AppBar from "../../components/AppBar";
import LoadingIndicator from "../../components/LoadingIndicator";

import {
  useChangeUserAvatarMutation,
  useUserDetailQuery,
} from "../../redux/features/profile/profileApi.slice";

import { CameraIcon, RightArrowIcon } from "../../../assets/icons/svg-icons";
import tailwindConfig from "../../../tailwind.config";

const AvatarEdit = ({ navigation }: any) => {
  const primaryColor: string = (tailwindConfig.theme as any).colors.blue;

  const [userAvatar, setUserAvatar] = useState("" as string);
  const [currAvatar, setCurrAvatar] = useState("" as string);
  const [toUploadFile, setToUploadFile] = useState<any>();

  const { data: profileData, isFetching, isLoading } = useUserDetailQuery();
  const [changeUserAvatar, { isLoading: avatarChangeLoading }] =
    useChangeUserAvatarMutation();

  const [count, setCount] = useState(0);
  const [error, setError] = useState("");
  const [errorInUpload, setErrorInUpload] = useState("");

  useEffect(() => {
    if (!isFetching && !isLoading) {
      setUserAvatar(profileData!.avatar);
      setCurrAvatar(profileData!.avatar);
    }
  }, [isFetching, isLoading]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    console.log(result);

    if (!result.canceled) {
      setCurrAvatar(result.assets[0].uri);
      setToUploadFile(result.assets[0]);
    }
  };

  const handleBack = () => {
    if (currAvatar !== userAvatar) {
      setCount(count + 1);
      if (count === 1) {
        setError(
          "Are you sure you want to discard changes? Press again to discard"
        );
      }
      if (count === 2) {
        navigation.goBack();
        setCount(0);
      }
    }
  };

  const handleChangeAvatar = () => {
    setErrorInUpload("");
    console.log("currAvatar", currAvatar);
    const formData: any = new FormData();

    formData.append("file", {
      uri: currAvatar,
      name: toUploadFile!.fileName,
      type: toUploadFile!.mimeType,
    });
    console.log("formData", formData);
    changeUserAvatar(formData)
      .unwrap()
      .then(() => {
        navigation.goBack();
        Toast.show({
          type: "success",
          text1: "Successfull",
          text2: "Your avatar has been updated successfully",
          autoHide: true,
          visibilityTime: 1000,
        });
        setUserAvatar(currAvatar);
      })
      .catch((err) => {
        console.log("error in upload", err);
        setErrorInUpload(
          err?.data?.msg ||
            "Something went wrong. Please contact us with this bug"
        );
        Toast.show({
          type: "error",
          text1: "Error",
          text2:
            err.data.msg ||
            "Something went wrong. Please contact us with this bug",
          autoHide: true,
          visibilityTime: 1000,
        });
      });
  };

  return (
    <View className="flex-1 flex-col relative">
      <AppBar />
      <Modal animationType="slide" transparent={true} visible={true}>
        <BlurView
          className="bg-opacity-60 backdrop-blur-sm w-screen h-screen flex-col justify-end absolute top-0 left-0 z-50"
          tint="light"
          intensity={80}
        >
          <ScrollView
            contentContainerStyle={{
              paddingBottom: 20,
              flex: 1,
              flexDirection: "column",
            }}
          >
            <View className="w-full flex-1 mt-3xl rounded-t-lg bg-white flex-col p-xl">
              <Pressable className="flex-row items-center" onPress={handleBack}>
                <View className="rotate-180 max-w-fit">
                  <RightArrowIcon size={24} />
                </View>
                <Text className="ml-default text-xl font-bold">Avatar</Text>
              </Pressable>

              {error !== "" && (
                <Text className="mt-xl bg-red200 rounded-sm px-default py-xs text-red">
                  {error}
                </Text>
              )}

              <View className="mt-2xl flex-col">
                <View>
                  <Text className="text-xl font-bold text-dark">
                    Identify Yourself
                  </Text>
                  <Text className="text-dark mt-xs opacity-80">
                    Choose the best way to portray yourself to the world.
                  </Text>
                </View>

                <View className="flex-row mt-2xl items-end">
                  <View className="relative">
                    {currAvatar ? (
                      <Image
                        source={{
                          uri: currAvatar,
                        }}
                        className="w-28 h-28 rounded-full"
                      />
                    ) : (
                      <Image
                        source={require("../../../assets/avatars/avatarDark.png")}
                        className="w-28 h-28 rounded-full"
                      />
                    )}
                    <TouchableOpacity
                      onPress={pickImage}
                      className="absolute bottom-0 -right-1 p-sm bg-light rounded-full"
                    >
                      <CameraIcon size={21} color={primaryColor} />
                    </TouchableOpacity>
                  </View>
                  {currAvatar !== userAvatar && (
                    <View className="ml-lg flex-1">
                      <Text className="text-dark">
                        We have detected change in your avatar. Please confirm
                        the change.
                      </Text>
                      <TouchableOpacity
                        onPress={handleChangeAvatar}
                        className="mt-default py-default"
                      >
                        <Text className="font-medium text-blue">Confirm</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>

                {errorInUpload !== "" && (
                  <Text className="mt-xl bg-red200 rounded-sm px-default py-xs text-red">
                    {errorInUpload}
                  </Text>
                )}

                {/* Avatar List */}
                {/* <View className="mt-2xl">
                  <Text className="text-xl font-bold text-dark">
                    Choose Default Avatars
                  </Text>
                  <View className="mt-lg flex-row flex-wrap">
                    {defaultAvatars.map((avatar, index) => (
                      <TouchableOpacity
                        key={index}
                        onPress={() => setCurrAvatar(avatar)}
                        className={`w-20 h-20 rounded-full overflow-hidden mr-default mt-default mb-default ${
                          currAvatar === avatar && "opacity-60"
                        }}`}
                      >
                        <Image source={avatar} className="w-full h-full" />
                      </TouchableOpacity>
                    ))}
                  </View>
                </View> */}
              </View>
            </View>
          </ScrollView>
        </BlurView>
      </Modal>
      {isLoading ||
        (isFetching && (
          <LoadingIndicator
            text="Fetching your profile..."
            subText="Please wait while we fetch your profile."
          />
        ))}

      {avatarChangeLoading && (
        <LoadingIndicator
          text="Please wait..."
          subText="Updating your avatar"
        />
      )}
    </View>
  );
};

export default AvatarEdit;
