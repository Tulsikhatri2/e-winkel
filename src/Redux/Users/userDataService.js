import axios from "axios";

export const userLogin = async (userData) => {
    const response = await axios.post("https://node-js-wse4.onrender.com/user/login",userData)
    return response.data.data
}

export const userSignup = async (sigupInfo) => {
    const response = await axios.post("https://node-js-wse4.onrender.com/user",sigupInfo)
    return response.data.data
}

export const forgotPassword = async (userEmail) => {
    const response = await axios.post("https://node-js-wse4.onrender.com/user/forgot-password",userEmail)
}

export const emailVerification = async (verificationData) => {
    const {token , id} = verificationData
    const response = await axios.get(`https://node-js-wse4.onrender.com/user/email/verification?token=${token}&userId=${id}`)
    return response.data.message
} 

export const userDataDisplay = async (token) =>{
    const response = await axios.get("https://node-js-wse4.onrender.com/user?pageNumber=1&pageSize=10",{
        "headers":{
            "Authorization" : "Bearer " + token
        }
    })
    console.log(response.data.data)
    return response.data.data
}