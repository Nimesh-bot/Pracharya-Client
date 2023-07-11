import React from "react";
import { ScrollView, View } from "react-native";

import { usePostDetailContext } from "../../context/PostDetailContextProvider";

import AppBar from "../../components/AppBar";
import Grid from "./components/Categories/Grid";
import DetailPopup from "./components/Detail/DetailPopup";
import Lists from "./components/Posts/Lists";

const HomeScreen = () => {
  const { isVisible } = usePostDetailContext();

  return (
    <ScrollView
      contentContainerStyle={{
        flexDirection: "column",
        flex: 1,
        width: "100%",
        position: "relative",
      }}
    >
      <AppBar />
      <View className="p-xl w-full justify-start flex-col mx-auto">
        <Grid />
        <Lists />
      </View>
      {isVisible && <DetailPopup />}
    </ScrollView>
  );
};

export default HomeScreen;
