// import ReactECharts from 'echarts-for-react';

// const DashboardChart = () => {
//   const option = {
//     title: {
//       text: 'Sample Chart',
//     },
//     tooltip: {},
//     legend: {
//       data: ['Sales'],
//     },
//     xAxis: {
//       data: ['Shirts', 'Cardigans', 'Chiffon', 'Pants', 'Heels', 'Socks'],
//     },
//     yAxis: {},
//     series: [
//       {
//         name: 'Sales',
//         type: 'bar', // could be 'line', 'pie', etc.
//         data: [5, 20, 36, 10, 10, 20],
//       },
//     ],
//   };

//   return (
//     <div className="bg-white p-4 rounded-lg shadow">
//       <ReactECharts option={option} style={{ height: '400px', width: '100%' }} />
//     </div>
//   );
// };

// export default DashboardChart;





import React, { useState } from 'react';
import ReactECharts from 'echarts-for-react';
import FilterComponent from '../Filters/Filter';

const DashboardChart = () => {
  const [activeTab, setActiveTab] = useState('Transactions');

  const option = {
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove',
      formatter: ({ data }: { data: any }) => {
        if (data.source && data.target) {
          return `${data.source} → ${data.target}<br/>${data.value.toLocaleString()}`;
        }
        return `${data.name}: ${data.value?.toLocaleString()}`;
      },
      
    },
    series: [
      {
        type: 'sankey',
        layout: 'none',
        nodeAlign: 'justify',
        lineStyle: {
          curveness: 0.5,
        },
        label: {
          show: true,
          fontSize: 14,
          formatter: ({ name, value }: { name: string; value: number }) => `${name}: ${formatValue(value)}`,
        },
        itemStyle: {
          borderWidth: 0,
        },
        data: [
          { name: 'Incoming', value: 8200000 },
          { name: 'Accept', value: 8100000 },
          { name: '3DS Challenge', value: 61400 },
          { name: 'Decline', value: 62300 },
          { name: 'Authenticated', value: 606600 },
          { name: 'No3ds', value: 7400000 },
          { name: 'Failed', value: 72500 },
          { name: 'Authorised', value: 7300000 },
          { name: 'Capture', value: 7200000 },
          { name: 'Skipped', value: 305 },
          { name: 'Void', value: 3 },
          { name: 'Voided', value: 4000 },
          { name: 'Fraud reported', value: 12400 },
          { name: 'Captured', value: 7200000 },
        ],
        links: [
          { source: 'Incoming', target: 'Accept', value: 8100000, lineStyle: { color: '#A7E6AE' } },
          { source: 'Incoming', target: '3DS Challenge', value: 61400, lineStyle: { color: '#A0C4FF' } },
          { source: 'Incoming', target: 'Decline', value: 62300, lineStyle: { color: '#FFA6A6' } },
          { source: 'Accept', target: 'Authenticated', value: 606600, lineStyle: { color: '#A7E6AE' } },
          { source: 'Accept', target: 'No3ds', value: 7400000, lineStyle: { color: '#A7E6AE' } },
          { source: 'Authenticated', target: 'Authorised', value: 606600, lineStyle: { color: '#A7E6AE' } },
          { source: 'Authenticated', target: 'Failed', value: 72500, lineStyle: { color: '#FFA6A6' } },
          { source: 'No3ds', target: 'Authorised', value: 6693400, lineStyle: { color: '#A7E6AE' } },
          { source: 'Authorised', target: 'Capture', value: 7200000, lineStyle: { color: '#A7E6AE' } },
          { source: 'Authorised', target: 'Decline', value: 753300, lineStyle: { color: '#FFA6A6' } },
          { source: 'Capture', target: 'Captured', value: 7200000, lineStyle: { color: '#A7E6AE' } },
          { source: 'Capture', target: 'Skipped', value: 305, lineStyle: { color: '#A7E6AE' } },
          { source: 'Capture', target: 'Void', value: 3, lineStyle: { color: '#FFA6A6' } },
          { source: 'Skipped', target: 'Voided', value: 4000, lineStyle: { color: '#FFA6A6' } },
          { source: 'Skipped', target: 'Fraud reported', value: 12400, lineStyle: { color: '#FFA6A6' } },
        ],
      },
    ],
  };

  return (
    <>
    <FilterComponent/>
    <div className="p-6 bg-white rounded-lg shadow-md w-full">
      <h2 className="text-2xl font-semibold mb-4">Transaction journeys</h2>

      {/* Tabs */}
      <div className="flex space-x-6 border-b border-gray-300 mb-3">
        <button
          onClick={() => setActiveTab('Amount')}
          className={`pb-2 ${activeTab === 'Amount' ? 'border-b-2 border-black font-medium' : 'text-gray-400'}`}
        >
          Amount
        </button>
        <button
          onClick={() => setActiveTab('Transactions')}
          className={`pb-2 ${activeTab === 'Transactions' ? 'border-b-2 border-blue-500 text-black font-medium' : 'text-gray-400'}`}
        >
          Transactions
        </button>
      </div>

      {/* Stage Headers */}
      <div className="flex justify-between text-center mt-7 text-sm text-gray-600 font-medium mb-3 px-2">
        <span>Incoming transactions</span>
        <span>→ Pre-auth</span>
        <span>→ Authentication</span>
        <span>→ Authorisation</span>
        <span>→ Post-auth</span>
        <span>→ Current status</span>
      </div>

      {/* Chart */}
      <ReactECharts option={option} style={{ height: '500px', width: '100%' }} />
    </div>
    </>

  );
};

// Format number to readable units like 7.2M, 61.4K, etc.
const formatValue = (value: number): string => {
  if (value >= 1_000_000) return (value / 1_000_000).toFixed(1) + 'M';
  if (value >= 1_000) return (value / 1_000).toFixed(1) + 'K';
  return value.toString();
};

export default DashboardChart;
