import React from 'react';
import { LayoutDashboard, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
  return (
    <aside
      className={`fixed top-16 left-0 h-[calc(100vh-3.5rem)] bg-white text-gray-600 transition-all duration-300 ${
        isSidebarOpen ? 'w-64' : 'w-20'
      } px-2 py-6 flex flex-col justify-between`}
    >
      <div className="space-y-4">
        <Link
          to="/"
          className="flex items-center justify-between hover:bg-gray-100 p-2 rounded cursor-pointer"
        >
          <div className="flex items-center space-x-3">
            <LayoutDashboard className="w-5 h-5 text-gray-400" />
            {isSidebarOpen && <span>Dashboard</span>}
          </div>
        </Link>

        <Link
          to="/chart"
          className="flex items-center justify-between hover:bg-gray-100 p-2 rounded cursor-pointer"
        >
          <div className="flex items-center space-x-3">
            <BarChart className="w-5 h-5 text-gray-400" />
            {isSidebarOpen && <span>DFS KFS Analysis</span>}
          </div>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
