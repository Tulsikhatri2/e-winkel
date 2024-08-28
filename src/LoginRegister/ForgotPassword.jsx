import { Box, Button, TextField } from "@mui/material";
import React from "react";

const ForgotPassword = () => {
  return (
    <Box className="forgotPassword">
      <Box className="passwordInfo">
        <p style={{fontWeight:"bold", fontSize:"3vh", textDecoration:"underline", marginTop:"-1vh"}}>Reset Password</p>
        <TextField
          variant="standard"
          label="New Password"
          InputLabelProps={{
            style: {
              fontFamily: "Laila, serif",
              fontWeight:"bold",
              marginLeft:"2.5vw",
              fontSize:"2.3vh"
            },
          }}
        ></TextField>
        <TextField
          variant="standard"
          label="Confirm Password"
          InputLabelProps={{
            style: {
              fontFamily: "Laila, serif",
              fontWeight:"bold",
              marginLeft:"2.5vw",
              fontSize:"2.3vh"
            },
          }}
          sx={{marginTop:"2vh"}}
        ></TextField>
        <Button
              variant="contained"
              className="loginButton"
              sx={{
                fontFamily: "Laila, serif",
                marginTop: "4vh",
                width: "50%",
              }}
            >
              Reset
            </Button>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
