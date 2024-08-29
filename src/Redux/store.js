import { combineReducers, configureStore } from "@reduxjs/toolkit"
import userReducer from "./Users/userSlice"
import countryReducer from "./Countries/countrySlice"
import productReducer from "./Products/productSlice"
import categoryReducer from "./Category/categorySlice"
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const reducers = combineReducers({
    user:userReducer,
    country:countryReducer,
    product:productReducer,
    category:categoryReducer
})

const persistConfig = {
    key:"root",
    storage
}

const persistedReducer = persistReducer(persistConfig,reducers)

const store = configureStore({
    reducer: persistedReducer
})

export default store