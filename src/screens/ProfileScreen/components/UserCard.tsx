import { View, Text, Image } from 'react-native'
import React from 'react'

const UserCard = () => {
  return (
    <View className='p-xl rounded-md bg-blue'>
        <View className='flex-row'>
            <Image
                source={{
                    uri: 'https://i.pinimg.com/236x/dc/d6/a2/dcd6a208327bf5db5e6445b81832c385.jpg',
                }}
                className='w-8 h-8 rounded-full'
            />
            <View className='flex-col ml-default'>
                <Text className='text-white font-bold'>John Doe</Text>
                <Text className='text-white text-sm font-light'>john.doe.1911@gmail.com</Text>
            </View>
        </View>
        <View className='mt-2xl flex-row justify-around'>
            <View className='flex-col items-center'>
                <Text className='text-white font-bold'>0</Text>
                <Text className='text-white font-light'>Threads</Text>
            </View>
            <View className='flex-col items-center'>
                <Text className='text-white font-bold'>0</Text>
                <Text className='text-white font-light'>Contributions</Text>
            </View>
        </View>
    </View>
  )
}

export default UserCard