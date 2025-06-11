import { createSlice } from "@reduxjs/toolkit";
import authService from "../appwrite/auth";

const initialState = {
  loggedIn: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state,) => {
      state.loggedIn = true;
      state.userData = authService.getCurrentUser();
    },
    logout: (state, ) => {
      state.loggedIn=false;
      state.userData=null
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
