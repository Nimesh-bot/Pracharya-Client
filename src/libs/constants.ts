import { Dimensions } from "react-native";
import Constants from "expo-constants";

import { AirplaneSquareIcon, CarIcon, MenuIcon, PersonalCardIcon, SecurityIcon } from "../../assets/icons/svg-icons";

export const SCREEN_HEIGHT = Dimensions.get("screen").height; // device height
export const WINDOW_HEIGHT = Dimensions.get("window").height;

export const SECONDS_IN_DAY = 24 * 60 * 60;
export const MILLISECOND_IN_DAY = SECONDS_IN_DAY * 1000;

export const ACTION_BAR_HEIGHT = SCREEN_HEIGHT - WINDOW_HEIGHT;

export const MAX_SIZE_FOR_FILE = 5000000; //5MB in Bytes

export const monthNames: string[] = [
    "Baisakh",
    "Jestha",
    "Asadh",
    "Shrawan",
    "Bhadra",
    "Ashwin",
    "Kartik",
    "Mangsir",
    "Poush",
    "Magh",
    "Falgun",
    "Chaitra",
];

export const categoryLists: any[] = [
    {
        id: 1,
        name: "All",
        icon: MenuIcon,
    },
    {
        id: 2,
        name: "License",
        iconName: CarIcon,
    },
    {
        id: 3,
        name: "Insurance",
        iconName: SecurityIcon,
    },
    {
        id: 4,
        name: "National ID",
        iconName: PersonalCardIcon,
    },
    {
        id: 5,
        name: "Passport",
        iconName: PersonalCardIcon,
    },
    {
        id: 6,
        name: "VISA",
        iconName: AirplaneSquareIcon,
    },
    {
        id: 7,
        name: "Citizenship",
        iconName: PersonalCardIcon,
    }
]

export const STATUS_BAR_HEIGHT = Constants.statusBarHeight;