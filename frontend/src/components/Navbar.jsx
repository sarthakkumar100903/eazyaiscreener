import React from 'react';
import { Search, Bell, HelpCircle, Menu, SlidersHorizontal } from 'lucide-react';

// We accept the 'activeView' prop to know which page is showing
export default function Navbar({ toggleSidebar, toggleConfigPanel, activeView }) {
  return (
    <header className="bg-white border-b h-16 flex items-center justify-between px-6 fixed top-0 left-0 right-0 z-40">
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-700 mr-4">
          <Menu size={24} />
        </button>
        <span className="font-semibold text-lg">Your App</span>
      </div>
      
      <div className="flex-1 max-w-xl mx-4">
        <div className="relative">
          <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-100 rounded-md pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-5">
        {/* This is the conditional rendering logic. */}
        {/* The button is only included in the output if activeView is 'dashboard'. */}
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