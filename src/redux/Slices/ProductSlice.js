import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice=createSlice({
    name:"products",
    initialState:{
        items:[],
        filteredItems:[]
    },
    reducers:{
        setProducts:(state,action)=>{
            state.items=action.payload;
            state.filteredItems=action.payload;
        },
        searchProducts:(state,action)=>{
            const searchTerm = action.payload.toLowerCase();
            state.filteredItems = state.items.filter(product =>
                product.title.toLowerCase().includes(searchTerm)
            );
        },
        sortProducts:(state,action)=>{
            const sortByValue=action.payload;
            state.items.sort((first,second)=>{
                if(sortByValue=="Rating"){
                    return second.rating.rate-first.rating.rate;
                }
                if(sortByValue=="Low to high"){
                    return first.price-second.price;
                }
                if(sortByValue=="High to low"){
                    return second.price-first.price;
                }
            })
        }
    }
});

export const { setProducts,searchProducts, sortProducts } = ProductSlice.actions;
export default ProductSlice.reducer;