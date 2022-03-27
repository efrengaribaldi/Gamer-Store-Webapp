import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
    products: string[]
    quantity: number,
    total: number
  }
  
  const initialState = { products: [], quantity:0, total:0 } as CounterState

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity; 
        },
        removeProduct: (state, action) => {
            state.quantity -= 1;
            state.total -= action.payload.price * action.payload.quantity; 
        }
    },
})

export const {addProduct, removeProduct} = cartSlice.actions;
export default cartSlice.reducer;