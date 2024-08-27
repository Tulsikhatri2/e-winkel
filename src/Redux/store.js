import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./Users/userSlice"
import countryReducer from "./Countries/countrySlice"
import productReducer from "./Products/productSlice"
import categoryReducer from "./Category/categorySlice"

const store = configureStore({
    reducer:{
        user:userReducer,
        country:countryReducer,
        product:productReducer,
        category:categoryReducer
    }
})

export default store