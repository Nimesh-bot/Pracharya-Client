import React from "react";
import { ScrollView, View } from "react-native";
import AppBar from "../../components/AppBar";
import AccountDetails from "./components/AccountDetails";
import UserCard from "./components/UserCard";

import { useUserDetailQuery } from "../../redux/features/profile/profileApi.slice";

const ProfileScreen = ({ navigation }: any) => {
  const { data, isLoading, isFetching } = useUserDetailQuery();

  console.log("profile", data);

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
        <UserCard />
        <AccountDetails navigation={navigation} />
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
