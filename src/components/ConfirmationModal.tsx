import { BlurView } from "expo-blur";
import React from "react";
import { Modal, Text, View } from "react-native";
import { PrimaryButton, TextButton } from "./Buttons";

interface ConfirmationModalProps {
  close: () => void;
  text: string;
  subText: string;
  isDanger: boolean;
  btnText: string;
  handleAction: () => void;
}

const ConfirmationModal = ({
  close,
  text,
  subText,
  btnText,
  isDanger,
  handleAction,
}: ConfirmationModalProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={() => {
        close();
      }}
    >
      <BlurView
        intensity={100}
        tint="dark"
        className="h-full w-full flex items-center justify-center"
      >
        <View className="bg-white rounded-default w-4/5">
          <View className="p-lg border-b border-b-border flex-row justify-between items-center">
            <Text className="text-2xl font-bold">{text}</Text>
          </View>
          <View className="p-lg">
            <Text className="text-dark opacity-80">{subText}</Text>
          </View>
          <View className="mt-sm flex-row p-lg">
            <View className="w-1/2">
              <PrimaryButton
                text={btnText}
                onPress={handleAction}
                additionalCss={`${isDanger ? "bg-red" : ""}`}
              />
            </View>
            <View className="w-1/2">
              <TextButton text="Cancel" onPress={close} additionalCss="ml-md" />
            </View>
          </View>
        </View>
      </BlurView>
    </Modal>
  );
};

export default ConfirmationModal;
