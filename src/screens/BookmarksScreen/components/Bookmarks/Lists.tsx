import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import LoadingIndicator from "../../../../components/LoadingIndicator";
import Card from "./Card";

import { useGetBookmarksQuery } from "../../../../redux/features/bookmarks/bookmarksApi.slice";
import { useGetCategoriesQuery } from "../../../../redux/features/category/categoryApi.slice";

const Lists = () => {
  const {
    data: bookmarkData,
    isLoading,
    isFetching,
    refetch: bookmarksRefetch,
  } = useGetBookmarksQuery();

  const { data: categoriesData } = useGetCategoriesQuery();

  useEffect(() => {
    bookmarksRefetch();
  }, []);

  const [bookmarks, setBookmarks] = useState<any>([]);

  useEffect(() => {
    console.log("bookmarkData", bookmarkData);
    let temp = bookmarkData?.map((bookmark: any) => {
      return {
        bookmarkId: bookmark.id,
        id: bookmark.thread.id,
        title: bookmark.thread.title,
        content: bookmark.thread.content,
        category: categoriesData?.find(
          (each) => each.id === bookmark.thread.categoryId
        )?.name,
        creators: [
          {
            avatar: bookmark?.thread?.creator?.avatar,
          },
        ],
      };
    });
    setBookmarks(temp);
    console.log("temp in useMemo", temp);
  }, [bookmarkData, categoriesData]);

  console.log("bookmarks", bookmarks);
  if (!bookmarks) return null;

  return (
    <>
      <View className="flex-col items-center w-full">
        {bookmarks &&
          bookmarks?.map((bookmark: any, index: number) => (
            <Card key={index} post={bookmark} fullContent={true} />
          ))}
        {bookmarks === undefined ||
          (bookmarks?.length === 0 && (
            <View className="flex-col items-center mt-xl">
              <Text className="text-dark text-lg font-bold">
                You have no bookmarks
              </Text>
              <Text className="text-dark text-sm mt-xl">
                Bookmark your favorite posts to read them later
              </Text>
            </View>
          ))}
      </View>
      {(isLoading || isFetching) && (
        <LoadingIndicator
          text="Please wait a moment"
          subText="Searching for your bookmarks..."
        />
      )}
    </>
  );
};

export default Lists;
