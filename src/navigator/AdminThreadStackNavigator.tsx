import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import _AdminThreadList from '../screens/_Admin/_ThreadScreens/ThreadList';
import _AdminThreadDetail from '../screens/_Admin/_ThreadScreens/ThreadDetail';

const _AdminThreadStackNavigator = () => {
    const AdminThreadStack = createNativeStackNavigator();

    return (
        <AdminThreadStack.Navigator initialRouteName='ThreadList' screenOptions={{
            headerShown: false
        }}>
            <AdminThreadStack.Screen name="ThreadList" component={_AdminThreadList} />
            <AdminThreadStack.Screen name="CreateForm" component={_AdminThreadDetail} />
        </AdminThreadStack.Navigator>
    )
}

export default _AdminThreadStackNavigator