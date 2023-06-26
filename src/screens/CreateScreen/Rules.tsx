import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'

import AppBar from '../../components/AppBar'

import { InfoIcon } from '../../../assets/icons/svg-icons'
import tailwindConfig from '../../../tailwind.config'
import { PrimaryButton } from '../../components/Buttons'

const Rules = ({ navigation }: any) => {
  const primaryColor = (tailwindConfig.theme as any).colors.blue

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
        <View>
          <Text className='text-dark text-2xl font-bold'>Create a Thread</Text>
          <Text className='text-dark mt-xs'>Help others with the information you have</Text>
        </View>

        <View className='rounded-default bg-white p-lg mt-2xl'>
          <View className='flex-row items-center'>
            <InfoIcon size={24} color={primaryColor} />
            <Text className='text-dark ml-default font-bold text-xl'>Rules to follow</Text>
          </View>

          <View className='mt-default'>
            <FlatList
              data={[
                "Your thread will be checked and verified by admins",
                "Each category can only hold one thread",
                "If the thread you posted already has an exisiting thread, your info will be updated and you will be contributor (only if there is update in information)",
                "Incorrect information shall be warned and if continued for 3 times, you will be punished with ban"
              ]}
              renderItem={({ item }) => (
                <View className='flex-row items-center mt-default'>
                  <View className='w-3 h-3 rounded-full bg-white border border-blue mr-default' />
                  <Text className='text-dark'>{item}</Text>
                </View>
              )}
              keyExtractor={item => item}
            />
          </View>
        </View>
        <PrimaryButton
          text='I understand'
          className='mt-2xl'
          onPress={() => {
            navigation.navigate('CreateForm')
          }}
        />
      </View>
    </ScrollView>
  )
}

export default Rules