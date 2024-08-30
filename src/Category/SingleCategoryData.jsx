import { Box, Button } from '@mui/material'
import React from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Loading from '../Pages/Loading'

const SingleCategoryData = () => {
    const navigate = useNavigate()
    const {singleCategory, isLoading} = useSelector(state=>state.category)
    console.log(singleCategory,"single category")
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
            isLoading?
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
                    marginTop:"5vh"
                  }}>
                      <p style={{lineHeight:"1.7"}}>ID: {singleCategory._id}<br/>
                      Name: {singleCategory.name}<br/>
                      Created At: {singleCategory.createAt}</p>
                  </Box>
            )
        }
        
        </Box>
      </Box>
    </>
  )
}

export default SingleCategoryData