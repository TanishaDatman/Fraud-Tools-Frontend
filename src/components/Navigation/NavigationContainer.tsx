import React, { useState } from 'react';
import Navigation from './Navigation';
import DashboardChart from '../Graphs/DashboardChart';
import Estimates from '../Analysis/Estimates';
import Table from '../Analysis/Table';
import Chart2 from '../Graphs/Chart2';

const NavigationContainer = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Navigation isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}>
      <div>
       
        {/* <DashboardChart/>
        <Estimates/>
        <Table/> */}
        {/* <Chart2/> */}
      </div>
    </Navigation>
  );
};

export default NavigationContainer;
