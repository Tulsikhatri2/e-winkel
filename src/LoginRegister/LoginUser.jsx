import { Box, Button, InputAdornment, TextField } from '@mui/material'
import React from 'react'
import { FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa'
import { FaCircleUser } from 'react-icons/fa6'
import { IoIosLock } from 'react-icons/io'


const LoginUser = () => { 
  return (
    <>
    <Box className="loginBackground">
        <Box className="loginBox">

            <Box className="heading">
                <p style={{marginTop:"-1vh"}}>Login</p>
            </Box>

            <Box className="loginFields">
              <TextField variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                   <FaCircleUser style={{fontSize:"3vh"}}/>
                  </InputAdornment>
                ),
              }}
               InputLabelProps={{
                style:{
                  fontFamily: "Laila, serif",
                }
              }}></TextField>
              <TextField variant="standard" sx={{marginTop:"2vh"}}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                   <IoIosLock  style={{fontSize:"3.5vh"}}/>
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                style:{
                  fontFamily: "Laila, serif",
                }
              }}></TextField>
              <Button variant="contained" className='loginButton' 
              sx={{ 
                fontFamily:"Laila, serif",
                marginTop:"4vh",
                width:"50%",
              }}
              >Login</Button>
              <p style={{fontSize:"1.6vh", marginTop:"4vh", color:"#075F96", cursor:"pointer"}}>Forgot Password?</p>
            </Box>

            <Box className="forgotPassword">
              -Or Sign In With-
            </Box>

            <Box className="loginOptions">
              <Box className="options">
              <FaGoogle />
              </Box>
              <Box className="options">
              <FaFacebookF />
              </Box>
              <Box className="options">
              <FaTwitter />
              </Box>
            </Box>
        </Box>
    </Box>
    </>
  )
}

export default LoginUser