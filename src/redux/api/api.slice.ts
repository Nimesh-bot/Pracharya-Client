import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Toast from "react-native-toast-message";
import { unauthorize } from "../features/auth/auth.slice";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  // baseUrl: 'https://prachaya-test-back.onrender.com/',
  // baseUrl: 'https://3d60-202-51-76-77.in.ngrok.io',
  // baseUrl: "http://192.168.1.80:8000",
  baseUrl: "http://10.1.18.244:8000",
  prepareHeaders: (headers, { getState }) => {
    const { isLoggedIn, access_token } = (getState() as RootState).auth;
    console.log("access_token", access_token);
    console.log("loggedin", isLoggedIn);
    if (isLoggedIn && access_token) {
      headers.set("authorization", `Bearer ${access_token}`);
    }
    return headers;
  },
});

export const baseQueryWithoutErrorHandling = async (
  args: any,
  api: any,
  extraOptions: any
) => {
  const result = await baseQuery(args, api, extraOptions);
  console.log("API result:", JSON.stringify(result));

  if (result.data) {
    if (args.method !== "GET" && typeof args !== "string")
      console.log("API success:", args.typePrefix);
  } else if (result.error) {
    if (result.error.status === 401) {
      api.dispatch(unauthorize());
    } else if (result.error.status === 400) {
      console.error("API validation error:", (result.error.data as any).error);
    } else if (result.error.data) {
      console.error("API error:", result.error.data);
    }
  }
  return result;
};

export const baseQueryWithErrorHandling = async (
  args: any,
  api: any,
  extraOptions: any
) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error) {
    if (result.error.status === 400) {
      console.error("API validation error:", (result.error.data as any).error);
      Toast.show({
        type: "error",
        text1: (result.error.data as any).error,
      });
    } else if (result.error.status === 401) {
      api.dispatch(unauthorize());
      Toast.show({
        type: "error",
        text1: "Unauthorized. Please login again.",
      });
    } else if (result.error.data) {
      console.error("API error:", result.error.data);
      Toast.show({
        type: "error",
        text1: (result.error.data as any).error,
      });
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithoutErrorHandling,
  reducerPath: "api",
  endpoints: (builder) => ({}),
});
