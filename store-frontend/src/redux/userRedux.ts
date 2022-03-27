import { createSlice } from "@reduxjs/toolkit";



  

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false

    },
    reducers:{
        loginStart:(state)=>{
            state.isFetching=true;
        },
        loginSuccess:(state, action)=>{
            state.isFetching=false;
            state.currentUser = action.payload;

        },
        loginFailure:(state)=>{
            state.isFetching=true;
            state.error = true;

        },
        logoutStart: (state) => {
            state.isFetching = true;
          },
          logoutSuccess: (state) => {
            state.isFetching = false;
            state.currentUser = null;
          },
          logoutFailure: (state) => {
            state.isFetching = false;
            state.error = true;
          },
    },
})

export const {loginStart, loginFailure, loginSuccess, logoutFailure, logoutStart, logoutSuccess} = userSlice.actions;
export default userSlice.reducer;