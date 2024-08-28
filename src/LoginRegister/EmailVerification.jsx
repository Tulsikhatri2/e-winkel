import { Box, Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { emailVerificationProcess } from '../Redux/Users/userSlice'

const EmailVerification = () => {
    const dispatch = useDispatch()
    const {userSignupData} = useSelector(state => state.user)
    console.log(userSignupData,"signupdata")
  return (
    <Box className = "emailVerification">
        <Box className = "verificationPopup">
            <p>Click on the button below for email verification...</p>
            <Button
              variant="contained"
              className="loginButton"
              sx={{
                fontFamily: "Laila, serif",
                marginTop: "4vh",
                width: "50%",
                backgroundColor:"black",
                border:"1px solid black",
                fontWeight:"bold",
                fontSize:"2vh",
                "&:hover":{
                    backgroundColor:"white",
                    border:"1px solid black",
                    color:"black",
                    
                }
              }}
              onClick={()=>{
                dispatch(emailVerificationProcess(userSignupData.emailVerificationTOken,userSignupData.id))
              }}
            >
              Verify Email
            </Button>

        </Box>
    </Box>
  )
}

export default EmailVerification