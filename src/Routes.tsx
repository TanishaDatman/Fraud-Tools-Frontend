import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { NavigationContainer } from './components/Navigation';
import Chart2 from './components/Graphs/Chart2';
import DashboardChart from './components/Graphs/DashboardChart';
// import { isAuthenticated } from './utils/auth';

// const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
//   return isAuthenticated() ? children : <Navigate to="/navigation" />;
// };

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardChart />} />
        <Route path="/chart" element={<Chart2 />} />

      </Routes>
    </Router>
  );
};

export default AppRoutes;