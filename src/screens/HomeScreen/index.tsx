import { View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import AppBar from '../../components/AppBar'
import Grid from './components/Categories/Grid'
import Lists from './components/Posts/Lists'
import DetailPopup from './components/Detail/DetailPopup'

const HomeScreen = () => {
  const [showDetail, setShowDetail] = useState(false)
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
      <View className='p-xl w-1 justify-start flex-col mx-auto'>
        <Grid />
        {/* <Lists /> */}
      </View>
      {
        showDetail && <DetailPopup />
      }
    </ScrollView>
  )
}

export default HomeScreen