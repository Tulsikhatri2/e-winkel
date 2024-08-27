import { Box, Button, InputLabel, Select, TextField, MenuItem } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countryDisplay } from "../Redux/Countries/countrySlice";

const Signup = () => {

  const { countries } = useSelector((state) => state.country);
  console.log(countries,"signup countries data")
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(countryDisplay());
  }, []);

  return (
    <>
      <Box className="loginBackground">

        <Box className="singupDetails">

          <Box className="heading">
            <p style={{ marginTop: "-1vh" }}>Signup</p>
          </Box>

          <Box className="signupFields">
          <TextField variant="standard"
              label="First Name"
               InputLabelProps={{
                style:{
                  fontFamily: "Laila, serif",
                  fontWeight:"bold"
                }
              }}></TextField>
          <TextField variant="standard"
              label="Last Name"
               InputLabelProps={{
                style:{
                  fontFamily: "Laila, serif",
                  fontWeight:"bold"
                }
              }}></TextField>
              <TextField variant="standard"
              label="Email"
               InputLabelProps={{
                style:{
                  fontFamily: "Laila, serif",
                  fontWeight:"bold"
                }
              }}></TextField>
              <TextField variant="standard"
              label="Contact Number"
               InputLabelProps={{
                style:{
                  fontFamily: "Laila, serif",
                  fontWeight:"bold"
                }
              }}></TextField>

              <Box>
              <select className="countryOptions">
                <option>Select Country</option>
              {
                  countries.map((item)=>{
                    return (
                        <option value={item.name} key={item.id}>
                          {item.name}
                        </option>
                    );
                  })
                }
              </select>
              <Select label="select state"></Select>
              <Select label="select city"></Select>
              
              </Box>
          </Box>

          <Box className="signupButton">
          <Button variant="contained" 
              sx={{ 
                fontFamily:"Laila, serif",
                marginTop:"4vh",
                width:"50%",
                backgroundColor:"#442284",
                "&:hover":{
                  backgroundColor:"white",
                  color:"#442284",
                  fontWeight:"700"
                }
              }}
              >Get Started</Button>
              </Box>
        </Box>
      </Box>
    </>
  );
};

export default Signup;
