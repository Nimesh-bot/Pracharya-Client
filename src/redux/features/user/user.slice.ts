import { createSlice, PayloadAction } from "@reduxjs/toolkit/dist";
import { RootState } from "../../store";

const initialState = {
    email: "",
    firstname: "",
    middlename: "",
    lastname: "",
    phone_number: "",
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        populateUser: (state, action: PayloadAction<UserProps>) => {
            return action.payload
        },
        updateUser: (state, action: PayloadAction<UserProps>) => {
            return { ...state, ...action.payload };
        },
    }
})

export const { populateUser, updateUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

const UserReducer = userSlice.reducer;
export default UserReducer;