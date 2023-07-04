import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import tailwindConfig from "../../tailwind.config";
import _AdminHomeScreen from "../screens/_Admin/_HomeScreen";
import _AdminThreadStackNavigator from "./AdminThreadStackNavigator";
import AdminTabNavigationIcons from "../../assets/icons/adminTabNavigationIcons";

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
          return <AdminTabNavigationIcons name={route.name} size={24} active={focused} />
        },
      })}
    >
        <Tab.Screen name="AdminHome" component={_AdminHomeScreen} />
        <Tab.Screen name="AdminThread" component={_AdminThreadStackNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
