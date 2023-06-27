import { View, Text, Platform, SafeAreaView, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { createRef, useRef } from 'react'
import { actions, RichEditor, RichToolbar } from 'react-native-pell-rich-editor';

import tailwindConfig from '../../../../tailwind.config';
import { PrimaryButton, TextButton } from '../../../components/Buttons';

interface ContentEditorProps {
    content: string
    setContent: (content: string) => void
    handleSubmit: () => void
    handlePrev: () => void
}

const ContentEditor = ({ content, setContent, handleSubmit, handlePrev }: ContentEditorProps) => {
    const primaryColor = (tailwindConfig.theme as any).colors.blue
    const richText = React.useRef<any>();

    return (
        <SafeAreaView>
            <View className='mb-2xl'>
                <Text className='text-dark text-2xl font-bold'>Fill your contents</Text>
                <Text className='text-dark mt-xs'>
                    Explain in detail and understandable pattern the appropriate way to apply for the certification
                </Text>
            </View>
            <RichToolbar
                editor={richText}
                actions={[ 
                    actions.setBold, 
                    actions.setItalic, 
                    actions.setUnderline, 
                    actions.heading1,
                    actions.heading2,
                    actions.insertBulletsList,
                    actions.insertOrderedList,
                    actions.insertLink,
                ]}
                iconMap={{ 
                    [actions.heading1]: () => <Text className='text-xl text-dark'>H1</Text>,
                    [actions.heading2]: () => <Text className='text-lg text-dark'>H2</Text>,
                }}
                selectedIconTint={primaryColor}
                selectedButtonStyle={{ backgroundColor: primaryColor }}
            />
            <ScrollView>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}	
                    style={{ flex: 1 }}
                >
                    <View className='rounded-default'>
                        <RichEditor
                            ref={(r) => richText.current = r}
                            editorStyle={{
                                caretColor: primaryColor,
                                backgroundColor: '#fff',
                                placeholderColor: 'gray',
                                cssText: 'h1 { font-weight: bold; font-size: 18px; } h2 { font-weight: bold; font-size: 14px; } p { font-size: 9px; }',
                                contentCSSText: 'font-size: 9px; min-height: 300px; height: 100%;',
                                initialCSSText: 'body { font-size: 9px; min-height: 300px; height: 100%; }',
                            }}
                            onChange={(text: any) => {
                                setContent(text)
                            }}
                        />
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
            <PrimaryButton
                text='Submit'
                className='mt-2xl'
                onPress={handleSubmit}
            />
            <TextButton
                text='Previous'
                onPress={handlePrev}
            />
        </SafeAreaView>
    )
}

export default ContentEditor