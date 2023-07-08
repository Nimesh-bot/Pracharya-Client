import { ScrollView, View } from 'react-native'
import React from 'react'
import { categoryLists } from '../../../../libs/constants'

import Card from './Card'
import { useGetCategoriesQuery } from '../../../../redux/features/category/categoryApi.slice'

const Grid = () => {
    const [selected, setSelected] = React.useState(1)
    const { data: categories } = useGetCategoriesQuery();

    console.log('categories', categories);

    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                flexShrink: 0,
            }}
        >
            <Card
                icon={'menu'}
                title={'All'}
                active={selected === 1}
                onPress={() => setSelected(1)}
                additionalCss={'ml-0'}
            />
            {
                categoryLists.map((category, index) => (
                    <Card
                        key={index}
                        icon={category.iconName}
                        index={index}
                        title={category.name}
                        active={selected === category.id}
                        onPress={() => setSelected(category.id)}
                    />
                ))
            }
        </ScrollView>
    )
}

export default Grid