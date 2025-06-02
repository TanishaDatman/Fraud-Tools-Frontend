import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { NavigationContainer } from './components/Navigation';
// import { isAuthenticated } from './utils/auth';

// const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
//   return isAuthenticated() ? children : <Navigate to="/navigation" />;
// };

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavigationContainer />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;