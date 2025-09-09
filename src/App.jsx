import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Income from './pages/Income.jsx'
import AdminLogin from './pages/AdminLogin.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'

export default function App(){
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/income' element={<Income/>} />
        <Route path='/admin/login' element={<AdminLogin/>} />
        <Route path='/admin/dashboard' element={<AdminDashboard/>} />
        <Route path='*' element={<Navigate to='/' replace/>} />
      </Routes>
    </div>
  )
}
