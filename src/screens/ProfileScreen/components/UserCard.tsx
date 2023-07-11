import React from "react";
import { Image, Text, View } from "react-native";

const UserCard = ({ data }: any) => {
  return (
    <View className="p-xl rounded-md bg-blue">
      <View className="flex-row">
        <Image
          source={{
            uri: "https://i.pinimg.com/236x/dc/d6/a2/dcd6a208327bf5db5e6445b81832c385.jpg",
          }}
          className="w-12 h-12 rounded-full"
        />
        <View className="flex-col ml-default">
          <Text className="text-white text-lg font-bold">
            {data.firstname} {data.middlename} {data.lastname}
          </Text>
          <Text className="text-white text-sm font-light">
            {data.user.email}
          </Text>
        </View>
      </View>
      <View className="mt-2xl flex-row justify-around">
        <View className="flex-col items-center">
          <Text className="text-white text-xl font-bold">
            {data._count.author}
          </Text>
          <Text className="text-white font-light">Threads</Text>
        </View>
        <View className="flex-col items-center">
          <Text className="text-white text-xl font-bold">
            {data._count.author}
          </Text>
          <Text className="text-white font-light">Contributions</Text>
        </View>
      </View>
    </View>
  );
};

export default UserCard;
