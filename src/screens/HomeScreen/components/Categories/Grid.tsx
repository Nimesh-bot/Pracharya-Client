import { ScrollView } from 'react-native'
import React from 'react'
import { categoryLists } from '../../../../libs/constants'

import Card from './Card'

const Grid = () => {
    const [selected, setSelected] = React.useState(1)

    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                flexDirection: 'row',
                gap: 20,
                alignItems: 'center',
            }}
        >
            {
                categoryLists.map((category, index) => (
                    <Card
                        key={index}
                        icon={category.iconName}
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