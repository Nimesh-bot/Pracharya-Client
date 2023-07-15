import React from 'react'
import Svg, { Path } from "react-native-svg"

const AdminTabNavigationIcons = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size}
        height={props.size}
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        {
            props.name === "AdminHome" ? (
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
            ) : props.name === "AdminThread" ? (
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
                        d="M15.75 9.75h-7.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.5c.41 0 .75.34.75.75s-.34.75-.75.75Zm0 6h-7.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.5c.41 0 .75.34.75.75s-.34.75-.75.75Z"
                    />
                </>
            ) : (
                <>
                </>
            )
        }
    </Svg>
)

export default AdminTabNavigationIcons