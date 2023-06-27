import { ScrollView, View, Text } from 'react-native'
import React from 'react'
import AppBar from '../../components/AppBar'
import UserCard from './components/UserCard'
import AccountDetails from './components/AccountDetails'

const ProfileScreen = ({ navigation }: any) => {
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
      <View className='p-xl h-full w-full justify-start flex-col mx-auto'>
        <UserCard />
        <AccountDetails 
          navigation={navigation}
        />
      </View>
    </ScrollView>
  )
}

export default ProfileScreen