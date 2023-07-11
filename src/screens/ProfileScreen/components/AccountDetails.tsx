import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

import {
  AvatarIcon,
  EmailIcon,
  LinearRightIcon,
  UserTagIcon,
} from "../../../../assets/icons/svg-icons";
import tailwindConfig from "../../../../tailwind.config";

const AccountDetails = ({ navigation, data }: any) => {
  const defaultColor: string = (tailwindConfig.theme as any).colors.dark;

  return (
    <ScrollView
      contentContainerStyle={{
        flexDirection: "column",
        flex: 1,
        width: "100%",
      }}
    >
      <Text className="font-bold text-xl text-dark mt-2xl">
        Account Details
      </Text>
      <View className="flex-col mt-xl">
        <View className="flex-row justify-between items-center">
          <View className="flex-row gap-x-4 items-center">
            <UserTagIcon size={32} color={defaultColor} />
            <Text className="text-dark opacity-80">Full Name</Text>
          </View>
          <View className="flex-row gap-x-4 items-center">
            <Text className="text-blue font-medium">
              {data.firstname} {data.middlename} {data.lastname}
            </Text>
            <Pressable
              className="p-sm bg-white rounded-sm"
              onPress={() => navigation.navigate("NameEdit")}
            >
              <LinearRightIcon size={18} color={defaultColor} />
            </Pressable>
          </View>
        </View>

        <View className="flex-row justify-between items-center mt-default">
          <View className="flex-row gap-x-4 items-center">
            <EmailIcon size={32} color={defaultColor} />
            <Text className="text-dark opacity-80">Email</Text>
          </View>
          <View className="flex-row gap-x-4 items-center">
            <Text className="text-blue font-medium">{data.user.email}</Text>
            <Pressable
              className="p-sm bg-white rounded-sm"
              onPress={() => navigation.navigate("EmailEdit")}
            >
              <LinearRightIcon size={18} color={defaultColor} />
            </Pressable>
          </View>
        </View>

        <View className="flex-row justify-between items-center mt-default">
          <View className="flex-row gap-x-4 items-center">
            <AvatarIcon size={32} color={defaultColor} />
            <Text className="text-dark opacity-80">Avatar</Text>
          </View>
          <View className="flex-row gap-x-4 items-center">
            {/* <Text className='text-blue font-medium'>jose.stanly@gmail.com</Text> */}
            <Pressable
              className="p-sm bg-white rounded-sm"
              onPress={() => navigation.navigate("AvatarEdit")}
            >
              <LinearRightIcon size={18} color={defaultColor} />
            </Pressable>
          </View>
        </View>
      </View>

      {/* <View className='flex-col mt-2xl'>
                <Text className='font-bold text-xl text-dark'>Security</Text>
            </View> */}
    </ScrollView>
  );
};

export default AccountDetails;
