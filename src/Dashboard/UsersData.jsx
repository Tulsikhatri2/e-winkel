import { Box } from '@mui/material'
import React from 'react'

const UsersData = ({users}) => {
  return (
    <Box className="userData">
        <Box className="dataBox">
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>UPDATE</th>
                    <th>DELETE</th>
                </tr>
                </thead>
                <tbody>
                    {
                        users.map((item,index)=>{
                            return(
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td><button>UPDATE</button></td>
                                <td><button>DELETE</button></td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </Box>
    </Box>
  )
}

export default UsersData