import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { emailVerification, forgotPassword, userDataDisplay, userLogin, userSignup } from "./userDataService";

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
    isVerification:false,
    emailVerificationMessage:"",
    allUsersData : [],
    isUser:false,
    isProduct:false,
    isCategory:false
  },
  reducers: {
    usersInfo:(state,action)=>{
      return{
        ...state,
        isUser : action.payload,
        isProduct:false,
        isCategory:false
      }
    },
    productsInfo:(state,action)=>{
      return{
        ...state,
        isProduct:action.payload,
        isUser:false,
        isCategory:false
      }
    },
    categoryInfo:(state,action)=>{
      return{
        ...state,
        isCategory:action.payload,
        isProduct:false,
        isUser:false
      }
    }
  },
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
    .addCase(emailVerificationProcess.pending,(state,action)=>{
      state.isloading = true;
      state.isSuccess = false;
      state.isError = false
    })
    .addCase(emailVerificationProcess.fulfilled,(state,action)=>{
      console.log(action.payload,"+++")
      state.isloading = false;
      state.isError = false;
      state.isVerification = true;
      state.emailVerificationMessage = action.payload
    })
    .addCase(emailVerificationProcess.rejected,(state,action)=>{
      state.isloading = false;
      state.isSuccess = false;
      state.isError = true;
      state.errorMessage = action.payload
    })
    .addCase(userDisplay.pending,(state,action)=>{
      state.isloading = true;
      state.isSuccess = false;
      state.isError = false
    })
    .addCase(userDisplay.fulfilled,(state,action)=>{
      state.isloading = false;
      state.isSuccess = true;
      state.isError = false;
      state.allUsersData = action.payload
    })
    .addCase(userDisplay.rejected,(state,action)=>{
      state.isloading = false;
      state.isSuccess = false;
      state.isError = true;
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
  async (verificationData) => {
    try {
      return await emailVerification(verificationData)
    } catch (error) {
      console.log(error.message,"verification error")
    }
  }
)

export const userDisplay = createAsyncThunk(
  "USER/DISPLAY",
  async (token) => {
    try {
      return await userDataDisplay(token)
    } catch (error) {
      console.log(error.message,"user data error")
    }
  }
)

export const {usersInfo, productsInfo, categoryInfo} = userSlice.actions
export default userSlice.reducer;
