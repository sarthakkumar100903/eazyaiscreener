import React from 'react';
import { Home, Cloud, Server, Database, X } from 'lucide-react';
import AppLogo from '../assets/logo.png';

export default function Sidebar({ isOpen, toggleSidebar, onNavigate }) {
  const menuItems = [
    { id: 'dashboard', icon: <Home size={20} />, name: 'Dashboard' },
    { id: 'cloud-overview', icon: <Cloud size={20} />, name: 'Cloud Overview' },
    { id: 'compute-engine', icon: <Server size={20} />, name: 'Compute Engine' },
    { id: 'storage', icon: <Database size={20} />, name: 'Cloud Storage' },
  ];

  const handleItemClick = (e, viewId) => {
    e.preventDefault();
    onNavigate(viewId);
  };

  return (
    // Added a right border and a larger shadow for better definition
    <aside className={`bg-white text-gray-800 w-64 fixed top-0 left-0 h-full z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out border-r border-gray-200 shadow-lg`}>
      <div className="flex items-center justify-between p-4 border-b h-16">
        <button onClick={() => onNavigate('home')} className="flex items-center space-x-2">
          <img src={AppLogo} alt="EAZYAI Logo" className="h-7 w-7" />
          <span className="text-lg font-semibold text-gray-800">EAZYAI</span>
        </button>
        <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-800">
          <X size={24} />
        </button>
      </div>
      
      <nav className="p-4">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id} className="mb-2">
              <button onClick={(e) => handleItemClick(e, item.id)} className="w-full flex items-center p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-md transition-colors duration-200">
                <span className="mr-3">{item.icon}</span>
                <span>{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}