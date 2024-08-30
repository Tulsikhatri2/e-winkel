import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryCreate } from '../Redux/Category/categoryDataService'
import { displayingCategories } from '../Redux/Category/categorySlice'
import { Box, Button, TextField } from '@mui/material'
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'

const CreateCategory = () => {
    const [name,setName] = useState()
    const [categoryStatus, setCategoryStatus] = useState(false)
    const {userToken} = useSelector(state=>state.user)
    console.log(userToken,"token grom category")
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const categoryInfo = {
        name: name,
        status: categoryStatus,
        token:userToken
    }
  return (
    <>
    <Box className="createCategoryBox">
      <Box className="categoryInfo">
        <Box className="categoryCreateButton">
          <Button variant='contained' 
          sx={{color:"white",backgroundColor:"black",
            "&:hover":{
              color:'black',
              backgroundColor:"grey"
            }
          }}
          onClick={()=>{
            navigate("/dashboard")
          }}
          >
            <IoMdArrowBack size={20}/></Button>
        </Box>
        <Box sx={{textAlign:"center",display:"flex",
          flexDirection:"column",
          alignItems:"center",
          justifyContent:"space-between",
          width:"100%",
          height:"50%"
        }}>
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
              <Button variant='contained'
              sx={{color:"white",
                backgroundColor:"black",
                fontFamily: "Laila, serif",
                "&:hover":{
                  color:'black',
                  backgroundColor:"grey",
                }
              }}
              onClick={()=>{
                dispatch(categoryCreate(categoryInfo))
              }}
              >Create</Button>
        </Box>

      </Box>
    </Box>
    </>
    
  )
}

export default CreateCategory

// <p>Create Category</p>
//           <TextField
//               variant="standard"
//               sx={{width:"20vw",
//               }}
//               InputLabelProps={{
//                 style: {
//                   fontFamily: "Laila, serif",
//                 },
//               }}
//             ></TextField>


{/* <div>
        <input placeholder='category name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <button 
        onClick={()=>{
            dispatch(categoryCreate(categoryInfo))
        }}>Create Category</button>
        <button 
        onClick={()=>{
          dispatch(displayingCategories(userToken))
        }}>Display Category</button>
    </div> */}