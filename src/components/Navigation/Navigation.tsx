import React from 'react';
import TopNavbar from './TopNavbar';
import Sidebar from './Sidebar';

type NavigationProps = {
    isSidebarOpen: boolean;
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
  };
  

    const Navigation = ({ children, isSidebarOpen, setIsSidebarOpen }: NavigationProps) => {

  return (
    <div>
      <TopNavbar setIsSidebarOpen={setIsSidebarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <main className={`transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'} mt-20 p-4 bg-white min-h-screen text-black`}>
        {children}
      </main>
    </div>
  );
};

export default Navigation;
