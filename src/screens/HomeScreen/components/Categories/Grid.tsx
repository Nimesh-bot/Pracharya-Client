import React from "react";
import { ScrollView } from "react-native";

import { useGetCategoriesQuery } from "../../../../redux/features/category/categoryApi.slice";
import Card from "./Card";

interface GridProps {
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}

const Grid = ({ selected, setSelected }: GridProps) => {
  const { data: categories } = useGetCategoriesQuery();

  console.log("categories", categories);

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexShrink: 0,
      }}
    >
      <Card
        icon={"menu"}
        title={"All"}
        active={selected === 0}
        onPress={() => setSelected(0)}
        additionalCss={"ml-0"}
      />
      {categories?.map((category: CategoryProps, index: number) => (
        <Card
          key={index}
          icon={category.iconname}
          index={index}
          title={category.name}
          active={selected === category.id}
          onPress={() => setSelected(category.id)}
        />
      ))}
    </ScrollView>
  );
};

export default Grid;
