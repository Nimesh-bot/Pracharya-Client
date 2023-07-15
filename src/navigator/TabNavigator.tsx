import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TabNavigationIcons from "../../assets/icons/tabNavigation-icons";
import tailwindConfig from "../../tailwind.config";

import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import BookmarksScreen from "../screens/BookmarksScreen";
import ProfileStackNavigator from "./ProfileStackNavigator";
import CreateThreadStackNavigator from "./CreateThreadStackNavigator";
import Login from "../screens/AuthScreen/Login";

import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { useNavigation } from "@react-navigation/native";
import { Pressable, Text } from "react-native";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation<any>()

  const { isLoggedIn } = useAppSelector((state: RootState) => state.auth)

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: (tailwindConfig as any).theme.colors.white,
          height: 60,
          borderTopWidth: 0,
          elevation: 0,
          borderTopColor: (tailwindConfig as any).theme.colors.text,
          borderColor: 'transparent',
          borderStyle: 'solid',
        },
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          return <TabNavigationIcons name={route.name} size={24} active={focused} />
        },
      })}
    >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Create" component={CreateThreadStackNavigator} />
        {
          isLoggedIn &&
          <Tab.Screen name="Bookmarks" component={BookmarksScreen} />
        }
        {
          !isLoggedIn ?
          <Tab.Screen name="Login" component={Login} options={{ tabBarStyle: 
            {
              display: 'none',
              height: 0,
              width: 0,
            }
          }} />
          :
          <Tab.Screen name="ProfileStack" component={ProfileStackNavigator} />
        }
    </Tab.Navigator>
  );
};

export default TabNavigator;
