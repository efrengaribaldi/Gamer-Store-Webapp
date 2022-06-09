import {
  loginFailure,
  loginFailureGoogle,
  loginStart,
  loginStartGoogle,
  loginSuccess,
  loginSuccessGoogle,
  logoutFailure,
  logoutStart,
  logoutSuccess,
  registerFailure,
  registerStart,
  registerSuccess,
} from "./userRedux";
import { publicRequest } from "../requestMethods";
import { removeProduct } from "./cartRedux";

export const login = async (dispatch: any, user: any) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const loginGoogle = async (
  dispatch: (arg0: { payload: any; type: string }) => void
) => {
  dispatch(loginStartGoogle());
  try {
    const res = await publicRequest.get("/auth/login/success", {
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    });
    if (res.status !== 200) {
      throw new Error(
        "google authentication has been failed or there is not a currently google session!"
      );
    }
    dispatch(loginSuccessGoogle(res.data));
  } catch (err) {
    dispatch(loginFailureGoogle());
  }
};

export const register = async (
  user: any,
  dispatch: (arg0: { payload: any; type: string }) => void
) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", { user });
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};

export const deleteProduct = async (
  product: any,
  dispatch: (arg0: { payload: any; type: string }) => void
) => {
  try {
    dispatch(removeProduct(product));
  } catch (err) {
    console.log(err);
  }
};

export const logout = async (
  dispatch: (arg0: { payload: any; type: string }) => void
) => {
  dispatch(logoutStart());
  try {
    dispatch(logoutSuccess());
  } catch (err) {
    dispatch(logoutFailure());
    return err;
  }
};
