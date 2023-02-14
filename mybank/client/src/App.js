import './App.css';
import React from 'react'
import Header from './components/Header';
import Home from './pages/Home'
import MyProfile from './pages/MyProfile'
import Transactions from './pages/Transactions'
import NewUser from './pages/NewUser'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPasssword';
import SendMoney from './pages/SendMoney';


function App() {
  return (
    <BrowserRouter>
      {/* {(Route.path == "/user/login" || Route.path == "/user/register") ? null : <Header />} */}
      <Header/>

      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/user/profile" element={<MyProfile />} />
        <Route exact path="/user/transactions" element={<Transactions />} />
        <Route exact path="/newuser" element={<NewUser />} />
        <Route exact path="/user/register" element={<Register />} />
        <Route exact path="/user/login" element={<Login />} />
        <Route exact path="/user/forgotpassword" element={<ForgotPassword />} />
        <Route exact path="/user/sendmoney" element={<SendMoney />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
