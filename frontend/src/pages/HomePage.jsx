import React from 'react';

export default function HomePage() {
  return (
    <div className="p-6">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Your Application</h1>
        <p className="text-gray-600">
          This is the main landing page. You can provide an overview, quick links, or important announcements here.
        </p>
        <p className="text-gray-600 mt-2">
          To see your project details, please select **Dashboard** from the sidebar menu.
        </p>
      </div>
    </div>
  );
}