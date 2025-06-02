import React from 'react';

const Estimates = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Decline rule performance</h2>
      <div className="flex flex-wrap gap-4">
        {/* Total Declined Amount */}
        <div className="bg-red-100 p-4 rounded-xl w-64">
          <p className="text-sm font-semibold text-red-800">Total Declined Amount</p>
          <p className="text-2xl font-bold text-red-700 mt-1">$5.66M USD</p>
          <p className="text-sm text-red-600 mt-1">Across all decline rules</p>
        </div>

        {/* Total Declined Count */}
        <div className="bg-yellow-100 p-4 rounded-xl w-64">
          <p className="text-sm font-semibold text-yellow-700">Total Declined Count</p>
          <p className="text-2xl font-bold text-yellow-700 mt-1">45001</p>
          <p className="text-sm text-yellow-600 mt-1">Risk-based declines</p>
        </div>
      </div>
    </div>
  );
};

export default Estimates;
