import { Box, Button, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { IoIosLock } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, userPasswordForgot } from "../Redux/Users/userSlice";
import { useNavigate } from "react-router-dom";
import Loading from "../Pages/Loading";

const LoginUser = () => {
  const { userToken, isloading } = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (userToken) {
    navigate("/userDashboard")
  }

  return (
    <>
      <Box className="loginBackground">
        <Box className="loginBox">
          <Box className="heading">
            <p style={{ marginTop: "-1vh" }}>Login</p>
          </Box>

          <Box className="loginFields">
            <TextField
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FaCircleUser style={{ fontSize: "3vh" }} />
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                style: {
                  fontFamily: "Laila, serif",
                },
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></TextField>
            <TextField
              variant="standard"
              sx={{ marginTop: "2vh" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IoIosLock style={{ fontSize: "3.5vh" }} />
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                style: {
                  fontFamily: "Laila, serif",
                },
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></TextField>
            <Button
              variant="contained"
              className="loginButton"
              sx={{
                fontFamily: "Laila, serif",
                marginTop: "4vh",
                width: "50%",
              }}
              onClick={() => {
                const userInfo = { email, password };
                dispatch(loginUser(userInfo));
              }}
            >
              Login
            </Button>
            <Box
              sx={{
                width: "80%",
                height: "5%",
                display: "flex",
                flexDirection: "row",
                marginTop: "3vh",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {isloading ? (
                <>
                  <Loading/>
                </>
              ) : (
                <p></p>
              )}
            </Box>
            <p
              className="resetPassword"
              onClick={() => {
                dispatch(userPasswordForgot(email))
                // navigate("/forgotPassword");
              }}
            >
              Forgot Password?
            </p>
          </Box>

          <Box className="otherOptions">-Or Sign In With-</Box>

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
          <Box className="registerOption">
            Not a user?{" "}
            <span
              className="registration"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Register
            </span>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LoginUser;
