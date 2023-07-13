import React from "react";
import { Image, Modal, View } from "react-native";

const LoadingScreen = () => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={true}
      onRequestClose={() => {}}
    >
      <View className="bg-light h-screen w-screen flex-col justify-center items-center">
        <Image
          source={require("../../../assets/logo.png")}
          className="w-[200px] h-[40.47px]"
        />
      </View>
    </Modal>
  );
};

export default LoadingScreen;
