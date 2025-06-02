import React, { useState } from 'react';
import ReactECharts from 'echarts-for-react';
import FilterComponent from '../Filters/Filter';
import { Navigation } from '../Navigation';

const Chart2 = () => {
  const chartOptions = {
    title: {
      text: 'DFS vs KFS  (last 7 days)',
      left: 'left',
      top: 0,
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
      },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
    },
    // legend: {
    //   bottom: 10,
    //   data: ['DFS < KFS (approved)', 'DFS > KFS (declined)'],
    // },
    xAxis: {
      type: 'category',
      data: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    },
    yAxis: { type: 'value' },
    series: [
      {
        name: 'DFS < KFS (approved)',
        type: 'bar',
        stack: 'total',
        data: [300, 150, 250, 200, 220, 0, 270],
        itemStyle: { color: '#C6F6D5' },
      },
      {
        name: 'DFS > KFS (declined)',
        type: 'bar',
        stack: 'total',
        data: [-50, -100, -80, -90, -120, -150, -100],
        itemStyle: { color: '#FED7D7' },
      },
    ],
  };

  const transactions = Array.from({ length: 4 }).map((_, i) => ({
    date: `2025-06-0${i + 1}`,
    omt: `OMT-${1000 + i}`,
    pspRef: `PSP-${2000 + i}`,
    kountDecision: 'Approved',
    datmanDecision: 'Approved',
  }));


    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  

  return (
    <>
        <Navigation isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}>

    <FilterComponent/>
    
<div className="p-6 mt-3 bg-white rounded-xl shadow w-full">

{/* Chart begins */}
      <ReactECharts option={chartOptions} style={{ height: '400px', width: '100%' }} />

      {/* Legend */}
      <div className="flex flex-col gap-6 justify-center mt-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-200 rounded-sm"></div>
          <span>DFS &lt; KFS (should be approved)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-200 rounded-sm"></div>
          <span>DFS &gt; KFS (should be declined)</span>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="mt-10">
        <h2 className="font-semibold text-base mb-2">Transactions</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-300">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-2 border">Date</th>
                <th className="p-2 border">OMT</th>
                <th className="p-2 border">PSP reference</th>
                <th className="p-2 border">Kount decision</th>
                <th className="p-2 border">Datman decision</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, i) => (
                <tr key={i}>
                  <td className="p-2 border">{tx.date}</td>
                  <td className="p-2 border">{tx.omt}</td>
                  <td className="p-2 border">{tx.pspRef}</td>
                  <td className="p-2 border">{tx.kountDecision}</td>
                  <td className="p-2 border">{tx.datmanDecision}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-sm text-right mt-1 text-gray-500">DFS &lt; KFS</div>
      </div>
    </div>
    </Navigation>
    </>

  );
};

export default Chart2;
