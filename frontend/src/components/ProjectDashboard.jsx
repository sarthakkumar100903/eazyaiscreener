import React, { useState } from 'react';
import Dashboard from '../pages/Dashboard.jsx';
import Activity from '../pages/Activity.jsx';
import Recommendations from '../pages/Recommendations.jsx';

// Renamed from MainContent to ProjectDashboard
export default function ProjectDashboard() { 
  const [activeTab, setActiveTab] = useState('Dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Activity':
        return <Activity />;
      case 'Recommendations':
        return <Recommendations />;
      default:
        return <Dashboard />;
    }
  };

  const getTabClassName = (tabName) => {
    return `px-4 py-2 font-semibold border-b-2 transition-colors duration-200 ${
      activeTab === tabName
        ? 'border-blue-500 text-blue-600'
        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
    }`;
  };

  return (
    <div>
      <div className="border-b border-gray-200 px-6">
        <nav className="flex space-x-4" aria-label="Tabs">
          <button onClick={() => setActiveTab('Dashboard')} className={getTabClassName('Dashboard')}>
            Dashboard
          </button>
          <button onClick={() => setActiveTab('Activity')} className={getTabClassName('Activity')}>
            Activity
          </button>
          <button onClick={() => setActiveTab('Recommendations')} className={getTabClassName('Recommendations')}>
            Recommendations
          </button>
        </nav>
      </div>
      <div className="p-6">
        {renderContent()}
      </div>
    </div>
  );
}