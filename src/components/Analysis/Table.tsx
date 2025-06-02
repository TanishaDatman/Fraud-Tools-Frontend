// import React, { useState } from 'react';
// import { Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   LineElement,
//   PointElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

// const tableData = Array.from({ length: 20 }).map((_, i) => ({
//   id: i + 1,
//   rule: 'Velocity Rule - Email - Decline',
//   declinedAmount: '3,11,279.88 USD',
//   totalAmount: '25,44,68,029.48 USD',
//   declinedTransactionsCount: '8,439',
//   declinedCount: '7,817,501',
//   percentDecline: '0.11%',
//   trendData: [0, 3, 1, 4, 3, 5], // This is just sample data for my flowbite line chart
// }));

// const PAGE_SIZE = 4;

// const Table = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [expandedRow, setExpandedRow] = useState(null);

//   const totalPages = Math.ceil(tableData.length / PAGE_SIZE);
//   const currentData = tableData.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

//   return (
//     <div className="p-6 bg-white rounded-xl shadow">
//       <table className="min-w-full border border-gray-700 rounded-xl overflow-hidden">
//         <thead className="bg-gray-100 text-left text-sm text-gray-700">
//           <tr className="border-b">
//             <th className="p-3">Risk rule</th>
//             <th className="p-3">Declined Amount</th>
//             <th className="p-3">Total Amount</th>
//             <th className="p-3">Declined Transactions Count</th>
//             <th className="p-3">Declined Count</th>
//             <th className="p-3">% Decline</th>
//             <th className="p-3">Trend</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentData.map((item:any) => (
//             <React.Fragment key={item.id}>
//               <tr
//                 onClick={() => setExpandedRow(expandedRow === item.id ? null : item.id)}
//                 className="border-b border-gray-600 text-sm cursor-pointer hover:bg-gray-100"
//               >
//                 <td className="p-3 font-bold">
//                   {item.id}. {item.rule}
//                 </td>
//                 <td className="p-3 text-red-600 font-bold">{item.declinedAmount}</td>
//                 <td className="p-3 font-bold">{item.totalAmount}</td>
//                 <td className="p-3 font-bold text-red-600">{item.declinedTransactionsCount}</td>
//                 <td className="p-3 font-bold">{item.declinedCount}</td>
//                 <td className="p-3 font-bold">{item.percentDecline}</td>
//                 <td className="p-3 w-32">
//                   <div className="w-20 h-10">
//                     <Line
//                       data={{
//                         labels: ['', '', '', '', '', ''],
//                         datasets: [
//                           {
//                             label: 'Trend',
//                             data: item.trendData,
//                             borderColor: '#DC2626',
//                             backgroundColor: 'transparent',
//                             tension: 0.3,
//                           },
//                         ],
//                       }}
//                       options={{
//                         responsive: true,
//                         maintainAspectRatio: false,
//                         plugins: {
//                           legend: { display: false },
//                         },
//                         scales: {
//                           x: { display: false },
//                           y: { display: false },
//                         },
//                       }}
//                     />
//                   </div>
//                 </td>
//               </tr>

//               {/* Expanded Row */}
//               {expandedRow === item.id && (
//                 <tr>
//                   <td colSpan={7} className="bg-gray-50 col-span-7 p-4">
//                     <div>
//                       <h3 className="font-semibold mb-2">Transactions</h3>
//                       <table className="w-full text-sm border border-gray-300">
//                         <thead className="bg-gray-100">
//                           <tr>
//                             <th className="p-2 border">Date</th>
//                             <th className="p-2 border">OMT</th>
//                             <th className="p-2 border">PSP reference</th>
//                             <th className="p-2 border">Datman decision</th>
//                           </tr>
//                         </thead>
//                         <tbody>

//                           {Array.from({ length: 3 }).map((_, i) => (
//                             <tr key={i}>
//                               <td className="p-2 border">0{i + 1}-06-2025</td>
//                               <td className="p-2 border">OMT-{item.id * 10 + i}</td>
//                               <td className="p-2 border">PSP-{item.id * 100 + i}</td>
//                               <td className="p-2 border">Approved</td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   </td>
//                 </tr>
//               )}
//             </React.Fragment>
//           ))}
//         </tbody>
//       </table>

//       {/* Pagination */}
//       <div className="flex justify-end items-center mt-4 text-sm gap-4">
//         <button
//           onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//           className="px-2 py-1 hover:text-black"
//           disabled={currentPage === 1}
//         >
//           &lt;
//         </button>
//         <span>
//           {currentPage} / {totalPages}
//         </span>
//         <button
//           onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//           className="px-2 py-1 hover:text-black"
//           disabled={currentPage === totalPages}
//         >
//           &gt;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Table;



import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

const tableData = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  rule: 'Velocity Rule - Email - Decline',
  declinedAmount: '3,11,279.88 USD',
  totalAmount: '25,44,68,029.48 USD',
  declinedTransactionsCount: '8,439',
  declinedCount: '7,817,501',
  percentDecline: '0.11%',
  trendData: [0, 3, 1, 4, 3, 5],
}));

const PAGE_SIZE = 4;
const EXPANDED_PAGE_SIZE = 5;

const Table = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [expandedPage, setExpandedPage] = useState(1);

  const totalPages = Math.ceil(tableData.length / PAGE_SIZE);
  const currentData = tableData.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const selectedRowData = tableData.find((item) => item.id === expandedRow);

  // Simulate transactions
  const transactions = Array.from({ length: 7 }).map((_, i) => ({
    date: `0${i + 1}-06-2025`,
    omt: `OMT-${selectedRowData?.id ?? 0}-${i}`,
    psp: `PSP-${selectedRowData?.id ?? 0}-${i}`,
    decision: 'Approved',
  }));

  const expandedTotalPages = Math.ceil(transactions.length / EXPANDED_PAGE_SIZE);
  const paginatedTransactions = transactions.slice(
    (expandedPage - 1) * EXPANDED_PAGE_SIZE,
    expandedPage * EXPANDED_PAGE_SIZE
  );

  const handleRowClick = (id: number) => {
    setExpandedRow(id === expandedRow ? null : id);
    setExpandedPage(1); // Reset expanded pagination on new row click
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow">
      {/* Main Table */}
      <table className="min-w-full border border-gray-700 rounded-xl overflow-hidden">
        <thead className="bg-gray-100 text-left text-sm text-gray-700">
          <tr className="border-b">
            <th className="p-3">Risk rule</th>
            <th className="p-3">Declined Amount</th>
            <th className="p-3">Total Amount</th>
            <th className="p-3">Declined Transactions Count</th>
            <th className="p-3">Declined Count</th>
            <th className="p-3">% Decline</th>
            <th className="p-3">Trend</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
            <tr
              key={item.id}
              onClick={() => handleRowClick(item.id)}
              className="border-b border-gray-600 text-sm cursor-pointer hover:bg-gray-100"
            >
              <td className="p-3 font-bold">
                {item.id}. {item.rule}
              </td>
              <td className="p-3 text-red-600 font-bold">{item.declinedAmount}</td>
              <td className="p-3 font-bold">{item.totalAmount}</td>
              <td className="p-3 font-bold text-red-600">{item.declinedTransactionsCount}</td>
              <td className="p-3 font-bold">{item.declinedCount}</td>
              <td className="p-3 font-bold">{item.percentDecline}</td>
              <td className="p-3 w-32">
                <div className="w-20 h-10">
                  <Line
                    data={{
                      labels: ['', '', '', '', '', ''],
                      datasets: [
                        {
                          label: 'Trend',
                          data: item.trendData,
                          borderColor: '#DC2626',
                          backgroundColor: 'transparent',
                          tension: 0.3,
                        },
                      ],
                    }}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: { display: false },
                      },
                      scales: {
                        x: { display: false },
                        y: { display: false },
                      },
                    }}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Main Table Pagination */}
      <div className="flex justify-end items-center mt-4 text-sm gap-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-2 py-1 hover:text-black"
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        <span>
          Page {currentPage} / {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          className="px-2 py-1 hover:text-black"
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>

      {/* Expanded Table */}
      {selectedRowData && (
        <div className="mt-6 border border-gray-300 rounded-lg bg-gray-50 p-4">
          <h3 className="font-semibold mb-2">Transactions for Rule #{selectedRowData.id}</h3>
          <table className="w-full text-sm border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Date</th>
                <th className="p-2 border">OMT</th>
                <th className="p-2 border">PSP reference</th>
                <th className="p-2 border">Datman decision</th>
              </tr>
            </thead>
            <tbody>
              {paginatedTransactions.map((tx, i) => (
                <tr key={i}>
                  <td className="p-2 border">{tx.date}</td>
                  <td className="p-2 border">{tx.omt}</td>
                  <td className="p-2 border">{tx.psp}</td>
                  <td className="p-2 border">{tx.decision}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Expanded Table Pagination */}
          <div className="flex justify-end items-center mt-4 text-sm gap-4">
            <button
              onClick={() => setExpandedPage((prev) => Math.max(prev - 1, 1))}
              className="px-2 py-1 hover:text-black"
              disabled={expandedPage === 1}
            >
              &lt;
            </button>
            <span>
              Page {expandedPage} / {expandedTotalPages}
            </span>
            <button
              onClick={() => setExpandedPage((prev) => Math.min(prev + 1, expandedTotalPages))}
              className="px-2 py-1 hover:text-black"
              disabled={expandedPage === expandedTotalPages}
            >
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
