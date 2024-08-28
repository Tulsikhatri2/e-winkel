import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { citiesDisplay, countryDisplay, statesDisplay } from "../Redux/Countries/countrySlice";
import { signupUser } from "../Redux/Users/userSlice";
import { useNavigate } from "react-router-dom";
import Loading from "../Pages/Loading";

const Signup = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [contact, setContact] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const { countries, states, cities } = useSelector((state) => state.country);
  const {isloading,isSuccess} = useSelector(state=>state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(citiesDisplay())
    dispatch(countryDisplay());
    dispatch(statesDisplay())
  }, []);

  {isSuccess?navigate("/emailVerification") :<p></p> }
  return (
    <>
      <Box className="loginBackground">

        <Box className="singupDetails">

          <Box className="heading" sx={{ marginTop: "-8vh" }}>
            <p >Signup</p>
          </Box>

          <Box className="signupFields">
          <TextField variant="standard"
              label="Name*"
               InputLabelProps={{
                style:{
                  fontFamily: "Laila, serif",
                  fontWeight:"bold",
                  fontSize:"2vh"
                }
              }}
              value={name}
              onChange={(e)=>setName(e.target.value)}></TextField>
              <TextField variant="standard"
              label="Email*"
               InputLabelProps={{
                style:{
                  fontFamily: "Laila, serif",
                  fontWeight:"bold",
                  fontSize:"2vh"
                }
              }}
              value={email}
              onChange={(e)=>setEmail(e.target.value)}></TextField>
              <TextField variant="standard"
              label="Contact Number"
               InputLabelProps={{
                style:{
                  fontFamily: "Laila, serif",
                  fontWeight:"bold",
                  fontSize:"2vh"
                }
              }}
              value={contact}
              onChange={(e)=>setContact(e.target.value)}></TextField>
              <TextField variant="standard"
              label="Password*"
               InputLabelProps={{
                style:{
                  fontFamily: "Laila, serif",
                  fontWeight:"bold",
                  fontSize:"2vh"
                }
              }}
              value={password}
              onChange={(e)=>setPassword(e.target.value)}></TextField>
              <TextField variant="standard"
              label="Confirm Password*"
               InputLabelProps={{
                style:{
                  fontFamily: "Laila, serif",
                  fontWeight:"bold",
                  fontSize:"2vh"
                }
              }}
              value={confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}></TextField>
              <Box className="selectOptions">
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
              <select className="countryOptions">
                <option>Select State</option>
              {
                  states.map((item)=>{
                    return (
                        <option value={item.name} key={item.id}>
                          {item.name}
                        </option>
                    );
                  })
                }
              </select>
              <select className="countryOptions">
                <option>Select Cities</option>
              {
                  cities.map((item)=>{
                    return (
                        <option value={item.name} key={item.id}>
                          {item.name}
                        </option>
                    );
                  })
                }
              </select>
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
              onClick={()=>{
                const signupInfo = {name,email,password}
                dispatch(signupUser(signupInfo))
              }}
              >Get Started</Button>
              {isloading ? (
                <>
                  <Loading/>
                </>
              ) : (
                <p></p>
              )}
              </Box>
        </Box>
      </Box>
    </>
  );
};

export default Signup;
