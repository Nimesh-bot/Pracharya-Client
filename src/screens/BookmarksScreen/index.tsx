import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Tabs from './components/Tabs'
import AppBar from '../../components/AppBar'
import Lists from './components/Bookmarks/Lists'

const BookmarksScreen = () => {
  const [isBookmark, setIsBookmark] = useState(true)

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
      <View className='flex-col p-xl'>
        <Tabs 
          isBookmark={isBookmark}
          setIsBookmark={setIsBookmark}
        />
        {
          isBookmark ? (
            <Lists />
          )
          :
          <></>
        }
      </View>
    </ScrollView>
  )
}

export default BookmarksScreen