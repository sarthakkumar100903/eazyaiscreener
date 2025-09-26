import React, { useState, useEffect, useCallback } from 'react';
import { X, SlidersHorizontal, FileText, Cpu, Folder, Mail, Rocket } from 'lucide-react';

export default function ConfigPanel({ isOpen, togglePanel }) {
  // State to manage the values of the sliders
  const [jdSimilarity, setJdSimilarity] = useState(60);
  const [skillsMatch, setSkillsMatch] = useState(65);
  const [domainMatch, setDomainMatch] = useState(50);
  const [experienceMatch, setExperienceMatch] = useState(55);
  const [shortlistThreshold, setShortlistThreshold] = useState(75);
  const [rejectThreshold, setRejectThreshold] = useState(40);

  // State and logic for resizing the panel (no changes here)
  const [width, setWidth] = useState(384); 
  const [isResizing, setIsResizing] = useState(false);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsResizing(true);
  };

  const handleMouseUp = useCallback(() => setIsResizing(false), []);

  const handleMouseMove = useCallback((e) => {
    if (isResizing) {
      const newWidth = window.innerWidth - e.clientX;
      if (newWidth > 320 && newWidth < 800) {
        setWidth(newWidth);
      }
    }
  }, [isResizing]);

  useEffect(() => {
    if (isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing, handleMouseMove, handleMouseUp]);

  // --- Reusable Sub-components ---

  // Section headers now use a professional blue accent
  const SectionHeader = ({ icon, title }) => (
    <div className="flex items-center p-3 mb-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-md">
      {icon}
      <h3 className="text-md font-semibold text-blue-800 ml-2">{title}</h3>
    </div>
  );

  // Sliders now accept an accent color prop for semantic coloring
  const Slider = ({ label, value, onChange, accentColor = 'blue' }) => {
    const colorClasses = {
      blue: 'accent-blue-500',
      green: 'accent-green-500',
      red: 'accent-red-500'
    };
    const spanColorClasses = {
      blue: 'text-blue-600 bg-blue-100',
      green: 'text-green-600 bg-green-100',
      red: 'text-red-600 bg-red-100'
    };
    return (
      <div className="mb-4">
        <div className="flex justify-between items-center mb-1">
          <label className="text-sm font-medium text-gray-600">{label}</label>
          <span className={`text-sm font-semibold px-2 py-0.5 rounded-md ${spanColorClasses[accentColor]}`}>{value}</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className={`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer ${colorClasses[accentColor]}`}
        />
      </div>
    );
  };

  return (
    <aside
      className={`fixed top-16 right-0 h-[calc(100vh-4rem)] bg-white border-l border-gray-200 z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      style={{ width: `${width}px` }}
    >
      {/* Resize handle now uses a blue accent on hover */}
      <div
        onMouseDown={handleMouseDown}
        className="absolute top-0 -left-1 w-2 h-full cursor-col-resize hover:bg-blue-200 transition-colors z-50"
      />

      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center">
            <SlidersHorizontal size={20} className="text-gray-600 mr-2" />
            <h2 className="text-lg font-semibold text-gray-800">Job Configuration</h2>
          </div>
          <button onClick={togglePanel} className="text-gray-500 hover:text-gray-800">
            <X size={24} />
          </button>
        </div>

        <div className="p-4 overflow-y-auto flex-grow space-y-6">
          <section>
            <SectionHeader icon={<FileText size={18} />} title="Job Configuration" />
            <div className="space-y-4 px-2">
              {/* Textareas and inputs now have a blue focus ring */}
              <textarea rows="5" className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm" placeholder="Enter the complete job description..."></textarea>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm" placeholder="e.g., Healthcare, Fintech" />
              <textarea rows="3" className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm" placeholder="Python, React, AWS..."></textarea>
              <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm bg-white">
                <option>0–1 yrs</option>
                <option>1–3 yrs</option>
                <option>2–4 yrs</option>
                <option>4+ yrs</option>
              </select>
            </div>
          </section>
          
          <section>
            <SectionHeader icon={<Cpu size={18} />} title="Matching Thresholds" />
            <div className="px-2">
              <Slider label="JD Similarity" value={jdSimilarity} onChange={setJdSimilarity} accentColor="blue" />
              <Slider label="Skills Match" value={skillsMatch} onChange={setSkillsMatch} accentColor="blue" />
              <Slider label="Domain Match" value={domainMatch} onChange={setDomainMatch} accentColor="blue" />
              <Slider label="Experience Match" value={experienceMatch} onChange={setExperienceMatch} accentColor="blue" />
              <Slider label="Shortlist Threshold" value={shortlistThreshold} onChange={setShortlistThreshold} accentColor="green" />
              <Slider label="Reject Threshold" value={rejectThreshold} onChange={setRejectThreshold} accentColor="red" />
            </div>
          </section>

          <section>
            <SectionHeader icon={<Folder size={18} />} title="Resume Source" />
            <div className="px-2 space-y-3">
               <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <span className="text-sm font-medium text-gray-700">Load from Azure Blob Storage</span>
               </label>
               <div className="bg-blue-50 text-blue-800 p-3 rounded-md text-sm border border-blue-200">
                  Resumes will be loaded from Azure Blob Storage (including Gmail sync).
               </div>
            </div>
          </section>
          
          <section>
             <SectionHeader icon={<Mail size={18} />} title="Gmail Integration" />
             <div className="px-2 text-sm text-gray-600 space-y-1">
                <p><strong>Status:</strong> <span className="text-green-600 font-semibold">✅ Ready</span></p>
                <p><strong>Last Sync:</strong> 2025-09-26 10:15:14</p>
                <p><strong>Files Uploaded:</strong> 0</p>
             </div>
          </section>
        </div>
        
        {/* Panel Footer button is now blue */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <button className="w-full bg-blue-600 text-white font-semibold py-2.5 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 shadow-md hover:shadow-lg">
            <Rocket size={18} />
            <span>Start Analysis</span>
          </button>
        </div>
      </div>
    </aside>
  );
}

