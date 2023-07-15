import { View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import AdminAppBar from '../../../components/AdminAppBar'

const _AdminThreadList = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexDirection: 'column',
        flex: 1,
        width: '100%',
        position: 'relative',
      }}
    >
      <AdminAppBar />
    </ScrollView>
  )
}

export default _AdminThreadList