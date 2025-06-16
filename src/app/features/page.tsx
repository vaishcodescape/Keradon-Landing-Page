"use client";

import { FaChartLine, FaRobot, FaDatabase, FaTools, FaShieldAlt, FaUsers } from 'react-icons/fa';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Features() {
  return (
    <main className="min-h-screen bg-black dark:bg-black">
      <section className="flex flex-col items-center justify-center min-h-screen pt-32 pb-40 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-95 animate-gradient-x dark:from-black dark:via-gray-900 dark:to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/50 to-black animate-pulse dark:from-transparent dark:via-black/50 dark:to-black"></div>
        
        <div className="w-full max-w-6xl relative z-10 animate-fade-in text-center pt-20">
          {/* Hero Section */}
          <Card className="mb-20 bg-transparent border-none">
            <CardHeader>
              <CardTitle className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up text-white dark:text-white">
                Powerful Features for Data Analytics
              </CardTitle>
              <CardDescription className="text-xl text-white/80 max-w-3xl mx-auto animate-slide-up animation-delay-200 dark:text-white/80">
                Discover the tools and capabilities that make Keradon the ultimate platform for data analysis and visualization.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Advanced Analytics */}
            <Card className="bg-black/90 backdrop-blur-xl border-gray-800/30 hover:border-gray-700/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] group dark:bg-black/90 dark:border-gray-800/30 dark:hover:border-gray-700/50">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <FaChartLine className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold mb-4 text-white">
                  Advanced Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/80 group-hover:text-white/90 transition-colors duration-300 dark:text-white/80 dark:group-hover:text-white/90">
                  Powerful analytics tools with real-time data processing and visualization capabilities.
                </CardDescription>
              </CardContent>
            </Card>

            {/* AI-Powered Insights */}
            <Card className="bg-black/90 backdrop-blur-xl border-gray-800/30 hover:border-gray-700/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] group dark:bg-black/90 dark:border-gray-800/30 dark:hover:border-gray-700/50">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <FaRobot className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold mb-4 text-white">
                  AI-Powered Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/80 group-hover:text-white/90 transition-colors duration-300 dark:text-white/80 dark:group-hover:text-white/90">
                  Leverage machine learning algorithms to uncover hidden patterns and trends in your data.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Data Integration */}
            <Card className="bg-black/90 backdrop-blur-xl border-gray-800/30 hover:border-gray-700/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] group dark:bg-black/90 dark:border-gray-800/30 dark:hover:border-gray-700/50">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <FaDatabase className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold mb-4 text-white">
                  Data Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/80 group-hover:text-white/90 transition-colors duration-300 dark:text-white/80 dark:group-hover:text-white/90">
                  Seamlessly connect and integrate data from multiple sources for comprehensive analysis.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Custom Solutions */}
            <Card className="bg-black/90 backdrop-blur-xl border-gray-800/30 hover:border-gray-700/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] group dark:bg-black/90 dark:border-gray-800/30 dark:hover:border-gray-700/50">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <FaTools className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold mb-4 text-white">
                  Data Extraction Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/80 group-hover:text-white/90 transition-colors duration-300 dark:text-white/80 dark:group-hover:text-white/90">
                  Find Data Extraction Tools tailored for your needs.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Security & Privacy */}
            <Card className="bg-black/90 backdrop-blur-xl border-gray-800/30 hover:border-gray-700/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] group dark:bg-black/90 dark:border-gray-800/30 dark:hover:border-gray-700/50">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <FaShieldAlt className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold mb-4 text-white">
                  Security & Privacy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/80 group-hover:text-white/90 transition-colors duration-300 dark:text-white/80 dark:group-hover:text-white/90">
                  Enterprise-grade security with advanced encryption and privacy controls.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Collaboration */}
            <Card className="bg-black/90 backdrop-blur-xl border-gray-800/30 hover:border-gray-700/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] group dark:bg-black/90 dark:border-gray-800/30 dark:hover:border-gray-700/50">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <FaUsers className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold mb-4 text-white">
                  Collaboration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/80 group-hover:text-white/90 transition-colors duration-300 dark:text-white/80 dark:group-hover:text-white/90">
                  Work together seamlessly with real-time collaboration and sharing features.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}