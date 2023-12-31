import * as React from "react"
import Svg, { Path } from "react-native-svg"

const TabNavigationIcons = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    {
      props.name === "Home" ? (
        <>
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
        </>
      ) : props.name === "Search" ? (
        <>
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
        </>
      ) : props.name === "Create" ? (
        <>
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
        </>
      ) : props.name === "Bookmarks" ? (
        <>
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
        </>
      ) : props.name === "Login" ? (
        <>
          <Path
            fill={props.active ? "#1C44AC" : "#122D42"}
            d="M9 7.2v9.59C9 20 11 22 14.2 22h2.59c3.2 0 5.2-2 5.2-5.2V7.2C22 4 20 2 16.8 2h-2.6C11 2 9 4 9 7.2z"
            opacity={0.4}
          />
          <Path
            fill={props.active ? "#1C44AC" : "#122D42"}
            d="m12.43 8.12 3.35 3.35c.29.29.29.77 0 1.06l-3.35 3.35c-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06l2.07-2.07H2.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10.69l-2.07-2.07a.742.742 0 0 1-.22-.53c0-.19.07-.38.22-.53.29-.3.76-.3 1.06 0z"
          />
        </>
      ) : (
        <>
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
        </>
      )
    }
  </Svg>
)

export default TabNavigationIcons