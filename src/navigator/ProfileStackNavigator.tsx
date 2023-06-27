import { View, Text } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfileScreen from '../screens/ProfileScreen';
import FullNameEdit from '../screens/ProfileScreen/FullNameEdit';
import EmailEdit from '../screens/ProfileScreen/EmailEdit';
import AvatarEdit from '../screens/ProfileScreen/AvatarEdit';

const ProfileStackNavigator = () => {
    const ProfileStack = createNativeStackNavigator();

    return (
        <ProfileStack.Navigator initialRouteName='Profile' screenOptions={{
            headerShown: false
        }}>
            <ProfileStack.Screen name="Profile" component={ProfileScreen} />
            <ProfileStack.Screen name="NameEdit" component={FullNameEdit} />
            <ProfileStack.Screen name="EmailEdit" component={EmailEdit} />
            <ProfileStack.Screen name="AvatarEdit" component={AvatarEdit} />
        </ProfileStack.Navigator>
    )
}

export default ProfileStackNavigator