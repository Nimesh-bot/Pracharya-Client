import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import AppBar from "../../components/AppBar";
import CategorySelector from "./components/CategorySelector";
import ContentEditor from "./components/ContentEditor";

const CreateForm = () => {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(0 as number);
  const [title, setTitle] = useState("" as string);
  const [content, setContent] = useState("" as any);

  const handleNext = () => {
    setStep(step + 1);
  };
  const handlePrev = () => {
    setStep(step - 1);
  };
  const handleSubmit = () => {
    const payload = {
      title: title,
      content: content,
      category_id: selectedCategory,
    };

    console.log("content payload", payload);
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexDirection: "column",
        flex: 1,
      }}
    >
      <AppBar />
      <View className="p-xl h-full w-full justify-start flex-col mx-auto">
        <Text className="text-sm">Step {step} of 2</Text>
        <View className="mt-default">
          {step === 1 ? (
            <CategorySelector
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              handleNext={handleNext}
            />
          ) : (
            <ContentEditor
              content={content}
              setContent={setContent}
              title={title}
              setTitle={setTitle}
              handlePrev={handlePrev}
              handleSubmit={handleSubmit}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default CreateForm;
