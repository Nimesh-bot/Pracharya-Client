import React, { useEffect, useState } from 'react'
import { ScrollView, View, Text, Modal, Pressable, TouchableOpacity, Image } from 'react-native'
import { BlurView } from 'expo-blur'

import AppBar from '../../components/AppBar'
import { PlainInputField } from '../../components/InputFields'
import { TextButton } from '../../components/Buttons'

import { CameraIcon, RightArrowIcon } from '../../../assets/icons/svg-icons'
import tailwindConfig from '../../../tailwind.config'
import { defaultAvatars } from '../../libs/constants'

const AvatarEdit = ({ navigation }: any) => {
  const primaryColor: string = (tailwindConfig.theme as any).colors.blue

  const [userAvatar, setUserAvatar] = useState('https://i.pinimg.com/236x/63/86/b3/6386b3140396509d4f371c9d415a7d04.jpg' as string)
  const [currAvatar, setCurrAvatar] = useState('https://i.pinimg.com/236x/63/86/b3/6386b3140396509d4f371c9d415a7d04.jpg' as string)
  const [detectChange, setDetectChange] = useState(false)

  useEffect(() => {
    if(userAvatar !== currAvatar) {
      setDetectChange(true)
    }
  }, [currAvatar])

  const handleChangeAvatar = () => {
    setCurrAvatar(currAvatar)
    setDetectChange(false)
  }

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
                  <Text className='ml-default text-xl font-bold'>Avatar</Text>
              </Pressable>

              <View className='mt-2xl flex-col'>
                <View>
                  <Text className='text-xl font-bold text-dark'>
                    Identify Yourself
                  </Text>
                  <Text className='text-dark mt-xs opacity-80'>
                    Choose the best way to portray yourself to the world.
                  </Text>
                </View>

                <View className='flex-row mt-2xl items-end'>
                  <View className='relative'>
                    <Image 
                      source={{
                        uri: currAvatar,
                      }}
                      className='w-28 h-28 rounded-full'
                    />
                    <View className='absolute bottom-0 -right-1 p-sm bg-light rounded-full'>
                      <CameraIcon size={21} color={primaryColor}/>
                    </View>
                  </View>
                  {
                    detectChange && (
                      <View className='ml-lg flex-1'>
                        <Text className='text-dark'>
                          We have detected change in your avatar. Please confirm the change.
                        </Text>
                        <TouchableOpacity onPress={handleChangeAvatar} className='mt-default py-default'>
                          <Text className='font-medium text-blue'>Confirm</Text>
                        </TouchableOpacity>
                      </View>
                    )
                  }
                </View>

                {/* Avatar List */}
                <View className='mt-2xl'>
                  <Text className='text-xl font-bold text-dark'>Choose Default Avatars</Text>
                  <View className='mt-lg flex-row flex-wrap'>
                    {
                      defaultAvatars.map((avatar, index) => (
                        <TouchableOpacity
                          key={index} 
                          onPress={() => setCurrAvatar(avatar)} 
                          className={`w-20 h-20 rounded-full overflow-hidden mr-default mt-default mb-default ${currAvatar === avatar && 'opacity-60'}}`}
                        >
                          <Image 
                            source={
                              avatar
                            }
                            className='w-full h-full'
                          />
                        </TouchableOpacity>
                      ))
                    }
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </BlurView>
      </Modal>
    </View>
  )
}

export default AvatarEdit