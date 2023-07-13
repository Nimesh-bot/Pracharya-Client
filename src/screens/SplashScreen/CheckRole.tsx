import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import { useUserDetailQuery } from "../../redux/features/profile/profileApi.slice";

const CheckRole = () => {
  const { data, refetch } = useUserDetailQuery();

  const navigation = useNavigation<any>();

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (data?.user.role === "ADMIN") {
        navigation.replace("AdminTab");
      } else {
        navigation.replace("Tab");
      }
    }, 1000);
  }, [data]);

  return (
    <View className="bg-light h-screen w-screen flex-col justify-center items-center">
      <Image
        source={require("../../../assets/logo.png")}
        className="w-[200px] h-[40.47px] object-contain"
      />
      <Text className="text-dark text font-bold mt-2xl">
        Checking your credentials
      </Text>
    </View>
  );
};

export default CheckRole;
