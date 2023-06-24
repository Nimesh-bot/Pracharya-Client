import * as React from "react"
import Svg, { SvgProps, Path, G } from "react-native-svg"

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

const FileIcon = (props) => (
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
      d="M20.5 10.19h-2.89c-2.37 0-4.3-1.93-4.3-4.3V3c0-.55-.45-1-1-1H8.07C4.99 2 2.5 4 2.5 7.57v8.86C2.5 20 4.99 22 8.07 22h7.86c3.08 0 5.57-2 5.57-5.57v-5.24c0-.55-.45-1-1-1Z"
      opacity={0.4}
    />
    <Path
      fill={
        props.active ? "#1C44AC" : "#122D42"
      }
      d="M15.8 2.21c-.41-.41-1.12-.13-1.12.44v3.49c0 1.46 1.24 2.67 2.75 2.67.95.01 2.27.01 3.4.01.57 0 .87-.67.47-1.07-1.44-1.45-4.02-4.06-5.5-5.54Zm-2.3 11.54h-6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75Zm-2 4h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z"
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

const LikeIcon = (props) => (
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
      d="M21.65 10.03c-.39-.56-1.08-.88-1.87-.88h-4.1c-.27 0-.52-.11-.69-.31-.18-.2-.25-.48-.21-.77l.51-3.28c.22-.98-.43-2.08-1.41-2.41-.91-.34-1.98.12-2.41.77L7.25 9.42l-.12.2v8.84l.15.15 3.17 2.45c.42.42 1.37.65 2.04.65h3.9c1.34 0 2.69-1.01 2.99-2.24l2.46-7.49c.26-.71.19-1.4-.19-1.95Z"
      opacity={0.4}
    />
    <Path
      fill={
        props.active ? "#1C44AC" : "#122D42"
      }
      d="M5.21 6.379H4.18c-1.55 0-2.18.6-2.18 2.08v10.06c0 1.48.63 2.08 2.18 2.08h1.03c1.55 0 2.18-.6 2.18-2.08V8.459c0-1.48-.63-2.08-2.18-2.08Z"
    />
  </Svg>
)

const CommentIcon = (props) => (
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
      d="M2 12.97V6.99C2 4.23 4.24 2 7 2h10c2.76 0 5 2.23 5 4.99v6.98c0 2.75-2.24 4.98-5 4.98h-1.5c-.31 0-.61.15-.8.4l-1.5 1.99c-.66.88-1.74.88-2.4 0l-1.5-1.99c-.16-.22-.52-.4-.8-.4H7c-2.76 0-5-2.23-5-4.98v-1Z"
      opacity={0.4}
    />
    <Path
      fill={
        props.active ? "#1C44AC" : "#122D42"
      }
      d="M12 12c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1Zm4 0c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1Zm-8 0c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1Z"
    />
  </Svg>
)

const ShareIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G 
      fill={props.active ? "#1C44AC" : "#122D42"}
    >
      <Path
        d="M3.464 3.464C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536Z"
        opacity={0.5}
      />
      <Path
        fillRule="evenodd"
        d="M16.47 1.47a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H14c-1.552 0-2.467.757-2.788 1.08l-.19.191-.193.191c-.322.32-1.079 1.236-1.079 2.788v3a.75.75 0 0 1-1.5 0v-3c0-2.084 1.027-3.36 1.521-3.851l.19-.189.188-.189C10.64 7.277 11.916 6.25 14 6.25h6.19l-3.72-3.72a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
)

const ContributorsIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill={props.active ? "#1C44AC" : "#122D42"}
      d="M17.53 7.77a.739.739 0 0 0-.21 0 2.874 2.874 0 0 1-2.78-2.88C14.54 3.3 15.83 2 17.43 2c1.59 0 2.89 1.29 2.89 2.89a2.89 2.89 0 0 1-2.79 2.88Zm3.262 6.93c-1.12.75-2.69 1.03-4.14.84.38-.82.58-1.73.59-2.69 0-1-.22-1.95-.64-2.78 1.48-.2 3.05.08 4.18.83 1.58 1.04 1.58 2.75.01 3.8ZM6.438 7.77c.07-.01.14-.01.21 0a2.874 2.874 0 0 0 2.78-2.88C9.428 3.3 8.138 2 6.538 2c-1.59 0-2.89 1.29-2.89 2.89a2.89 2.89 0 0 0 2.79 2.88Zm.113 5.08c0 .97.21 1.89.59 2.72-1.41.15-2.88-.15-3.96-.86-1.58-1.05-1.58-2.76 0-3.81 1.07-.72 2.58-1.01 4-.85-.41.84-.63 1.79-.63 2.8Z"
      opacity={0.4}
    />
    <Path
      fill={props.active ? "#1C44AC" : "#122D42"}
      d="M12.12 15.87a1.13 1.13 0 0 0-.26 0 3.425 3.425 0 0 1-3.31-3.43c0-1.9 1.53-3.44 3.44-3.44 1.9 0 3.44 1.54 3.44 3.44 0 1.86-1.46 3.37-3.31 3.43Zm-3.25 2.07c-1.51 1.01-1.51 2.67 0 3.67 1.72 1.15 4.54 1.15 6.26 0 1.51-1.01 1.51-2.67 0-3.67-1.71-1.15-4.53-1.15-6.26 0Z"
    />
  </Svg>
)

const SendButton = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill={props.color}
      d="m7.11 5.961 9.02-3.01c4.05-1.35 6.25.86 4.91 4.91l-3.01 9.02c-2.02 6.07-5.34 6.07-7.36 0l-.89-2.68-2.68-.89c-6.06-2.01-6.06-5.32.01-7.35Z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m12.12 11.629 3.81-3.82Zm0 .751c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l3.8-3.82c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.8 3.82c-.15.14-.34.22-.53.22Z"  
    />
  </Svg>
)

const CloseIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill={props.color}
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m13.06 12 2.3-2.3c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-2.3 2.3-2.3-2.3a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l2.3 2.3-2.3 2.3c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l2.3-2.3 2.3 2.3c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06l-2.3-2.3Z"
    />
  </Svg>
)

const UserTagIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill={props.color}
      d="M18 18.862h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.982c0-1.64 1.34-2.97 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91c0 1.63-1.34 2.97-3 2.97Z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.002 10.41a2.33 2.33 0 1 0 0-4.66 2.33 2.33 0 0 0 0 4.66Zm2.679 4.65c.81 0 1.28-.9.83-1.57-.68-1.01-2-1.69-3.51-1.69-1.51 0-2.83.68-3.51 1.69-.45.67.02 1.57.83 1.57h5.36Z"
    />
  </Svg>
)

const EmailIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill={props.color}
      d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5Z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M11.999 12.872c-.84 0-1.69-.26-2.34-.79l-3.13-2.5a.748.748 0 0 1 .93-1.17l3.13 2.5c.76.61 2.05.61 2.81 0l3.13-2.5c.32-.26.8-.21 1.05.12.26.32.21.8-.12 1.05l-3.13 2.5c-.64.53-1.49.79-2.33.79Z"
    />
  </Svg>
)

const AvatarIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill={props.color}
      d="M22 7.81v6.09l-1.63-1.4c-.78-.67-2.04-.67-2.82 0l-4.16 3.57c-.78.67-2.04.67-2.82 0l-.34-.28c-.71-.62-1.84-.68-2.64-.14l-4.92 3.3-.11.08c-.37-.8-.56-1.75-.56-2.84V7.81C2 4.17 4.17 2 7.81 2h8.38C19.83 2 22 4.17 22 7.81Z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M9.001 10.381a2.38 2.38 0 1 0 0-4.76 2.38 2.38 0 0 0 0 4.76Zm12.998 3.518v2.29c0 3.64-2.17 5.81-5.81 5.81h-8.38c-2.55 0-4.39-1.07-5.25-2.97l.11-.08 4.92-3.3c.8-.54 1.93-.48 2.64.14l.34.28c.78.67 2.04.67 2.82 0l4.16-3.57c.78-.67 2.04-.67 2.82 0l1.63 1.4Z"
    />
  </Svg>
)

const LinearRightIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m8.91 19.92 6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"
    />
  </Svg>
)

const CameraIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill={props.color}
      d="M6.76 22h10.48c2.76 0 3.86-1.69 3.99-3.75l.52-8.26A3.753 3.753 0 0 0 18 6c-.61 0-1.17-.35-1.45-.89l-.72-1.45C15.37 2.75 14.17 2 13.15 2h-2.29c-1.03 0-2.23.75-2.69 1.66l-.72 1.45C7.17 5.65 6.61 6 6 6 3.83 6 2.11 7.83 2.25 9.99l.52 8.26C2.89 20.31 4 22 6.76 22Z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M13.5 8.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75Zm-1.499 9.381a3.38 3.38 0 1 0 0-6.76 3.38 3.38 0 0 0 0 6.76Z"
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
  FileIcon,
  RightArrowIcon,
  LikeIcon,
  ShareIcon,
  CommentIcon,
  ContributorsIcon,
  SendButton,
  CloseIcon,
  LinearRightIcon,
  UserTagIcon, EmailIcon, AvatarIcon, CameraIcon,
} 