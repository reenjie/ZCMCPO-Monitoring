import React from 'react'
import { Routes, Route, Outlet, useLocation, Navigate } from 'react-router-dom';
import Homepage from '../resources/pages/Homepage';
function Web() {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>}></Route>
    </Routes>
  )
}

export default Web