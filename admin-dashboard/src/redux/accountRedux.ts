import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    accounts: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    // GET ALL
    getAccountStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getAccountSuccess: (state, action) => {
      state.isFetching = false;
      state.accounts = action.payload;
    },
    getAccountFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // DELETE
    deleteAccountStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteAccountSuccess: (state, action) => {
      state.isFetching = false;
      state.accounts.splice(
        state.accounts.findIndex((item: any) => item._id === action.payload),
        1
      );
    },
    deleteAccountFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // UPDATE
    updateAccountStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateAccountSuccess: (state, action) => {
      state.isFetching = false;
      state.accounts[
        state.accounts.findIndex((item: any) => item._id === action.payload.id)
      ] = action.payload.product as any as never;
    },
    updateAccountFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // ADD
    addAccountStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addAccountSuccess: (state, action) => {
      state.isFetching = false;
      state.accounts.push(action.payload as any as never);
    },
    addAccountFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getAccountStart,
  getAccountSuccess,
  getAccountFailure,
  deleteAccountStart,
  deleteAccountFailure,
  deleteAccountSuccess,
  updateAccountStart,
  updateAccountFailure,
  updateAccountSuccess,
  addAccountStart,
  addAccountFailure,
  addAccountSuccess,
} = accountSlice.actions;

export default accountSlice.reducer;
