import React, { useCallback, useEffect, useState } from "react";
import { ScrollView, View, RefreshControl } from "react-native";

import { usePostDetailContext } from "../../context/PostDetailContextProvider";

import AppBar from "../../components/AppBar";
import Grid from "./components/Categories/Grid";
import DetailPopup from "./components/Detail/DetailPopup";
import Lists from "./components/Posts/Lists";

import { useGetAllThreadsQuery } from '../../redux/features/thread/threadApi.slice'

const HomeScreen = () => {
  const { isVisible } = usePostDetailContext();
  const [selected, setSelected] = useState(0);

  const { refetch, isLoading, isFetching } = useGetAllThreadsQuery();

  const onRefresh = useCallback(() => {
    refetch();
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        flexDirection: "column",
      }}
      refreshControl={<RefreshControl refreshing={isFetching || isLoading} onRefresh={onRefresh} />}
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
