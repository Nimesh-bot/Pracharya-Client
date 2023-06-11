import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import tailwindConfig from "../../tailwind.config";
import SearchScreen from "../screens/SearchScreen";
import CreateScreen from "../screens/CreateScreen";
import BookmarksScreen from "../screens/BookmarksScreen";
import ProfileScreen from "../screens/ProfileScreen";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Create" component={CreateScreen} />
        <Tab.Screen name="Bookmarks" component={BookmarksScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
