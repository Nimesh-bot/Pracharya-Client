import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import AppBar from '../../components/AppBar'
import CategorySelector from './components/CategorySelector'
import ContentEditor from './components/ContentEditor'

const CreateForm = () => {
  const [step, setStep] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState('' as string)
  const [content, setContent] = useState('' as any)

  const handleNext = () => {
    setStep(step + 1)
  }
  const handlePrev = () => {
    setStep(step - 1)
  }
  const handleSubmit = () => {

  }

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
        <Text className='text-sm'>Step {step} of 2</Text>
        <View className='mt-default'>
          {
            step === 1 ?
            <CategorySelector 
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              handleNext={handleNext}
            />
            :
            <ContentEditor 
              content={content}
              setContent={setContent}
              handlePrev={handlePrev}
              handleSubmit={handleSubmit}
            />
          }
        </View>
      </View>
    </ScrollView>
  )
}

export default CreateForm