import React, { useState } from 'react'
import { ScrollView, View, Text, Modal, Pressable } from 'react-native'
import { BlurView } from 'expo-blur'

import AppBar from '../../components/AppBar'
import { RightArrowIcon } from '../../../assets/icons/svg-icons'
import { PlainInputField } from '../../components/InputFields'
import { PrimaryButton } from '../../components/Buttons'
import OPTVerification from '../AuthScreen/components/OPTVerification'

const EmailEdit = ({ navigation }: any) => {
  const [step, setStep] = useState(0)
  
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
              flexDirection: 'column',
              flex: 1,
            }}
          >
            <View className='w-full flex-1 mt-3xl rounded-t-lg bg-white flex-col p-xl'>
              <Pressable className='flex-row items-center' onPress={() => {
                navigation.navigate('Profile')
              }}>
                  <View className='rotate-180 max-w-fit'>
                    <RightArrowIcon size={24} />
                  </View>
                  <Text className='ml-default text-xl font-bold'>Email</Text>
              </Pressable>

              {
                step === 0 ?
                <View className='mt-2xl flex-col'>
                  <View>
                    <Text className='text-dark'>Email Address</Text>
                    <PlainInputField 
                      placeholder='Email'
                      additionalCss='mt-default'
                      keyboardType='email-address'
                    />
                  </View>

                  <PrimaryButton
                    text='Next'
                    additionalCss='mt-2xl'
                    onPress={() => setStep(1)}
                  />
                </View>
                :
                <View className='mt-2xl'>
                  <OPTVerification 
                    phone={'example@gmail.com'} 
                    additionalCss='bg-light'
                  />
                </View>
              }
            </View>
          </ScrollView>
        </BlurView>
      </Modal>
    </View>
  )
}

export default EmailEdit