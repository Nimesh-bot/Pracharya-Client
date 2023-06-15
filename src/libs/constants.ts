import { Dimensions } from "react-native";
import Constants from "expo-constants";

import { AirplaneSquareIcon, CarIcon, MenuIcon, PersonalCardIcon, SecurityIcon } from "../../assets/icons/svg-icons";

export const SCREEN_HEIGHT = Dimensions.get("screen").height; // device height
export const WINDOW_HEIGHT = Dimensions.get("window").height;
export const SCREEN_WIDTH = Dimensions.get("screen").width; // device width
export const WINDOW_WIDTH = Dimensions.get("window").width;

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

export const fakePosts: any[] = [
    {
        id: 1,
        tag: "License",
        description: `
            <p>The process of getting a driving license in Nepal is quite simple. You can get a driving license in Nepal by following the steps mentioned below.</p>
            <ul>
                <li>First, you need to fill up the form for the driving license. You can get the form from the Department of Transport Management (DOTM) or you can download it from the official website of the DOTM.</li>
                <li>After filling up the form, you need to submit it along with the required documents to the DOTM.</li>
                <li>After submitting the form, you need to pass the written test. The written test consists of 20 questions and you need to score at least 12 marks to pass the test.</li>
                <li>After passing the written test, you need to pass the trial test. The trial test consists of 3 parts: the trial test on the ground, the trial test on the road, and the trial test on the slope.</li>
                <li>After passing the trial test, you need to pass the interview. The interview is conducted by the DOTM.</li>
                <li>After passing the interview, you need to pay the fee for the driving license. The fee for the driving license is Rs. 500.</li>
                <li>After paying the fee, you need to collect the driving license from the DOTM.</li>
            </ul>
            <p>Link to the website</p>
            <a href="https://www.dotm.gov.np/" target="_blank">https://www.dotm.gov.np/</a>
        `,
        contributors: [
            {
                id: 1,
                name: "Sujan Shrestha",
                avatar: "https://i.pinimg.com/236x/41/4a/8f/414a8f01843d1c2ce7550d80171a0d2c.jpg"
            },
            {
                id: 2,
                name: "Sujan Shrestha",
                avatar: "https://i.pinimg.com/236x/06/ae/b9/06aeb9d470ae7e23bf5961d9ed94f0ba.jpg"
            }
        ]
    }
]

export const STATUS_BAR_HEIGHT = Constants.statusBarHeight;