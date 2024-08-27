import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div>
        <button onClick={()=>{
            navigate("/loginUser")
        }}>Login</button>
        <button onClick={()=>{
            navigate("/signup")
        }}>Signup</button>
    </div>
  )
}

export default Home