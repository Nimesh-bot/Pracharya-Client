import { View, Text } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Rules from '../screens/CreateScreen/Rules';
import CreateForm from '../screens/CreateScreen/CreateForm';

const CreateThreadStackNavigator = () => {
    const CreateThreadStack = createNativeStackNavigator();

    return (
        <CreateThreadStack.Navigator initialRouteName='Rules' screenOptions={{
            headerShown: false
        }}>
            <CreateThreadStack.Screen name="Rules" component={Rules} />
            <CreateThreadStack.Screen name="CreateForm" component={CreateForm} />
        </CreateThreadStack.Navigator>
    )
}

export default CreateThreadStackNavigator