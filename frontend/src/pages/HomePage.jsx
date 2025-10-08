import React from 'react';
import { Mail, Settings2, UploadCloud, Rocket, BrainCircuit, Zap, BarChart, CheckCircle } from 'lucide-react';
import AppLogo from '../assets/logo.png';

export default function HomePage() {
  // Helper component for feature cards
  const FeatureCard = ({ icon, title, features }) => (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md hover:shadow-xl hover:border-blue-300 transition-all duration-300 group">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-lg font-semibold text-gray-800 ml-3">{title}</h3>
      </div>
      <ul className="space-y-2 text-sm text-gray-600">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  // Data for the feature cards
  const featuresData = [
    {
      icon: <BrainCircuit size={24} className="text-blue-600" />,
      title: "AI-Powered Analysis",
      features: ["Intelligent role extraction from JD", "Semantic similarity matching", "Multi-factor scoring (skills, experience, domain)", "Automated fraud detection and quality control", "Three-tier verdict system (Shortlist/Review/Reject)"]
    },
    {
      icon: <Zap size={24} className="text-blue-600" />,
      title: "Advanced Features",
      features: ["Gmail auto-sync for resume collection", "Multi-format support (PDF, DOCX, DOC)", "Bulk email automation with custom templates", "PDF summary generation for candidates", "Real-time progress tracking"]
    },
    {
      icon: <BarChart size={24} className="text-blue-600" />,
      title: "Smart Insights",
      features: ["Comprehensive analytics dashboard", "Customizable scoring thresholds", "Interactive candidate management", "Advanced filtering and export capabilities", "Gmail sync monitoring and error tracking"]
    }
  ];

  const stepsData = [
    { icon: <Settings2 size={32} className="text-gray-500" />, title: "Step 1", description: "Paste Job Description" },
    { icon: <UploadCloud size={32} className="text-gray-500" />, title: "Step 2", description: "Configure Thresholds" },
    { icon: <Mail size={32} className="text-gray-500" />, title: "Step 3", description: "Upload or Sync Resumes" },
    { icon: <Rocket size={32} className="text-gray-500" />, title: "Step 4", description: "Start Analysis" }
  ];

  return (
    <div className="p-8 space-y-12 bg-gradient-to-br from-white via-gray-50 to-blue-50/50">
      {/* --- Hero Section --- */}
      <section>
        {/* Updated layout to place logo next to the title */}
        <div className="flex items-center justify-center gap-x-6 mb-3">
          <img src={AppLogo} alt="4352AI Logo" className="h-16 w-16 flex-shrink-0" />
          <h1 className="text-4xl font-bold text-gray-800">Welcome to 4352AI</h1>
        </div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">Streamline your hiring process with our Intelligent Resume Screening Platform.</p> 
      </section>

      {/* --- Email Integration & Get Started Section --- */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Blue glowing card */}
        <div className="lg:col-span-1 bg-blue-50 border border-blue-200 p-6 rounded-lg text-center shadow-2xl shadow-blue-500/20">
          <Mail size={32} className="mx-auto text-blue-600 mb-3" />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Email Integration Active</h2>
          <p className="text-gray-600 mb-4">Send resumes directly to the address below. They'll be automatically processed.</p>
          <div className="bg-white p-3 rounded-md border border-gray-300">
            <p className="font-mono text-blue-800 font-semibold">4352ai111@gmail.com</p> 
          </div>
          <p className="text-xs text-gray-500 mt-3">Supported formats: PDF, DOCX, DOC</p>
        </div>
        <div className="lg:col-span-2 bg-white p-6 rounded-lg border border-gray-200 shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">How to Get Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stepsData.map(step => (
              <div key={step.title} className="text-center p-4 rounded-lg">
                <div className="flex justify-center items-center h-16 w-16 bg-gray-100 rounded-full mx-auto mb-3">
                  {step.icon}
                </div>
                <h3 className="font-semibold text-gray-700">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Features Section --- */}
      <section>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">A Powerful, Feature-Rich Platform</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {featuresData.map(feature => (
            <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} features={feature.features} />
          ))}
        </div>
      </section>

      {/* --- Performance Expectations Section (Green glowing card) --- */}
      <section className="bg-green-50 border border-green-200 p-6 rounded-lg shadow-2xl shadow-green-500/20">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Performance Expectations</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" />Gmail Auto-Sync automatically processes new resumes when the app starts.</li>
          <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" />Processes ~17 resumes in 45-90 seconds (average 3-5 seconds per resume).</li>
          <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" />Supports multiple formats, including PDF, DOCX, and DOC files.</li>
          <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" />Provides real-time progress updates during analysis and sync.</li>
        </ul>
      </section>
    </div>
  );
}

