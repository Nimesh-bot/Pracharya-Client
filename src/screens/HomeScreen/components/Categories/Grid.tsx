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
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                flexShrink: 0,
            }}
        >
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