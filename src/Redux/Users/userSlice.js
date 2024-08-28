import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { emailVerification, forgotPassword, userLogin, userSignup } from "./userDataService";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userSignupData:{},
    userLoginData: {},
    userToken:"",
    isloading: false,
    isError: false,
    isSuccess: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers:(builder)=>{
    builder
    .addCase(loginUser.pending,(state,action)=>{
      state.isloading = true;
      state.isSuccess = false;
      state.isError = false;
    })
    .addCase(loginUser.fulfilled,(state,action)=>{
      state.userLoginData = action.payload
      state.userToken = action.payload?.token
      state.isSuccess = true;
      state.isloading = false;
      state.isError = false;
    })
    .addCase(loginUser.rejected,(state,action)=>{
      state.isloading = false;
      state.isSuccess = false;
      state.isError = true;
      state.errorMessage = action.payload
    })
    .addCase(signupUser.pending,(state,action)=>{
      state.isloading = true;
      state.isSuccess = false;
      state.isError = false;
    })
    .addCase(signupUser.fulfilled,(state,action)=>{
      state.isSuccess = true;
      state.userSignupData = action.payload;
      state.isloading = false;
      state.isError = false;
    })
    .addCase(signupUser.rejected,(state,action)=>{
      state.isloading = false;
      state.isSuccess = false;
      state.isError = true;
      state.errorMessage = action.payload
    })
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

export const signupUser = createAsyncThunk(
  "USER/SIGNUP",
  async (signupData) => {
    try {
      return await userSignup(signupData)
    } catch (error) {
      console.log(error.message,"singup error")
    }
  }
)

export const userPasswordForgot = createAsyncThunk(
  "USER/FORGOT/PASSWORD",
  async (userEmail) => {
    try {
      return await forgotPassword(userEmail)
    } catch (error) {
      console.log(error.message,"forgot password error")
    }
  }
)

export const emailVerificationProcess = createAsyncThunk(
  "USER/EMAIL/VERIFICATION",
  async (token,id) => {
    try {
      return await emailVerification(token,id)
    } catch (error) {
      console.log(error.message,"verification error")
    }
  }
)

export default userSlice.reducer;
