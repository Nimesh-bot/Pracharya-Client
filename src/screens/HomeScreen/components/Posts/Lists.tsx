import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import Card from "./Card";

import { useNavigation } from "@react-navigation/native";
import { TextButton } from "../../../../components/Buttons";
import { useGetCategoriesQuery } from "../../../../redux/features/category/categoryApi.slice";
import {
  useGetAllThreadsQuery,
  useGetThreadsByCategoryQuery,
} from "../../../../redux/features/thread/threadApi.slice";

import LoadingIndicator from "../../../../components/LoadingIndicator";
import LoadingScreen from "../../../../screens/SplashScreen/LoadingScreen";

interface ContributorProps {
  avatar: string;
  name?: string;
}
interface ManipulatedThreadProps {
  id: number;
  title: string;
  content: string;
  category: string;
  creators: ContributorProps[];
  createdAt: string;
}
interface ListsProps {
  selected: number;
}

const Lists = ({ selected }: ListsProps) => {
  const { data, isLoading, isFetching } = useGetAllThreadsQuery();
  const { data: threadsByCategory } = useGetThreadsByCategoryQuery(selected);

  const {
    data: categories,
    isLoading: isLoadingCategories,
    isFetching: isFetchingCategories,
  } = useGetCategoriesQuery();

  const [threads, setThreads] = useState<ManipulatedThreadProps[] | any>([]);

  useEffect(() => {
    if (selected !== 0) threadsByCategory;
  }, [selected, threadsByCategory]);

  const [filterLoading, setFilterLoading] = useState<boolean>(false);

  useEffect(() => {
    setFilterLoading(true);
    let arr: any = [];
    switch (selected) {
      case 0:
        arr = data!;
        break;
      default:
        arr = threadsByCategory?.thread;
        break;
    }

    const temp = arr?.map((thread: Threads.ThreadsProps) => {
      return {
        id: thread.id,
        title: thread.title,
        content: thread.content,
        category: categories?.find(
          (category) => category.id === thread.categoryId
        )?.name,
        creators: [
          {
            avatar: thread.creator.avatar,
          },
        ],
        createdAt: thread.createdAt,
      };
    })
    setThreads([
      ...temp
    ]);
    setFilterLoading(false);
    console.log("temp", temp);
  }, [data, selected, threadsByCategory]);

  const navigation = useNavigation<any>();

  const [globalLoading, setGlobalLoading] = useState<boolean>(false);

  useEffect(() => {
    if (globalLoading) {
      setTimeout(() => {
        setGlobalLoading(false);
      }, 2000);
    }
  }, [globalLoading]);

  if (globalLoading) return <LoadingScreen />;

  return (
    <View className="flex-col mt-xl items-center w-full">
      {threads?.map((post: any, index: number) => (
        <Card key={index} post={post} />
      ))}
      {(threads === undefined || threads?.length === 0) && (
        <View className="flex-col mt-2xl items-center">
          <Image
            source={require("../../../../../assets/icons/no_threads.png")}
            className="mix-blend-darken w-40 h-40"
          />
          <Text className="text-dark font-bold text-lg mb-default">
            No information
          </Text>
          <Text className="text-dark text-center">
            Would you mind sharing your valuable information for this
            certification?
          </Text>
          <TextButton
            text="Share your knowledge"
            onPress={() => navigation.navigate("Create")}
            style={{ marginTop: 20 }}
          />
        </View>
      )}
      {
        filterLoading || isLoading || isFetching &&
        <LoadingIndicator 
          text="Filtering..."
          subText="Please wait a moment"
        />
      }
    </View>
  );
};

export default Lists;
