import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: AuthState = {
  isLoggedIn: false,
  access_token: undefined,
  refresh_token: undefined,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authorize: (state, action: PayloadAction<AuthState>) => {
      state.isLoggedIn = true;
      state.access_token = action.payload.access_token;
      state.refresh_token = action.payload.refresh_token;
    },
    unauthorize: (state) => {
      state.isLoggedIn = false;
      state.access_token = undefined;
      state.refresh_token = undefined;
    },
  },
});

export const { authorize, unauthorize } = AuthSlice.actions;

const AuthReducer = AuthSlice.reducer;
export default AuthReducer;