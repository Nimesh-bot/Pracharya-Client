import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'

import AppBar from '../../components/AppBar'
import { SearchField } from '../../components/InputFields'
import { IconButton } from '../../components/Buttons'

import { SearchIcon } from '../../../assets/icons/svg-icons'
import tailwindConfig from '../../../tailwind.config'

const SearchScreen = () => {
  const whiteColor = (tailwindConfig.theme as any).colors.white
  const [dropdown, setDropdown] = useState(false)

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
        <View className='flex-row items-center'>
          <SearchField 
            placeholder='Search'
            dropdown={dropdown}
            setDropdown={setDropdown}
          />
          <IconButton
            icon={<SearchIcon size={21} color={whiteColor} />}
            additionalCss='bg-primary ml-default px-xl'
          />

        </View>
      </View>
    </ScrollView>
  )
}

export default SearchScreen