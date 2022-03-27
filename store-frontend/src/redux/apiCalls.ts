import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import { publicRequest } from "../requestMethods";
import { removeProduct } from "./cartRedux";

export const login = async (dispatch: any, user: any) =>{
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
        
    }catch(err){
        dispatch(loginFailure())
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