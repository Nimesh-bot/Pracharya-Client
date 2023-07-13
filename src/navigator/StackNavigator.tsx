import React, { useEffect } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { useUserDetailQuery } from "../redux/features/profile/profileApi.slice";
import Login from "../screens/AuthScreen/Login";
import Register from "../screens/AuthScreen/Register";
import CheckRole from "../screens/SplashScreen/CheckRole";
import AdminTabNavigator from "./AdminTabNavigator";
import TabNavigator from "./TabNavigator";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation<any>();

  const { data: profile } = useUserDetailQuery();
  const { isLoggedIn } = useSelector((state: any) => state.auth);

  useEffect(() => {
    console.log("isLoggedIn", isLoggedIn);
    console.log("profile", profile);
    if (isLoggedIn) {
      if (profile?.user?.role === "ADMIN") {
        navigation.navigate("AdminTab");
      }
    }
  }, [profile]);

  return (
    <Stack.Navigator
      initialRouteName="Tab"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Tab" component={TabNavigator} />
      <Stack.Screen name="AdminTab" component={AdminTabNavigator} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="CheckRole" component={CheckRole} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
