import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from '../pages/LandingPage';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login route */}
        <Route path="/" element={<LandingPage />} />

        

      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes

