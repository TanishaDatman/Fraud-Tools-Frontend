import React, { useState } from 'react';
import Navigation from './Navigation';
import DashboardChart from '../Graphs/DashboardChart';

const NavigationContainer = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Navigation isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}>
      <div>
        {/* <h1 className="text-2xl font-bold">Welcome, Tanisha</h1>
        <p className="text-gray-300">Role: Fraud Monitor</p> */}
        <DashboardChart/>
      </div>
    </Navigation>
  );
};

export default NavigationContainer;
