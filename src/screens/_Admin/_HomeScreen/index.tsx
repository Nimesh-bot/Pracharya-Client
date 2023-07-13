import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { useGetCategoriesQuery } from "../../../redux/features/category/categoryApi.slice";
import { useGetUnverifiedThreadsQuery } from "../../../redux/features/thread/threadApi.slice";

import AdminAppBar from "../../../components/AdminAppBar";
import LoadingScreen from "../../SplashScreen/LoadingScreen";
import UnverifiedCard from "./components/UnverifiedCard";

const _AdminHomeScreen = () => {
  const { data, isLoading, isFetching } = useGetUnverifiedThreadsQuery();
  const { data: categories } = useGetCategoriesQuery();

  const [threads, setThreads] = useState<any>([]);

  console.log("unverified", data);

  useEffect(() => {
    if (data !== undefined) {
      const temp = data?.map((each: any) => {
        return {
          id: each.id,
          title: each.title,
          content: each.content,
          category: categories?.find(
            (category) => category.id === each.categoryId
          )?.name,
          creators: [
            {
              avatar: each.creator.avatar,
              name: each.creator.firstname + " " + each.creator.lastname,
            },
          ],
        };
      });

      setThreads(temp);
    }
  }, [data]);

  if (isLoading || isFetching) return <LoadingScreen />;

  return (
    <ScrollView
      contentContainerStyle={{
        flexDirection: "column",
      }}
    >
      <AdminAppBar />
      <View className="mt-default flex-col px-xl">
        <Text className="text-xl font-bold">Welcome</Text>
        <Text className="text-dark">
          Here, view available threads and verify them
        </Text>

        <View className="flex-col mt-2xl">
          {!data || data.length === 0 ? (
            <View className="flex-col justify-center items-center">
              <Image
                source={require("../../../../assets/icons/no_threads.png")}
                className="mix-blend-darken w-40 h-40"
              />
              <Text className="text-dark font-bold text-lg mb-default">
                No Threads
              </Text>
              <Text className="text-dark text-center">
                Wait till helpful volunteers add threads
              </Text>
            </View>
          ) : (
            threads?.map((each: any) => (
              <UnverifiedCard key={each.id} post={each} />
            ))
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default _AdminHomeScreen;
