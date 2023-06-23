import { ScrollView, View, Text } from 'react-native'
import React from 'react'
import AppBar from '../../components/AppBar'
import UserCard from './components/UserCard'

const ProfileScreen = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexDirection: 'column',
        flex: 1,
        width: '100%',
        position: 'relative',
      }}
    >
      <AppBar />
      <View className='p-xl w-full justify-start flex-col mx-auto'>
        <UserCard />
      </View>
    </ScrollView>
  )
}

export default ProfileScreen