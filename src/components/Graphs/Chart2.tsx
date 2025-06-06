import React, { useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { Navigation } from '../Navigation';
import FilterComponent from '../Filters/Filter';
import Filter2 from '../Filters/Filter2';

type FilterKey = 'DFS < KFS' | 'DFS > KFS';


const Chart2 = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const chartOptions = {
    title: {
      text: 'DFS vs KFS (last 7 days)',
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

  const allTransactions = {
    'DFS < KFS': [
      {
        date: '01-06-2025',
        omt: 'OMT-1001',
        pspRef: 'PSP-2001',
        kountDecision: 'Approved',
        datmanDecision: 'Approved',
      },
      {
        date: '02-06-2025',
        omt: 'OMT-1002',
        pspRef: 'PSP-2002',
        kountDecision: 'Approved',
        datmanDecision: 'Approved',
      },
    ],
    'DFS > KFS': [
      {
        date: '03-06-2025',
        omt: 'OMT-1003',
        pspRef: 'PSP-2003',
        kountDecision: 'Declined',
        datmanDecision: 'Declined',
      },
      {
        date: '04-06-2025',
        omt: 'OMT-1004',
        pspRef: 'PSP-2004',
        kountDecision: 'Declined',
        datmanDecision: 'Declined',
      },
    ],
  };


  const [selectedFilter, setSelectedFilter] = useState<FilterKey>('DFS < KFS');

  const transactions = allTransactions[selectedFilter];

  return (
    <>
    <Navigation isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}>
        <FilterComponent/>
      <div className="p-6 mt-3 bg-white rounded-xl shadow w-full">


        {/* Chart */}
        <ReactECharts option={chartOptions} style={{ height: '400px', width: '100%' }} />


         {/* Filter Dropdown */}
         {/* <div className="mb-4">
          <label className="mr-2 font-medium text-sm">Filter:</label>
          <select
            className="border px-3 py-1 rounded text-sm"
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value as FilterKey)}
            >
            <option value="DFS < KFS">DFS &lt; KFS</option>
            <option value="DFS > KFS">DFS &gt; KFS</option>
          </select>
        </div> */}
<Filter2
  selectedFilter={selectedFilter}
  setSelectedFilter={setSelectedFilter}
/>

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
                {transactions.map((tx:any, i:any) => (
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
          {/* <div className="text-sm text-right mt-1 text-gray-500">{selectedFilter}</div> */}
        </div>
      </div>
    </Navigation>
    </>
  );
};

export default Chart2;
