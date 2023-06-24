import React from 'react'
import { ScrollView, View, Text, Modal, Pressable } from 'react-native'
import { BlurView } from 'expo-blur'

import AppBar from '../../components/AppBar'
import { RightArrowIcon } from '../../../assets/icons/svg-icons'
import { PlainInputField } from '../../components/InputFields'
import { PrimaryButton } from '../../components/Buttons'

const FullNameEdit = ({ navigation }: any) => {
  return (
    <View className='flex-1 flex-col relative'>
      <AppBar />
      <Modal
        animationType='slide'
        transparent={true}
        visible={true}
      >
        <BlurView 
          className='bg-opacity-60 backdrop-blur-sm w-screen h-screen flex-col justify-end absolute top-0 left-0 z-50'
          tint='light'
          intensity={80}
        >
          <ScrollView
            contentContainerStyle={{
              paddingBottom: 20,
              flex: 1,
              flexDirection: 'column',
            }}
          >
            <View className='w-full flex-1 mt-3xl rounded-t-lg bg-white flex-col p-xl'>
              <Pressable className='flex-row items-center' onPress={() => {
                navigation.navigate('Profile')
              }}>
                  <View className='rotate-180 max-w-fit'>
                    <RightArrowIcon size={24} />
                  </View>
                  <Text className='ml-default text-xl font-bold'>Full Name</Text>
              </Pressable>

              <View className='mt-2xl flex-col'>
                <View>
                  <Text className='text-dark'>First Name</Text>
                  <PlainInputField 
                    placeholder='First Name'
                    additionalCss='mt-default'
                  />
                </View>
                <View className='mt-lg'>
                  <View className='flex-row gap-x-2'>
                    <Text className='text-dark'>Middle Name</Text>
                    <Text className='text-dark italic'>(optional)</Text>
                  </View>
                  <PlainInputField 
                    placeholder='Middle Name'
                    additionalCss='mt-default'
                  />
                </View>
                <View className='mt-lg'>
                  <Text className='text-dark'>Last Name</Text>
                  <PlainInputField 
                    placeholder='Last Name'
                    additionalCss='mt-default'
                  />
                </View>

                <PrimaryButton
                  text='Update'
                  additionalCss='mt-2xl'
                />
              </View>
            </View>
          </ScrollView>
        </BlurView>
      </Modal>
    </View>
  )
}

export default FullNameEdit