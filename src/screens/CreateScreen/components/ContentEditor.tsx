import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import {
  RichEditor,
  RichToolbar,
  actions,
} from "react-native-pell-rich-editor";

import tailwindConfig from "../../../../tailwind.config";
import { PrimaryButton, TextButton } from "../../../components/Buttons";
import { PlainInputField } from "../../../components/InputFields";

interface ContentEditorProps {
  setContent: (content: string) => void;
  title: string;
  setTitle: (title: string) => void;
  handleSubmit: () => void;
  handlePrev: () => void;
  error: {
    title: string;
    content: string;
  };
}

const ContentEditor = ({
  title,
  setTitle,
  setContent,
  handleSubmit,
  handlePrev,
  error,
}: ContentEditorProps) => {
  const primaryColor = (tailwindConfig.theme as any).colors.blue;
  const whiteColor = (tailwindConfig.theme as any).colors.white;
  const richText = React.useRef<any>();

  return (
    <ScrollView>
      <SafeAreaView>
        <View className="mb-2xl">
          <Text className="text-dark text-2xl font-bold">
            Fill your contents
          </Text>
          <Text className="text-dark mt-xs">
            Explain in detail and understandable pattern the appropriate way to
            apply for the certification
          </Text>
        </View>
        <View className="mb-lg">
          <PlainInputField
            placeholder="Title"
            value={title}
            onChangeText={(text: string) => setTitle(text)}
            additionalCss={`bg-white ${error.title && "border border-red"}`}
          />
          {error.title && (
            <Text className="text-red text-xs">{error.title}</Text>
          )}
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
            [actions.heading1]: () => (
              <Text className="text-xl text-light opacity-60">H1</Text>
            ),
            [actions.heading2]: () => (
              <Text className="text-lg text-light opacity-60">H2</Text>
            ),
          }}
          className="bg-dark rounded-t-default text-white"
          selectedIconTint={whiteColor}
          selectedButtonStyle={{
            backgroundColor: primaryColor,
          }}
        />
        <ScrollView>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
          >
            <View
              className={`rounded-default ${
                error.content && "border border-red"
              }`}
            >
              <RichEditor
                ref={(r) => (richText.current = r)}
                editorStyle={{
                  backgroundColor: "#fff",
                  placeholderColor: "gray",
                  cssText:
                    "h1 { font-weight: bold; font-size: 18px; } h2 { font-weight: bold; font-size: 14px; } p { font-size: 9px; }",
                  contentCSSText:
                    "font-size: 9px; min-height: 300px; height: 100%;",
                  initialCSSText:
                    "body { font-size: 9px; min-height: 300px; height: 100%; }",
                }}
                onChange={(text: any) => {
                  setContent(text);
                }}
              />
            </View>
            {error.content && (
              <Text className="text-red text-xs">{error.content}</Text>
            )}
          </KeyboardAvoidingView>
        </ScrollView>
        <PrimaryButton
          text="Submit"
          className="my-2xl"
          onPress={handleSubmit}
        />
        <TextButton text="Previous" onPress={handlePrev} />
      </SafeAreaView>
    </ScrollView>
  );
};

export default ContentEditor;
