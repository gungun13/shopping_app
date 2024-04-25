import { createSlice } from "@reduxjs/toolkit";

export const CartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add:(state,action)=>{
            state.push(action.payload); // payload is used to access argument passed to the function
        },
        remove:(state,action)=>{
            return state.filter((item)=>item.id!==action.payload);
        },
        updateQty: (state, action) => {
            const {id,quantity} = action.payload; // Destructure id and quantity from action payload
            const index = state.findIndex((item) => item.id === id);
            if (index !== -1) {
              state[index].quantity = quantity; // Increment quantity of the item by 1
            }
          },
        decreaseQty: (state, action) => {
            const {id,quantity} = action.payload;
            const index = state.findIndex((item) => item.id === id);
            if (index !== -1) {
              state[index].quantity = quantity; // decrement quantity of the item by 1
            }
          },
}});
export const{add,remove,updateQty,decreaseQty}=CartSlice.actions;
export default CartSlice.reducer;
