import React from 'react';
import { Search, Bell, HelpCircle, Menu, SlidersHorizontal } from 'lucide-react';
import AppLogo from '../assets/logo.png';

export default function Navbar({ toggleSidebar, toggleConfigPanel, activeView }) {
  return (
    // Added a more defined border and a soft shadow
    <header className="bg-white border-b border-gray-200 shadow-sm h-16 flex items-center justify-between px-6 fixed top-0 left-0 right-0 z-40">
      <div className="flex items-center space-x-4">
        <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-700">
          <Menu size={24} />
        </button>
        <div className="flex items-center space-x-2">
          <img src={AppLogo} alt="4352AI Logo" className="h-7 w-7" />
          <span className="font-semibold text-lg text-gray-800">4352AI</span>
        </div>
      </div>
      
      <div className="flex-1 max-w-xl mx-4">
        <div className="relative">
          <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-100 rounded-md pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-5">
        {activeView === 'dashboard' && (
          <button onClick={toggleConfigPanel} className="text-gray-500 hover:text-gray-700">
            <SlidersHorizontal size={24} />
          </button>
        )}
        <button className="text-gray-500 hover:text-gray-700">
          <HelpCircle size={24} />
        </button>
        <button className="text-gray-500 hover:text-gray-700">
          <Bell size={24} />
        </button>
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
          S
        </div>
      </div>
    </header>
  );
}