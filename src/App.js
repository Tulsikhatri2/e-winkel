import React from 'react';
import './App.css';
import { Route,Routes, useNavigate } from 'react-router-dom';
import LoginUser from './LoginRegister/LoginUser';
import Signup from './LoginRegister/Signup';
import Home from './LoginRegister/Home';
// import PracticeData from './PracticeData';
import ForgotPassword from './LoginRegister/ForgotPassword';
import UserDashboard from './Dashboard/UserDashboard';
import { PracticeData } from './PracticeData';
import EmailVerification from './LoginRegister/EmailVerification';



function App() {
  const navigate = useNavigate()
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/loginUser" element={<LoginUser/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/practice" element={<PracticeData/>}/>
        <Route path="/forgotPassword" element = {<ForgotPassword/>}/>
        <Route path="/userDashboard" element={<UserDashboard/>}/>
        <Route path="/emailVerification" element={<EmailVerification/>}/>
      </Routes>
    </div>
  );
}

export default App;
