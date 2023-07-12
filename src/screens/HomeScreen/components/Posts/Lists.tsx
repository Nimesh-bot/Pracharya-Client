import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Card from "./Card";

import { useGetCategoriesQuery } from "../../../../redux/features/category/categoryApi.slice";
import {
  useGetAllThreadsQuery,
  useGetThreadsByCategoryQuery,
} from "../../../../redux/features/thread/threadApi.slice";
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

  useEffect(() => {
    let arr: any = [];
    switch (selected) {
      case 0:
        arr = data!;
        break;
      default:
        arr = threadsByCategory.thread;
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
    });
    setThreads(temp);
  }, [data, selected, threadsByCategory]);

  if (isLoading || isLoadingCategories || isFetching || isFetchingCategories)
    return <LoadingScreen />;

  return (
    <View className="flex-col mt-xl items-center w-full">
      {threads?.map((post: any, index: number) => (
        <Card key={index} post={post} />
      ))}
    </View>
  );
};

export default Lists;
