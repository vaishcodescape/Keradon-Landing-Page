"use client";

import { FaChartLine, FaRobot, FaDatabase, FaTools, FaShieldAlt, FaUsers } from 'react-icons/fa';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Features() {
  return (
    <main className="min-h-screen">
      <section className="flex flex-col items-center justify-center min-h-screen pt-32 pb-40 px-4 relative overflow-hidden">
        <div className="w-full max-w-6xl relative z-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-16 text-foreground dark:text-white">
            Features
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 align-middle">
            {/* Advanced Analytics */}
            <Card className="bg-background/90 backdrop-blur-xl border-border hover:border-border/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(0,0,0,0.15)] group dark:bg-black/90 dark:border-gray-800/30 dark:hover:border-gray-700/50">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-foreground/10 to-foreground/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <FaChartLine className="w-8 h-8 text-foreground dark:text-white" />
                </div>
                <CardTitle className="text-2xl font-bold mb-4 text-foreground dark:text-white">
                  Advanced Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300 dark:text-white/80 dark:group-hover:text-white/90">
                  Powerful analytics tools with real-time data processing and visualization capabilities.
                </CardDescription>
              </CardContent>
            </Card>

            {/* AI-Powered Insights */}
            <Card className="bg-background/90 backdrop-blur-xl border-border hover:border-border/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(0,0,0,0.15)] group dark:bg-black/90 dark:border-gray-800/30 dark:hover:border-gray-700/50">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-foreground/10 to-foreground/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <FaRobot className="w-8 h-8 text-foreground dark:text-white" />
                </div>
                <CardTitle className="text-2xl font-bold mb-4 text-foreground dark:text-white">
                  AI-Powered Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300 dark:text-white/80 dark:group-hover:text-white/90">
                  Leverage artificial intelligence to uncover hidden patterns and insights in your data.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Data Integration */}
            <Card className="bg-background/90 backdrop-blur-xl border-border hover:border-border/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(0,0,0,0.15)] group dark:bg-black/90 dark:border-gray-800/30 dark:hover:border-gray-700/50">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-foreground/10 to-foreground/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <FaDatabase className="w-8 h-8 text-foreground dark:text-white" />
                </div>
                <CardTitle className="text-2xl font-bold mb-4 text-foreground dark:text-white">
                  Data Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300 dark:text-white/80 dark:group-hover:text-white/90">
                  Seamlessly connect and integrate data from multiple sources for comprehensive analysis.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Custom Solutions */}
            <Card className="bg-background/90 backdrop-blur-xl border-border hover:border-border/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(0,0,0,0.15)] group dark:bg-black/90 dark:border-gray-800/30 dark:hover:border-gray-700/50">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-foreground/10 to-foreground/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <FaTools className="w-8 h-8 text-foreground dark:text-white" />
                </div>
                <CardTitle className="text-2xl font-bold mb-4 text-foreground dark:text-white">
                  Data Extraction Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300 dark:text-white/80 dark:group-hover:text-white/90">
                  Find Data Extraction Tools tailored for your needs.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Security & Privacy */}
            <Card className="bg-background/90 backdrop-blur-xl border-border hover:border-border/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(0,0,0,0.15)] group dark:bg-black/90 dark:border-gray-800/30 dark:hover:border-gray-700/50">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-foreground/10 to-foreground/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <FaShieldAlt className="w-8 h-8 text-foreground dark:text-white" />
                </div>
                <CardTitle className="text-2xl font-bold mb-4 text-foreground dark:text-white">
                  Security & Privacy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300 dark:text-white/80 dark:group-hover:text-white/90">
                  Enterprise-grade security with advanced encryption and privacy controls.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Collaboration */}
            <Card className="bg-background/90 backdrop-blur-xl border-border hover:border-border/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(0,0,0,0.15)] group dark:bg-black/90 dark:border-gray-800/30 dark:hover:border-gray-700/50">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-foreground/10 to-foreground/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <FaUsers className="w-8 h-8 text-foreground dark:text-white" />
                </div>
                <CardTitle className="text-2xl font-bold mb-4 text-foreground dark:text-white">
                  Collaboration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300 dark:text-white/80 dark:group-hover:text-white/90">
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