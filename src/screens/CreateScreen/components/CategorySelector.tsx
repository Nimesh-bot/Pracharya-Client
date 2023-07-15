import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { PrimaryButton } from "../../../components/Buttons";
import LoadingIndicator from "../../../components/LoadingIndicator";
import { useGetCategoriesQuery } from "../../../redux/features/category/categoryApi.slice";

interface CategorySelectorProps {
  selectedCategory: number;
  setSelectedCategory: (category: number) => void;
  handleNext: () => void;
}

const CategorySelector = ({
  selectedCategory,
  setSelectedCategory,
  handleNext,
}: CategorySelectorProps) => {
  const { data: categoryData, isFetching, isLoading } = useGetCategoriesQuery();

  return (
    <View>
      <View>
        <Text className="text-dark text-2xl font-bold">Choose a Category</Text>
        <Text className="text-dark mt-xs">
          We need to know the of a category you want to contribute on to prevent
          duplication.
        </Text>
      </View>

      <View className="mt-2xl flex-row flex-wrap">
        {categoryData?.map((category, index) => (
          <TouchableOpacity
            key={index}
            className={`p-default rounded-sm mr-default mb-default ${
              selectedCategory === category.id ? "bg-blue" : "bg-white"
            }`}
            onPress={() => {
              setSelectedCategory(category.id);
            }}
          >
            <Text
              className={`text-dark font-medium ${
                selectedCategory === category.id ? "text-white" : "text-dark"
              }`}
            >
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <PrimaryButton text="Next" className="mt-2xl" onPress={handleNext} />

      {isLoading ||
        (isFetching && (
          <LoadingIndicator
            text="Fetching Categories"
            subText="Please wait while we load the categories"
          />
        ))}
    </View>
  );
};

export default CategorySelector;
