import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const HomeIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 21}
    height={props.size || 21}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill={
        props.active ? "#1C44AC" : "#122D42"
      }
      d="m20.04 6.822-5.76-4.03c-1.57-1.1-3.98-1.04-5.49.13l-5.01 3.91c-1 .78-1.79 2.38-1.79 3.64v6.9c0 2.55 2.07 4.63 4.62 4.63h10.78c2.55 0 4.62-2.07 4.62-4.62v-6.78c0-1.35-.87-3.01-1.97-3.78Z"
      opacity={0.4}
    />
    <Path
      fill={
        props.active ? "#1C44AC" : "#122D42"
      }
      d="M12 18.75c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75Z"
    />
  </Svg>
)

const SearchIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 21}
    height={props.size || 21}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill={
        props.active ? "#1C44AC" : "#122D42"
      }
      d="M11.01 20.02a9.01 9.01 0 1 0 0-18.02 9.01 9.01 0 0 0 0 18.02Z"
      opacity={0.4}
    />
    <Path
      fill={
        props.active ? "#1C44AC" : "#122D42"
      }
      d="M21.99 18.95c-.33-.61-1.03-.95-1.97-.95-.71 0-1.32.29-1.68.79-.36.5-.44 1.17-.22 1.84.43 1.3 1.18 1.59 1.59 1.64.06.01.12.01.19.01.44 0 1.12-.19 1.78-1.18.53-.77.63-1.54.31-2.15Z"
    />
  </Svg>
)
const PlusIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 21}
    height={props.size || 21}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill={
        props.active ? "#1C44AC" : "#122D42"
      }
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z"
      opacity={0.4}
    />
    <Path
      fill={
        props.active ? "#1C44AC" : "#122D42"
      }
      d="M18 11.25h-5.25V6c0-.41-.34-.75-.75-.75s-.75.34-.75.75v5.25H6c-.41 0-.75.34-.75.75s.34.75.75.75h5.25V18c0 .41.34.75.75.75s.75-.34.75-.75v-5.25H18c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Z"
    />
  </Svg>
)

const BookmarksIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 21}
    height={props.size || 21}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill={
        props.active ? "#1C44AC" : "#122D42"
      }
      d="M16.19 2H7.82C4.17 2 2 4.17 2 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z"
      opacity={0.4}
    />
    <Path
      fill={
        props.active ? "#1C44AC" : "#122D42"
      }
      fillRule="evenodd"
      d="M16.25 2v10.42c0 .64-.19 1.12-.52 1.31-.34.2-.88.1-1.48-.26l-1.32-.79c-.51-.31-1.35-.31-1.86 0l-1.32.79c-.6.36-1.14.45-1.48.26-.33-.19-.52-.67-.52-1.31V2h8.5Z"
      clipRule="evenodd"
    />
  </Svg>
)

const ProfileIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 21}
    height={props.size || 21}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill={
        props.active ? "#1C44AC" : "#122D42"
      }
      d="M12 22.012c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Z"
      opacity={0.4}
    />
    <Path
      fill={
        props.active ? "#1C44AC" : "#122D42"
      }
      d="M12 6.941c-2.07 0-3.75 1.68-3.75 3.75 0 2.03 1.59 3.68 3.7 3.74h.18a3.743 3.743 0 0 0 3.62-3.74c0-2.07-1.68-3.75-3.75-3.75Zm6.779 12.417a9.976 9.976 0 0 1-6.78 2.65c-2.62 0-5-1.01-6.78-2.65.24-.91.89-1.74 1.84-2.38 2.73-1.82 7.17-1.82 9.88 0 .96.64 1.6 1.47 1.84 2.38Z"
    />
  </Svg>
)   

const SettingsIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 21}
    height={props.size || 21}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill={
        props.active ? "#1C44AC" : "#122D42"
      }
      d="M2 12.881v-1.76c0-1.04.85-1.9 1.9-1.9 1.81 0 2.55-1.28 1.64-2.85-.52-.9-.21-2.07.7-2.59l1.73-.99c.79-.47 1.81-.19 2.28.6l.11.19c.9 1.57 2.38 1.57 3.29 0l.11-.19c.47-.79 1.49-1.07 2.28-.6l1.73.99c.91.52 1.22 1.69.7 2.59-.91 1.57-.17 2.85 1.64 2.85 1.04 0 1.9.85 1.9 1.9v1.76c0 1.04-.85 1.9-1.9 1.9-1.81 0-2.55 1.28-1.64 2.85.52.91.21 2.07-.7 2.59l-1.73.99c-.79.47-1.81.19-2.28-.6l-.11-.19c-.9-1.57-2.38-1.57-3.29 0l-.11.19c-.47.79-1.49 1.07-2.28.6l-1.73-.99a1.899 1.899 0 0 1-.7-2.59c.91-1.57.17-2.85-1.64-2.85-1.05 0-1.9-.86-1.9-1.9Z"
      opacity={0.4}
    />
    <Path
      fill={
        props.active ? "#1C44AC" : "#122D42"
      }
      d="M12 15.25a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5Z"
    />
  </Svg>
)

const MenuIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 21}
    height={props.size || 21}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill={
        props.active ? "#1C44AC" : "#122D42"
      }
      d="M17.54 8.81a2.96 2.96 0 1 0 0-5.92 2.96 2.96 0 0 0 0 5.92Z"
      opacity={0.4}
    />
    <Path
      fill={
        props.active ? "#1C44AC" : "#122D42"
      }
      d="M6.46 8.81a2.96 2.96 0 1 0 0-5.92 2.96 2.96 0 0 0 0 5.92Zm11.08 12.301a2.96 2.96 0 1 0 0-5.92 2.96 2.96 0 0 0 0 5.92Z"
    />
    <Path
      fill={
        props.active ? "#1C44AC" : "#122D42"
      }
      d="M6.46 21.111a2.96 2.96 0 1 0 0-5.92 2.96 2.96 0 0 0 0 5.92Z"
      opacity={0.4}
    />
  </Svg>
)

const CarIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 21}
    height={props.size || 21}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill={
        props.active ? "#1C44AC" : "#122D42"
      }
      d="M22.182 13.66c-.15-1.65-.59-3.41-3.8-3.41H5.621c-3.21 0-3.64 1.76-3.8 3.41l-.56 6.09c-.07.76.18 1.52.7 2.09.53.58 1.28.91 2.08.91h1.88c1.62 0 1.93-.93 2.13-1.54l.2-.6c.23-.69.29-.86 1.19-.86h5.12c.9 0 .93.1 1.19.86l.2.6c.2.61.51 1.54 2.13 1.54h1.88c.79 0 1.55-.33 2.08-.91.52-.57.77-1.33.7-2.09l-.56-6.09Z"
      opacity={0.4}
    />
    <Path
      fill={
        props.active ? "#1C44AC" : "#122D42"
      }
      d="M21 7.248h-1.02l-.38-1.81c-.36-1.75-1.11-3.36-4.09-3.36H8.49c-2.98 0-3.73 1.61-4.09 3.36l-.38 1.81H3c-.41 0-.75.34-.75.75s.34.75.75.75h.71l-.42 2c.54-.31 1.29-.5 2.33-.5h12.76c1.04 0 1.79.19 2.33.5l-.42-2H21c.41 0 .75-.34.75-.75s-.34-.75-.75-.75ZM9 15.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75Zm9 0h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75Z"
    />
  </Svg>
)

const PersonalCardIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 21}
    height={props.size || 21}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill={
        props.active ? "#1C44AC" : "#122D42"
      }
      d="M18 3H6C3.79 3 2 4.78 2 6.97v10.06C2 19.22 3.79 21 6 21h12c2.21 0 4-1.78 4-3.97V6.97C22 4.78 20.21 3 18 3Z"
      opacity={0.4}
    />
    <Path
      fill={
        props.active ? "#1C44AC" : "#122D42"
      }
      d="M19 8.75h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75Zm0 4h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Zm0 4h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75ZM8.5 11.792a2.31 2.31 0 1 0 0-4.62 2.31 2.31 0 0 0 0 4.62Zm.8 1.32a8.66 8.66 0 0 0-1.61 0c-1.68.16-3.03 1.49-3.19 3.17-.01.14.03.28.13.38.1.1.23.17.37.17h7c.14 0 .28-.06.37-.16.09-.1.14-.24.13-.38a3.55 3.55 0 0 0-3.2-3.18Z"
    />
  </Svg>
)

const SecurityUserIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 21}
    height={props.size || 21}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill={
        props.active ? "#1C44AC" : "#122D42"
      }
      d="M18 3H6C3.79 3 2 4.78 2 6.97v10.06C2 19.22 3.79 21 6 21h12c2.21 0 4-1.78 4-3.97V6.97C22 4.78 20.21 3 18 3Z"
      opacity={0.4}
    />
    <Path
      fill={
        props.active ? "#1C44AC" : "#122D42"
      }
      d="M19 8.75h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75Zm0 4h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Zm0 4h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75ZM8.5 11.792a2.31 2.31 0 1 0 0-4.62 2.31 2.31 0 0 0 0 4.62Zm.8 1.32a8.66 8.66 0 0 0-1.61 0c-1.68.16-3.03 1.49-3.19 3.17-.01.14.03.28.13.38.1.1.23.17.37.17h7c.14 0 .28-.06.37-.16.09-.1.14-.24.13-.38a3.55 3.55 0 0 0-3.2-3.18Z"
    />
  </Svg>
)

const AirplaneSquareIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 21}
    height={props.size || 21}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill={
        props.active ? "#1C44AC" : "#122D42"
      }
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z"
      opacity={0.4}
    />
    <Path
      fill={
        props.active ? "#1C44AC" : "#122D42"
      }
      d="m9.86 18.998 1.68-1.42c.25-.21.67-.21.93 0l1.67 1.42c.39.2.87 0 1.01-.42l.32-.96c.08-.23 0-.57-.17-.74l-1.64-1.65a.827.827 0 0 1-.21-.51v-1.85c0-.42.31-.62.7-.46l3.35 1.44c.55.24 1.01-.06 1.01-.66v-.93c0-.48-.36-1.04-.81-1.23l-3.94-1.7a.534.534 0 0 1-.3-.46v-2.07c0-.68-.5-1.48-1.1-1.79a.763.763 0 0 0-.69 0c-.61.3-1.1 1.11-1.1 1.79v2.07c0 .18-.14.39-.3.46l-3.94 1.7c-.44.19-.81.75-.81 1.23v.93c0 .6.45.9 1.01.66l3.35-1.44c.38-.17.7.04.7.46v1.85c0 .17-.1.4-.21.51l-1.67 1.64c-.17.17-.25.51-.17.74l.32.96c.14.43.61.63 1.01.43Z"
    />
  </Svg>
)

const SecurityIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill={
        props.active ? "#1C44AC" : "#122D42"
      }
      d="M18.328 5.67 6.588 17.41c-.44.44-1.18.38-1.54-.14-1.24-1.81-1.97-3.95-1.97-6.15V6.73c0-.82.62-1.75 1.38-2.06l5.57-2.28a5.12 5.12 0 0 1 3.92 0l4.04 1.65c.67.27.84 1.13.34 1.63Z"
      opacity={0.4}
    />
    <Path
      fill={
        props.active ? "#1C44AC" : "#122D42"
      }
      d="M19.27 7.042c.65-.55 1.64-.08 1.64.77v3.31c0 4.89-3.55 9.47-8.4 10.81-.33.09-.69.09-1.03 0a11.3 11.3 0 0 1-3.87-1.95c-.48-.37-.53-1.07-.11-1.5 2.18-2.23 8.56-8.73 11.77-11.44Z"
    />
  </Svg>
)

const RightArrowIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      stroke="#122D42"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M14.43 5.93 20.5 12l-6.07 6.07M3.5 12h16.83"
    />
  </Svg>
)

export {
  HomeIcon,
  SearchIcon,
  PlusIcon,
  BookmarksIcon,
  ProfileIcon,
  SettingsIcon,
  PersonalCardIcon,
  SecurityUserIcon,
  MenuIcon,
  CarIcon,
  AirplaneSquareIcon,
  SecurityIcon,
  RightArrowIcon
} 