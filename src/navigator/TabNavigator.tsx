import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TabNavigationIcons from "../../assets/icons/tabNavigation-icons";
import tailwindConfig from "../../tailwind.config";

import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import CreateScreen from "../screens/CreateScreen";
import BookmarksScreen from "../screens/BookmarksScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { BlurView } from "expo-blur";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

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
        <Tab.Screen name="Create" component={CreateScreen} />
        <Tab.Screen name="Bookmarks" component={BookmarksScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
