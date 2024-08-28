import axios from "axios";

export const userLogin = async (userData) => {
    console.log(userData,"login Data")
    const response = await axios.post("https://node-js-wse4.onrender.com/user/login",userData)
    return response.data.data
}

export const userSignup = async (sigupInfo) => {
    const response = await axios.post("https://node-js-wse4.onrender.com/user",sigupInfo)
    return response.data.data
    // console.log(response,"response from user service")
}

export const forgotPassword = async (userEmail) => {
    const response = await axios.post("https://node-js-wse4.onrender.com/user/forgot-password",userEmail)
    console.log(response,"forgot password response")
}

export const emailVerification = async (token,id) => {
    console.log(token,id,"verification information")
} 