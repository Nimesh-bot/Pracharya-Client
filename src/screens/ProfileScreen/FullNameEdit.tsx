import { BlurView } from "expo-blur";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Toast } from "react-native-toast-message/lib/src/Toast";

import { RightArrowIcon } from "../../../assets/icons/svg-icons";
import AppBar from "../../components/AppBar";
import { PrimaryButton } from "../../components/Buttons";
import { PlainInputField } from "../../components/InputFields";
import LoadingIndicator from "../../components/LoadingIndicator";
import { useEditUserProfileMutation } from "../../redux/features/profile/profileApi.slice";

const FullNameEdit = ({ navigation }: any) => {
  const [userEditData, setUserEditData] = useState<any>({
    firstname: "",
    middlename: "",
    lastname: "",
  });

  const [editUserProfile, { isLoading }] = useEditUserProfileMutation();

  const handleEditUserProfile = () => {
    const payload = {
      firstname: userEditData.firstname,
      middlename: userEditData.middlename,
      lastname: userEditData.lastname,
    };

    editUserProfile(payload).then(() => {
      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Name updated successfully",
        visibilityTime: 1000,
        autoHide: true,
      });
      navigation.navigate("Profile");
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
              width: "100%",
              flex: 1,
            }}
          >
            <KeyboardAvoidingView
              className="w-full flex-1"
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              keyboardVerticalOffset={500}
            >
              <View className="w-full flex-1 mt-3xl rounded-t-lg bg-white flex-col p-xl">
                <Pressable
                  className="flex-row items-center"
                  onPress={() => {
                    navigation.navigate("Profile");
                  }}
                >
                  <View className="rotate-180 max-w-fit">
                    <RightArrowIcon size={24} />
                  </View>
                  <Text className="ml-default text-xl font-bold">
                    Full Name
                  </Text>
                </Pressable>

                <View className="mt-2xl flex-col">
                  <View>
                    <Text className="text-dark">First Name</Text>
                    <PlainInputField
                      placeholder="First Name"
                      additionalCss="mt-default"
                      value={userEditData.firstname}
                      onChange={(e) =>
                        setUserEditData({
                          ...userEditData,
                          firstname: e.nativeEvent.text,
                        })
                      }
                    />
                  </View>
                  <View className="mt-lg">
                    <View className="flex-row gap-x-2">
                      <Text className="text-dark">Middle Name</Text>
                      <Text className="text-dark italic">(optional)</Text>
                    </View>
                    <PlainInputField
                      placeholder="Middle Name"
                      additionalCss="mt-default"
                      value={userEditData.middlename}
                      onChange={(e) =>
                        setUserEditData({
                          ...userEditData,
                          middlename: e.nativeEvent.text,
                        })
                      }
                    />
                  </View>
                  <View className="mt-lg">
                    <Text className="text-dark">Last Name</Text>
                    <PlainInputField
                      placeholder="Last Name"
                      additionalCss="mt-default"
                      value={userEditData.lastname}
                      onChange={(e) =>
                        setUserEditData({
                          ...userEditData,
                          lastname: e.nativeEvent.text,
                        })
                      }
                    />
                  </View>

                  <PrimaryButton
                    text="Update"
                    additionalCss="mt-2xl"
                    onPress={handleEditUserProfile}
                  />
                </View>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </BlurView>
      </Modal>
      {isLoading && (
        <LoadingIndicator
          text="Updating"
          subText="Please wait while we update your name"
        />
      )}
    </View>
  );
};

export default FullNameEdit;
