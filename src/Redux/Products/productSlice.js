import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productsDisplay } from "./productsDataService";

const productSlice = createSlice({
    name:"product",
    initialState:{
        allProductsData:[]
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        
    }
})

export const productsDataDisplay = createAsyncThunk(
    "PRODUCT/DISPLAY",
    async (token)=>{
    try {
        return await productsDisplay(token)
    } catch (error) {
        
    }
    }
)
export default productSlice.reducer