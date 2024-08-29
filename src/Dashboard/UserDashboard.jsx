import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import logo from "../Assets/logo.PNG";
import { Button } from "@mui/material";
import { categoryInfo, productsInfo, userDisplay, usersInfo } from "../Redux/Users/userSlice";
import { useDispatch, useSelector } from "react-redux";
import UsersData from "./UsersData";
import ProductData from "./ProductData";
import CategoryData from "./CategoryData";

const UserDashboard = () => {
  const dispatch = useDispatch();
  const {userToken,allUsersData, isUser,isProduct,isCategory} = useSelector(state=>state.user)
  console.log(allUsersData,"users data from dashboard")
  return (
    <Box className="dashboard">
      <Box className="dashboardNav">
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar sx={{ backgroundColor: "white" }} className="nav">
            <img
              src={logo}
              width="7%"
              height="80%"
              style={{ marginLeft: "5vw" }}
            />
          </Toolbar>
        </AppBar>

        <Box className="dashboardDetails">
          <Box className="sideDrawer">
            <p
              onClick={() => {
                dispatch(userDisplay(userToken));
                dispatch(usersInfo(true))
              }}
            >
              Users
            </p>

            <p
            onClick={()=>{
              dispatch(categoryInfo(true))
            }}>Categories</p>

            <p
            onClick={()=>{
              dispatch(productsInfo(true))
            }}>Products</p>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "red",
                fontFamily: "Laila, serif",
                fontWeight: "bold",
                marginTop: "3vh",
                "&:hover": {
                  backgroundColor: "#C4C4C4",
                  color: "red",
                  fontWeight: "bold",
                },
              }}
            >
              Logout
            </Button>
          </Box>
          <Box>
            {isUser?(
              <>
              <UsersData users={allUsersData}/>
              </>
            ):
            (isProduct?(<>
            <ProductData/>
            </>):
            (isCategory?(
              <>
              <CategoryData/>
              </>
            ):(<></>)))}
            
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UserDashboard;
