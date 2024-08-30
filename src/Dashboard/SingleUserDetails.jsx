import { Box, Button } from "@mui/material";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MdVerifiedUser } from "react-icons/md";
import { ImCross } from "react-icons/im";
import Loading from "../Pages/Loading";

const SingleUserDetails = () => {
    const {singleUserData,isloading} = useSelector(state=>state.user)
    console.log(singleUserData,"userData")
    const navigate = useNavigate()

    
  return (
    <>
      <Box className="singleData">
        <Box className="detailsCard">
        <Box className="categoryCreateButton" sx={{height:"20%"}}>
          <Button variant='contained' 
          sx={{color:"#0a3149",backgroundColor:"white",
            "&:hover":{
              color:'white',
              backgroundColor:"#55a3d4"
            }
          }}
          onClick={()=>{
            navigate("/dashboard")
          }}
          >
            <IoMdArrowBack size={20}/></Button>
        </Box>
        {
            isloading?
            <Box sx={{display:"flex",
                alignItems:"center",
                justifyContent:"center"
            }}>
                <Loading/>
            </Box>:
            (
                <Box sx={{
                    textAlign:"center",
                    display:"flex",
                    flexDirection:"column",
                    width:"100%",
                    height:"70%",
                    color:"#0a3149",
                    fontSize:"2vh",
                    fontWeight:"500",  
                  }}>
                      {singleUserData.isEmailVerified?
                      <p style={{color:"green"}}><MdVerifiedUser size={20}/><br/>verified user</p> :<p style={{color:"maroon"}}><ImCross size={20}/><br/>unverified user</p>}
                      <p style={{lineHeight:"1.7"}}>ID: {singleUserData.id}<br/>
                      Name: {singleUserData.name}<br/>
                      Email: {singleUserData.email}<br/>
                      Created At: {singleUserData.createAt}</p>
                  </Box>
            )
        }
        
        </Box>
      </Box>
    </>
  );
};

export default SingleUserDetails;
