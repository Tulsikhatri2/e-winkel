import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { deletingUser, singleData, userDisplay } from "../Redux/Users/userSlice";
import { useDispatch } from "react-redux";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const UsersData = ({ users, userToken }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  return (
    <Box className="userData">
      <Box className="dataBox">
        <p style={{textAlign:"center", textDecoration:"underline", fontWeight:"bold"}}>ALL USERS</p>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    fontFamily: "Laila, serif",
                    fontWeight: "700",
                    fontSize: "2.5vh",
                    color: "#2586B6",
                    textAlign:"center"
                  }}
                >
                  ID
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: "Laila, serif",
                    fontWeight: "700",
                    fontSize: "2.5vh",
                    color: "#2586B6",
                    textAlign:"center"
                  }}
                >
                  NAME
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: "Laila, serif",
                    fontWeight: "700",
                    fontSize: "2.5vh",
                    color: "#2586B6",
                    textAlign:"center"
                  }}
                >
                  EMAIL
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: "Laila, serif",
                    fontWeight: "700",
                    fontSize: "2.5vh",
                    color: "#2586B6",
                    textAlign:"center"
                  }}
                >
                  UPDATE
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: "Laila, serif",
                    fontWeight: "700",
                    fontSize: "2.5vh",
                    color: "#2586B6",
                    textAlign:"center"
                  }}
                >
                  DELETE
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: "Laila, serif",
                    fontWeight: "700",
                    fontSize: "2.5vh",
                    color: "#2586B6",
                    textAlign:"center"
                  }}
                >
                  DETAILS
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((item, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell
                      sx={{
                        fontFamily: "Laila, serif",
                        fontWeight: "600",
                        fontSize: "2vh",
                        textAlign:"center"
                      }}
                    >
                      {item.id}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Laila, serif",
                        fontWeight: "600",
                        fontSize: "2vh",
                        textAlign:"center"
                      }}
                    >
                      {item.name}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Laila, serif",
                        fontWeight: "600",
                        fontSize: "2vh",
                        textAlign:"center"
                      }}
                    >
                      {item.email}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Laila, serif",
                        fontWeight: "200",
                        fontSize: "2vh",
                        textAlign:"center"
                      }}
                    >
                      <Button
                        variant="contained"
                        className="loginButton"
                        sx={{
                          fontFamily: "Laila, serif",
                          height: "4vh",
                          fontSize: "2.7vh",
                        }}
                        color="warning"
                      >
                        <CiEdit />
                      </Button>
                    </TableCell>

                    <TableCell
                      sx={{
                        fontFamily: "Laila, serif",
                        fontWeight: "200",
                        fontSize: "2vh",
                        textAlign:"center"
                      }}
                    >
                      <Button
                        variant="contained"
                        className="loginButton"
                        sx={{
                          fontFamily: "Laila, serif",
                          height: "4vh",
                          fontSize: "2.7vh",
                        }}
                        color="error"
                        onClick={() => {
                            const deleteInfo = {
                              id: item.id,
                              token: userToken,
                            };
                            dispatch(deletingUser(deleteInfo));
                            dispatch(userDisplay(userToken))
                          }}
                      >
                        <RiDeleteBin2Line />
                      </Button>
                    </TableCell>
                    <TableCell
                        sx={{
                          fontFamily: "Laila, serif",
                          fontWeight: "200",
                          fontSize: "2vh",
                          textAlign: "center",
                        }}
                      >
                        <Button
                          variant="contained"
                          className="loginButton"
                          sx={{
                            fontFamily: "Laila, serif",
                            height: "4vh",
                            fontSize: "1.7vh",
                          }}
                          color="error"
                          onClick={()=>{
                            const userDataTransfer = {
                              id: item.id,
                              token:userToken
                            }
                            navigate("/singleUserDetails")
                            dispatch(singleData(userDataTransfer))
                          }}
                        >
                          Details
                        </Button>
                      </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default UsersData;
