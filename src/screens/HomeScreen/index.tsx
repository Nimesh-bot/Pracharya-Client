import React, { useState } from "react";
import { ScrollView, View } from "react-native";

import { usePostDetailContext } from "../../context/PostDetailContextProvider";

import AppBar from "../../components/AppBar";
import Grid from "./components/Categories/Grid";
import DetailPopup from "./components/Detail/DetailPopup";
import Lists from "./components/Posts/Lists";

const HomeScreen = () => {
  const { isVisible } = usePostDetailContext();
  const [selected, setSelected] = useState(0);

  return (
    <ScrollView
      contentContainerStyle={{
        flexDirection: "column",
      }}
    >
      <AppBar />
      <View className="p-xl w-full justify-start flex-col mx-auto">
        {/* categories grid */}
        <Grid selected={selected} setSelected={setSelected} />

        {/* threads list */}
        <Lists selected={selected} />
      </View>
      {isVisible && <DetailPopup />}
    </ScrollView>
  );
};

export default HomeScreen;
