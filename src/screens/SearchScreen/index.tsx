import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";

import AppBar from "../../components/AppBar";
import { IconButton, TextButton } from "../../components/Buttons";
import { PlainInputField } from "../../components/InputFields";

import { useGetCategoriesQuery } from "../../redux/features/category/categoryApi.slice";
import { useGetAllThreadsQuery } from "../../redux/features/thread/threadApi.slice";

import { Toast } from "react-native-toast-message/lib/src/Toast";
import { SearchIcon } from "../../../assets/icons/svg-icons";
import tailwindConfig from "../../../tailwind.config";
import Card from "../HomeScreen/components/Posts/Card";

const SearchScreen = () => {
  const whiteColor = (tailwindConfig.theme as any).colors.white;
  const primaryColor = (tailwindConfig.theme as any).colors.blue;
  const [dropdown, setDropdown] = useState(false);

  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState<any>([]);
  const [firstLoad, setFirstLoad] = useState(true);

  const navigation = useNavigation<any>();

  useEffect(() => {
    setFirstLoad(true);
  }, []);

  const { data: threads, isLoading, isFetching } = useGetAllThreadsQuery();
  const { data: categories } = useGetCategoriesQuery();

  const handleSearchResult = () => {
    if (searchText.length === 0) {
      setSearchResult([]);
      setFirstLoad(true);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Please enter something to search",
        visibilityTime: 1000,
        autoHide: true,
      });
    } else {
      setFirstLoad(false);
      console.log("in else");
      console.log(
        "check",
        threads?.some(
          (each: any) =>
            each?.title?.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
        )
      );
      const temp = threads?.filter(
        (each: any) =>
          each?.title?.toLowerCase().includes(searchText.toLowerCase()) ||
          each?.content?.toLowerCase().includes(searchText.toLowerCase())
      );
      console.log("--------------------------------------------");
      console.log("search result: ", temp);
      console.log("--------------------------------------------");
      const modified = temp?.map((each: any) => {
        return {
          id: each?.id,
          title: each?.title,
          content: each?.content,
          category: categories?.find(
            (category: any) => category?.id === each?.categoryId
          )?.name,
          creators: [
            {
              avatar: each?.creator?.avatar,
            },
          ],
        };
      });
      console.log("modified: ", modified);
      setSearchResult(modified);
    }
  };

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
      <View className="p-xl h-full w-full justify-start flex-col mx-auto">
        <View className="flex-row items-center">
          <PlainInputField
            placeholder="Search"
            value={searchText}
            additionalCss="flex-1"
            onChange={(e) => {
              setSearchText(e.nativeEvent.text);
            }}
          />
          <IconButton
            icon={<SearchIcon size={21} color={whiteColor} />}
            onPress={handleSearchResult}
            additionalCss="bg-primary ml-default px-xl"
          />
        </View>

        <View className="mt-xl flex-col items-center">
          {firstLoad ? (
            <View className="flex-col mt-2xl items-center">
              <Image
                source={require("../../../assets/icons/search_something.png")}
                className="w-40 h-40"
              />
              <Text className="text-dark mb-default">
                Search something to get started
              </Text>
              <Text className="text-blue italic text-center">
                Example keywords: License, Insurance, Bank Account, DEMAT, etc.
              </Text>
            </View>
          ) : isLoading || isFetching ? (
            <View className="mt-2xl flex-col">
              <ActivityIndicator color={primaryColor} size="large" />
            </View>
          ) : searchResult === undefined || searchResult?.length === 0 ? (
            <View className="flex-col mt-2xl items-center">
              <Image
                source={require("../../../assets/icons/no_threads.png")}
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
          ) : (
            <Card post={searchResult} fullContent={true} />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default SearchScreen;
