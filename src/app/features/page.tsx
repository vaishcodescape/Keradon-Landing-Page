"use client";

import { FaChartLine, FaRobot, FaDatabase, FaTools, FaShieldAlt, FaUsers } from 'react-icons/fa';

export default function Features() {
  return (
    <main className="min-h-screen bg-black">
      <section className="flex flex-col items-center justify-center min-h-screen pt-32 pb-40 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-95 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/50 to-black animate-pulse"></div>
        
        <div className="w-full max-w-6xl relative z-10 animate-fade-in text-center pt-20">
          {/* Hero Section */}
          <div className="mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up text-white">
              Powerful Features for Data Analytics
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto animate-slide-up animation-delay-200">
              Discover the tools and capabilities that make Keradon the ultimate platform for data analysis and visualization.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Advanced Analytics */}
            <div className="bg-black/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-800/30 hover:border-gray-700/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <FaChartLine className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Advanced Analytics
              </h3>
              <p className="text-white/80 group-hover:text-white/90 transition-colors duration-300">
                Powerful analytics tools with real-time data processing and visualization capabilities.
              </p>
            </div>

            {/* AI-Powered Insights */}
            <div className="bg-black/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-800/30 hover:border-gray-700/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <FaRobot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                AI-Powered Insights
              </h3>
              <p className="text-white/80 group-hover:text-white/90 transition-colors duration-300">
                Leverage machine learning algorithms to uncover hidden patterns and trends in your data.
              </p>
            </div>

            {/* Data Integration */}
            <div className="bg-black/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-800/30 hover:border-gray-700/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <FaDatabase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-orange-500 bg-clip-text text-transparent">
                Data Integration
              </h3>
              <p className="text-white/80 group-hover:text-white/90 transition-colors duration-300">
                Seamlessly connect and integrate data from multiple sources for comprehensive analysis.
              </p>
            </div>

            {/* Custom Solutions */}
            <div className="bg-black/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-800/30 hover:border-gray-700/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <FaTools className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                Data Extraction Tools
              </h3>
              <p className="text-white/80 group-hover:text-white/90 transition-colors duration-300">
              Find Data Extraction Tools tailored for your needs.
              </p>
            </div>

            {/* Security & Privacy */}
            <div className="bg-black/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-800/30 hover:border-gray-700/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] group">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <FaShieldAlt className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-green-500 bg-clip-text text-transparent">
                Security & Privacy
              </h3>
              <p className="text-white/80 group-hover:text-white/90 transition-colors duration-300">
                Enterprise-grade security with advanced encryption and privacy controls.
              </p>
            </div>

            {/* Collaboration */}
            <div className="bg-black/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-800/30 hover:border-gray-700/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <FaUsers className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Collaboration
              </h3>
              <p className="text-white/80 group-hover:text-white/90 transition-colors duration-300">
                Work together seamlessly with real-time collaboration and sharing features.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}