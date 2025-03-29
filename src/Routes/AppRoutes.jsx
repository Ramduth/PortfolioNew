import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from '../pages/LandingPage';
import Four from '@/pages/Four';
import FeatureCard from '@/components/FeatureCard';
import Third from '@/pages/Third';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login route */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/four" element={<Four />} />
        FeatureCard
        <Route path="/fcard" element={<FeatureCard />} />
        <Route path="/accord" element={<Third />} />
        

      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes

