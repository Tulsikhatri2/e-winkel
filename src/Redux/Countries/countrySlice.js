import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { countries, states } from "./countryDataService";


const countrySlice = createSlice({
  name: "country",
  initialState: {
    countries: [],
    states: [],
    cities: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage:"",
    isLoadingStates: false,
    isErrorStates: false,
    isSuccessStates: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(countryDisplay.pending,(state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;    
    })
    .addCase(countryDisplay.fulfilled,(state,action)=>{
        state.countries = action.payload;
        state.isSuccess = true;
        state.isError = false;
        state.isLoading = false
    })
    .addCase(countryDisplay.rejected,(state,action)=>{
      state.isSuccess = false;
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload
    })
    .addCase(statesDisplay.pending,(state)=>{
      state.isLoadingStates = true;
      state.isErrorStates = false;
      state.isSuccessStates = false
    })
  },
});

export const countryDisplay = createAsyncThunk("COUNTRY/DISPLAY", async () => {
  try {
    return await countries();
  } catch (error) {
    console.log(error.message, "error");
  }
});

export const statesDisplay = createAsyncThunk("STATES/DISPLAY", async () => {
  try {
    return await states()
  } catch (error) {
    console.log(error.message,"error")
  }
})

export default countrySlice.reducer;
