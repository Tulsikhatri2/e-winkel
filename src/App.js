import React from 'react';
import './App.css';
import { Route,Routes, useNavigate } from 'react-router-dom';
import LoginUser from './LoginRegister/LoginUser';
import Signup from './LoginRegister/Signup';
import Home from './LoginRegister/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ForgotPassword from './LoginRegister/ForgotPassword';
import UserDashboard from './Dashboard/UserDashboard';
import PracticeData from './PracticeData';
import EmailVerification from './LoginRegister/EmailVerification';



function App() {
  const navigate = useNavigate()
  return (
    <div>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/loginUser" element={<LoginUser/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/practice" element={<PracticeData/>}/>
        <Route path="/forgotPassword" element = {<ForgotPassword/>}/>
        <Route path="/userDashboard" element={<UserDashboard/>}/>
        <Route path="/emailVerification/:token/:id" element={<EmailVerification/>}/>
      </Routes>
    </div>
  );
}

export default App;
