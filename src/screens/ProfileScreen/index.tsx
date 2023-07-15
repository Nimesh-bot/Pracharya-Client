import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";
import AppBar from "../../components/AppBar";
import { useUserDetailQuery } from "../../redux/features/profile/profileApi.slice";
import AccountDetails from "./components/AccountDetails";
import UserCard from "./components/UserCard";

const ProfileScreen = ({ navigation }: any) => {
  const { data, isLoading, isFetching } = useUserDetailQuery();

  useEffect(() => {
    data;
  }, [data]);

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
        <UserCard data={data} />
        <AccountDetails navigation={navigation} data={data} />
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
