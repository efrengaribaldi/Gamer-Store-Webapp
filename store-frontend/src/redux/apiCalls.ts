import { loginFailure, loginStart, loginSuccess, logoutFailure, logoutStart, logoutSuccess } from "./userRedux"
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