import React from 'react';
import { Bell, Grid, Sun, Menu } from 'lucide-react';
import logo from '../../assets/logo.png'

type TopNavbarProps = {
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };

  const TopNavbar = ({ setIsSidebarOpen }: TopNavbarProps) => {
    return (
    <nav className="w-full bg-white px-4 py-3 flex items-center justify-between shadow fixed top-0 z-50 h-20">
      {/* Left */}
      <div className="flex items-center space-x-4 mr-3">
        <Menu
          className="text-black w-6 h-6 cursor-pointer"
          onClick={() => setIsSidebarOpen(prev => !prev)}
        />
        <img src={logo} alt="Logo" className="h-8" />
        <span className="text-black text-xl font-semibold">Fraud Analytics Dashboard</span>
      </div>

      {/* <div className="flex-1 px-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full max-w-md bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none"
        />
      </div> */}

      {/* Right */}
      <div className="flex items-center space-x-4">
        <Bell className="text-gray-400 hover:text-white cursor-pointer" />
        <Grid className="text-gray-400 hover:text-white cursor-pointer" />
        <Sun className="text-gray-400 hover:text-white cursor-pointer" />
        <img
          src="https://randomuser.me/api/portraits/women/79.jpg"
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover"
        />
      </div>
    </nav>
  );
};

export default TopNavbar;
