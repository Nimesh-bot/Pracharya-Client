import { Dimensions } from "react-native";
import Constants from "expo-constants";

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

export const STATUS_BAR_HEIGHT = Constants.statusBarHeight;