import { View, Text } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import TabNavigator from './TabNavigator';
import Login from '../screens/AuthScreen/Login';
import Register from '../screens/AuthScreen/Register';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName='Tab' screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Tab" component={TabNavigator} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    )
}

export default StackNavigator