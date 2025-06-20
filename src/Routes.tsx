import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Chart2 from './components/Graphs/Chart2';
import DashboardChart from './components/Graphs/DashboardChart';
import GraphGrafana from './components/Grafana/GraphGrafana';
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
        <Route path="/grafana-chart" element={<GraphGrafana/>} />


      </Routes>
    </Router>
  );
};

export default AppRoutes;