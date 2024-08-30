import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletingUser, singleData, userDisplay } from "./Redux/Users/userSlice";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin2Line } from "react-icons/ri";
import { productsDataDisplay } from "./Redux/Products/productSlice";
import { singleCategoryDisplay } from "./Redux/Category/categoryDataService";
import { singleCategoryData } from "./Redux/Category/categorySlice";

const PracticeData = () => {
  const dispatch = useDispatch();
  const { userToken, singleUserData } = useSelector((state) => state.user);
  console.log(singleUserData, "from practice");
  return (
    <div>
      <button onClick={()=>{
        dispatch(singleCategoryData(userToken))
      }
      }>
        single category Data
      </button>
      </div>
  );
};

export default PracticeData;
