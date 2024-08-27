import React from 'react';
import './App.css';
import { Route,Routes, useNavigate } from 'react-router-dom';
import LoginUser from './LoginRegister/LoginUser';
import Signup from './LoginRegister/Signup';
// import Home from './LoginRegister/Home';
import PracticeData from './PracticeData';



function App() {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={()=>navigate("/loginUser")}>login</button>
      <button>sugnup</button>
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/loginUser" element={<LoginUser/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/practice" element={<PracticeData/>}/>
      </Routes>
    </div>
  );
}

export default App;
