import { useReducer } from "react";
import { publicRequest, userRequest } from "../requestMethods";
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
    const res = await userRequest.delete(`/products/${id}`);

    dispatch(deleteProductSuccess(res));
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
