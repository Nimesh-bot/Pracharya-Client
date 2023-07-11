import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import {
  AirplaneSquareIcon,
  CarIcon,
  FileIcon,
  MenuIcon,
  PersonalCardIcon,
  SecurityIcon,
} from "../../../../../assets/icons/svg-icons";
import tailwindConfig from "../../../../../tailwind.config";

const Card = ({
  icon,
  title,
  active,
  onPress,
  index,
  additionalCss,
}: CategoryCardProps) => {
  const primaryColor = (tailwindConfig as any).theme.colors.blue;
  const defaultColor = (tailwindConfig as any).theme.colors.dark;

  const [categoryIcon, setCategoryIcon] = useState("" as any);

  useEffect(() => {
    switch (icon) {
      case "id":
        return setCategoryIcon(
          <PersonalCardIcon
            color={active ? primaryColor : defaultColor}
            size={24}
          />
        );
      case "menu":
        return setCategoryIcon(
          <MenuIcon color={active ? primaryColor : defaultColor} size={24} />
        );
      case "car":
        return setCategoryIcon(
          <CarIcon color={active ? primaryColor : defaultColor} size={24} />
        );
      case "security":
        return setCategoryIcon(
          <SecurityIcon
            color={active ? primaryColor : defaultColor}
            size={24}
          />
        );
      case "plane":
        return setCategoryIcon(
          <AirplaneSquareIcon
            color={active ? primaryColor : defaultColor}
            size={24}
          />
        );
      default:
        return setCategoryIcon(
          <FileIcon color={active ? primaryColor : defaultColor} size={24} />
        );
    }
  }, [icon, active]);

  return (
    <TouchableOpacity
      className={`flex-col w-[80px] h-[80px] p-sm rounded-md ml-lg bg-white items-center justify-center flex-shrink-0 ${additionalCss}`}
      onPress={onPress}
    >
      {categoryIcon}
      <Text
        className={`text-sm mt-1 font-light ${
          active ? "text-blue" : "text-dark"
        }`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Card;
