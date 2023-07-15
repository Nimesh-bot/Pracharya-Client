import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";

import AppBar from "../../components/AppBar";
import LoadingIndicator from "../../components/LoadingIndicator";
import CategorySelector from "./components/CategorySelector";
import ContentEditor from "./components/ContentEditor";

import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { useCreateThreadMutation } from "../../redux/features/thread/threadApi.slice";

const CreateForm = () => {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(0 as number);
  const [title, setTitle] = useState("" as string);
  const [content, setContent] = useState("" as any);
  const [error, setError] = useState({
    title: "" as string,
    content: "" as string,
  });

  const [createThread, { isLoading }] = useCreateThreadMutation();
  const navigation = useNavigation<any>();

  const handleNext = () => {
    setStep(step + 1);
  };
  const handlePrev = () => {
    setStep(step - 1);
  };

  const resetError = () => {
    setError({
      title: "",
      content: "",
    });
  };

  const handleSubmit = () => {
    resetError();

    if (title === "" || content === "") {
      setError({
        title: !title ? "Title is required" : "",
        content: !content ? "Content is required" : "",
      });
    } else if (title.length > 20) {
      setError({
        ...error,
        title: "Title must be at most 20 characters long",
      });
    } else if (content.length > 500) {
      setError({
        ...error,
        content: "Content must be at most 250 characters long",
      });
    } else {
      const payload = {
        title: title,
        content: content,
        category_id: selectedCategory,
      };

      createThread(payload)
        .unwrap()
        .then((res) => {
          Toast.show({
            type: "success",
            text1: "Thread Created",
            text2:
              "Your thread has been created and will be visible after admin approves of the contents",
          });
          setContent("");
          setTitle("");
          setSelectedCategory(0);
          navigation.navigate("Home");
        })
        .catch((err) => {
          Toast.show({
            type: "error",
            text1: "Oops..",
            text2: err.data.msg || "Something went wrong. Please try again.",
          });
        });
    }
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
              setContent={setContent}
              title={title}
              setTitle={setTitle}
              handlePrev={handlePrev}
              handleSubmit={handleSubmit}
              error={error}
            />
          )}
        </View>
      </View>

      {isLoading && (
        <LoadingIndicator
          text="Please wait."
          subText="We are creating your thread."
        />
      )}
    </ScrollView>
  );
};

export default CreateForm;
