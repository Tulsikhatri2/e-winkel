import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/logo.PNG"

const Home = () => {
  const navigate = useNavigate();
  return (
    <Box className="homePage">
      <AppBar position="static" >
        <Toolbar sx={{ backgroundColor:"white" }} className="nav">
          <img src={logo} width="7%" height="80%" style={{marginLeft:"5vw"}}/>
          <Box className="buttons">
          <Button variant="contained"
          sx={{
            fontFamily: "Laila, serif"}}
            onClick={()=>{
              navigate("/loginUser")
            }}>Login</Button>
          <Button variant="contained"
          sx={{
            fontFamily: "Laila, serif"}}
            onClick={()=>{
              navigate("/signup")
            }}>Signup</Button>
          </Box>
        </Toolbar>
        
      </AppBar>
    </Box>
  );
};

export default Home;
