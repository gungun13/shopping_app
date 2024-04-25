import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice=createSlice({
    name:"products",
    initialState:[],
    reducers:{
        setProducts:(state,action)=>{
            console.log(action.payload);
            return action.payload;
        }
    }
});

export const { setProducts } = ProductSlice.actions;
export default ProductSlice.reducer;