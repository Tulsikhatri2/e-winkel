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
import CreateCategory from './Category/CreateCategory';
import SingleUserDetails from './Dashboard/SingleUserDetails';
import SingleCategoryData from './Category/SingleCategoryData';



function App() {
  return (
    <div>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/loginUser" element={<LoginUser/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/practice" element={<PracticeData/>}/>
        <Route path="/forgot-password" element = {<ForgotPassword/>}/>
        <Route path="/dashboard" element={<UserDashboard/>}/>
        <Route path="/emailVerification/:token/:id" element={<EmailVerification/>}/>
        <Route path="/createCategory" element={<CreateCategory/>}/>
        <Route path="/singleUserDetails" element={<SingleUserDetails/>}/>
        <Route path="/singleCategoryData" element={<SingleCategoryData/>}/>
      </Routes>
    </div>
  );
}

export default App;
