import React from 'react';
import { X, SlidersHorizontal } from 'lucide-react';

// This component accepts 'isOpen' and 'togglePanel' to control its state
export default function ConfigPanel({ isOpen, togglePanel }) {
  // A helper component for consistent form fields
  const FormField = ({ label, children }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-600 mb-1">{label}</label>
      {children}
    </div>
  );

  return (
    // The main panel uses CSS transforms and transitions to slide in and out
    <aside className={`fixed top-16 right-0 h-[calc(100vh-4rem)] bg-white border-l border-gray-200 z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} w-96`}>
      <div className="flex flex-col h-full">
        {/* Panel Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center">
            <SlidersHorizontal size={20} className="text-gray-600 mr-2" />
            <h2 className="text-lg font-semibold text-gray-800">Job Configuration</h2>
          </div>
          <button onClick={togglePanel} className="text-gray-500 hover:text-gray-800">
            <X size={24} />
          </button>
        </div>

        {/* Form Content - styled to look like your original app */}
        <div className="p-6 overflow-y-auto flex-grow">
          <FormField label="Job Description">
            <textarea
              rows="5"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
              placeholder="Paste the complete job description here..."
            ></textarea>
          </FormField>

          <FormField label="Preferred Domain">
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
              placeholder="e.g., Healthcare, Fintech"
            />
          </FormField>

          <FormField label="Required Skills (comma separated)">
            <textarea
              rows="3"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
              placeholder="Python, React, AWS..."
            ></textarea>
          </FormField>

          <FormField label="Required Experience">
            <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm bg-white">
              <option>0–1 yrs</option>
              <option>1–3 yrs</option>
              <option>2–4 yrs</option>
              <option>4+ yrs</option>
            </select>
          </FormField>

          {/* We'll just use a title for thresholds for now, as per the UI mockup goal */}
          <div className="mt-6">
             <h3 className="text-md font-semibold text-gray-700 border-b pb-2 mb-4">Matching Thresholds</h3>
             <p className="text-xs text-gray-500">Sliders for JD Similarity, Skills Match, etc., will be configured here.</p>
          </div>
        </div>
        
        {/* Panel Footer with Action Button */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <button className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
            Start Analysis
          </button>
        </div>
      </div>
    </aside>
  );
}