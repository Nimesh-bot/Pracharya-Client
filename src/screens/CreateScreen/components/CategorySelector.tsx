import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { categoryLists } from '../../../libs/constants'
import { PrimaryButton } from '../../../components/Buttons'

interface CategorySelectorProps {
    selectedCategory: string
    setSelectedCategory: (category: string) => void
    handleNext: () => void
}

const CategorySelector = ({ selectedCategory, setSelectedCategory, handleNext }: CategorySelectorProps) => {
    return (
        <View>
            <View>
                <Text className='text-dark text-2xl font-bold'>Choose a Category</Text>
                <Text className='text-dark mt-xs'>We need to know the of a category you want to contribute on to prevent duplication.</Text>
            </View>

            <View className='mt-2xl flex-row flex-wrap'> 
                {
                    categoryLists.map((category, index) => (
                        <TouchableOpacity 
                            key={index}
                            className={`p-default rounded-sm mr-default mb-default ${
                                selectedCategory === category.id ? 'bg-blue' : 'bg-white'
                            }`}
                            onPress={() => {
                                setSelectedCategory(category.id)
                            }}
                        >
                            <Text 
                                className={`text-dark font-medium ${
                                    selectedCategory === category.id ? 'text-white' : 'text-dark'
                                }`}
                            >{category.name}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </View>

            <PrimaryButton
                text='Next'
                className='mt-2xl'
                onPress={handleNext}
            />
        </View>
    )
}

export default CategorySelector