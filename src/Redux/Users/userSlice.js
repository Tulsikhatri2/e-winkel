import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userLogin } from "./userDataService";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userLoginData: {},
    isloading: false,
    isError: false,
    isSuccess: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers:(builder)=>{
  }
});

export const loginUser = createAsyncThunk(
  "USER/LOGIN",
  async (user)=>{
    try {
      return await userLogin(user)
    } catch (error) {
      console.log(error.message,"user Error")
    }
  }
)

export default userSlice.reducer;
