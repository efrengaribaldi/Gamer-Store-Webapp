import { publicRequest, userRequest } from "../requestMethods";
import {
  getAccountFailure,
  getAccountStart,
  getAccountSuccess,
  addAccountStart,
  addAccountFailure,
  addAccountSuccess,
  deleteAccountStart,
  deleteAccountSuccess,
  deleteAccountFailure,
} from "./accountRedux";
import {
  addProductFailure,
  addProductStart,
  addProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  getProductFailure,
  getProductsStart,
  getProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
} from "./productRedux";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";

export const login = async (
  dispatch: (arg0: { payload: any; type: string }) => void,
  user: any
) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
    return err;
  }
};

export const getAccounts = async (
  dispatch: (arg0: { payload: any; type: string }) => void
) => {
  dispatch(getAccountStart());
  try {
    const res = await userRequest.get("/users");
    dispatch(getAccountSuccess(res.data));
  } catch (err) {
    dispatch(getAccountFailure());
  }
};

export const addAccount = async (
  user: any,
  dispatch: (arg0: { payload: any; type: string }) => void
) => {
  dispatch(addAccountStart());
  try {
    const res = await userRequest.post("/users/", { user });
    dispatch(addAccountSuccess(res.data));
  } catch (err) {
    dispatch(addAccountFailure());
  }
};

export const deleteAccount = async (
  id: any,
  dispatch: (arg0: { payload: any; type: string }) => void
) => {
  dispatch(deleteAccountStart());
  try {
    await userRequest.delete(`/users/${id}`);
    dispatch(deleteAccountSuccess(id));
  } catch (err) {
    dispatch(deleteAccountFailure());
  }
};

export const getProducts = async (
  dispatch: (arg0: { payload: any; type: string }) => void
) => {
  dispatch(getProductsStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (
  id: any,
  dispatch: (arg0: { payload: any; type: string }) => void
) => {
  dispatch(deleteProductStart());
  try {
    await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const updateProduct = async (
  id: any,
  product: any,
  dispatch: (arg0: { payload: any; type: string }) => void
) => {
  dispatch(updateProductStart());
  try {
    const res = await userRequest.put(`/products/${id}`, { product });
    dispatch(updateProductSuccess(res.data));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};

export const addProduct = async (
  product: any,
  dispatch: (arg0: { payload: any; type: string }) => void
) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post("/products/", { product });
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};
