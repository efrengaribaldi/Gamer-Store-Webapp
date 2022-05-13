import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    loginStartGoogle: (state) => {
      state.isFetching = true;
    },
    loginSuccessGoogle: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailureGoogle: (state) => {
      state.isFetching = false;
    },

    logoutStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    logoutSuccess: (state) => {
      state.isFetching = false;
      state.currentUser = null;
      state.error = false;
    },
    logoutFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    registerStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    registerFailure: (state) => {
      state.isFetching = true;
      state.error = true;
    },
  },
});

export const {
  loginStart,
  loginFailure,
  loginSuccess,
  loginStartGoogle,
  loginFailureGoogle,
  loginSuccessGoogle,
  logoutFailure,
  logoutStart,
  logoutSuccess,

  registerStart,
  registerFailure,
  registerSuccess,
} = userSlice.actions;
export default userSlice.reducer;
