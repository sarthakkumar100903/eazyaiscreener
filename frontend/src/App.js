import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import ProjectDashboard from './components/ProjectDashboard.jsx';
import HomePage from './pages/HomePage.jsx';
import ConfigPanel from './components/ConfigPanel.jsx';

export default function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeView, setActiveView] = useState('home');
  const [isConfigOpen, setConfigOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  
  const toggleConfigPanel = () => {
    setConfigOpen(!isConfigOpen);
  };

  const handleNavigation = (view) => {
    if (view === 'dashboard') {
      setActiveView('dashboard');
    } else {
      setActiveView('home');
      // Also close the config panel if we navigate away from the dashboard
      setConfigOpen(false); 
    }
  };

  const renderMainContent = () => {
    switch(activeView) {
      case 'home':
        return <HomePage />;
      case 'dashboard':
        return <ProjectDashboard />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* We now pass the activeView state down to the Navbar */}
      <Navbar 
        toggleSidebar={toggleSidebar}
        toggleConfigPanel={toggleConfigPanel}
        activeView={activeView} 
      />
      <Sidebar 
        isOpen={isSidebarOpen} 
        toggleSidebar={toggleSidebar}
        onNavigate={handleNavigation}
      />
      
      <ConfigPanel isOpen={isConfigOpen} togglePanel={toggleConfigPanel} />

      <main className={`pt-16 transition-all duration-300 ${isSidebarOpen ? 'pl-64' : 'pl-0'}`}>
        {renderMainContent()}
      </main>
    </div>
  );
}