// import React from 'react';
// import {
//   LayoutDashboard, FileText, ShoppingBag, Users, Headphones,
//   ClipboardCheck, Mail, Video, Phone, Lock, AlertCircle,
//   BookOpen, Puzzle, HelpCircle, Unlock
// } from 'lucide-react';

// const menuItems = [
//   { label: 'Dashboards', icon: LayoutDashboard },
//   { label: 'Pages', icon: FileText },
//   { label: 'E-commerce', icon: ShoppingBag },
//   { label: 'Users', icon: Users },
//   { label: 'Support', icon: Headphones },
//   { label: 'Projects', icon: ClipboardCheck },
//   { label: 'Mailing', icon: Mail },
//   { label: 'Video Call', icon: Video },
//   { label: 'Audio Call', icon: Phone },
//   { label: 'Authentication', icon: Lock },
//   { label: 'Status Pages', icon: AlertCircle },
// ];

// const bottomItems = [
 
//   { label: 'Components', icon: Puzzle },
//   { label: 'Help', icon: HelpCircle },
// ];

// const Sidebar = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
//   return (
//     <aside
//       className={`fixed top-16 left-0 h-[calc(100vh-3.5rem)] bg-white text-gray-600 transition-all duration-300 ${
//         isSidebarOpen ? 'w-64' : 'w-20'
//       } px-2 py-6 flex flex-col justify-between`}
//     >
//       {/* Menu Items */}
//       <div className="space-y-4">
//         {menuItems.map(({ label, icon: Icon }) => (
//           <div key={label} className="flex items-center justify-between hover:bg-gray-100 p-2 rounded cursor-pointer">
//             <div className="flex items-center space-x-3">
//               <Icon className="w-5 h-5 text-gray-400" />
//               {isSidebarOpen && <span>{label}</span>}
//             </div>
//             {isSidebarOpen && <span className="text-gray-400">▾</span>}
//           </div>
//         ))}
//       </div>

//       {/* Bottom Links */}
//       <div className="space-y-4 border-t border-gray-600 pt-4">
//         {bottomItems.map(({ label, icon: Icon }) => (
//           <div key={label} className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded cursor-pointer">
//             <Icon className="w-5 h-5 text-gray-400" />
//             {isSidebarOpen && <span>{label}</span>}
//           </div>
//         ))}
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;





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
