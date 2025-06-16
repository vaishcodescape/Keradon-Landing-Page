"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <main className="min-h-screen bg-black dark:bg-black">
      <section className="flex flex-col items-center justify-center min-h-screen pt-32 pb-40 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-95 animate-gradient-x dark:from-black dark:via-gray-900 dark:to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/50 to-black animate-pulse dark:from-transparent dark:via-black/50 dark:to-black"></div>
        
        <div className="w-full max-w-4xl relative z-10 animate-fade-in text-center pt-20">
          <Card className="bg-black/90 backdrop-blur-xl border-gray-800/30 animate-fade-in hover:border-gray-700/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] group dark:bg-black/90 dark:border-gray-800/30 dark:hover:border-gray-700/50">
            <CardHeader>
              <CardTitle className="text-5xl md:text-7xl font-bold text-center mb-6 animate-slide-up text-white dark:text-white">
                The Best Platform for Data Analytics
              </CardTitle>
              <CardDescription className="text-xl text-white/80 animate-slide-up animation-delay-200 max-w-2xl group-hover:text-white/90 transition-all duration-500 ease-in-out dark:text-white/80 dark:group-hover:text-white/90">
                Transform your data into actionable insights with our powerful analytics platform.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-black/90 backdrop-blur-xl border-gray-800/30 animate-fade-in mt-12 hover:border-gray-700/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] group dark:bg-black/90 dark:border-gray-800/30 dark:hover:border-gray-700/50">
            <CardHeader>
              <CardTitle className="text-5xl md:text-7xl font-bold text-center mb-6 animate-slide-up text-white dark:text-white">
                AI-Powered Analysis
              </CardTitle>
              <CardDescription className="text-xl text-white/80 animate-slide-up animation-delay-200 max-w-2xl group-hover:text-white/90 transition-all duration-500 ease-in-out dark:text-white/80 dark:group-hover:text-white/90">
                Leverage cutting-edge AI technology to analyze and visualize your data like never before.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-black/90 backdrop-blur-xl border-gray-800/30 animate-fade-in mt-12 hover:border-gray-700/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] group dark:bg-black/90 dark:border-gray-800/30 dark:hover:border-gray-700/50">
            <CardHeader>
              <CardTitle className="text-5xl md:text-7xl font-bold text-center mb-6 animate-slide-up text-white dark:text-white">
                Built for Everyone
              </CardTitle>
              <CardDescription className="text-xl text-white/80 animate-slide-up animation-delay-200 max-w-2xl group-hover:text-white/90 transition-all duration-500 ease-in-out dark:text-white/80 dark:group-hover:text-white/90">
                Whether you&apos;re a student, data scientist, or business analyst, Keradon has the tools you need.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-black/90 backdrop-blur-xl border-gray-800/30 animate-fade-in mt-12 hover:border-gray-700/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] group dark:bg-black/90 dark:border-gray-800/30 dark:hover:border-gray-700/50">
            <CardHeader>
              <CardTitle className="text-5xl md:text-7xl font-bold text-center mb-6 animate-slide-up text-white dark:text-white">
                Build Mind Blowing Projects
              </CardTitle>
              <CardDescription className="text-xl text-white/80 animate-slide-up animation-delay-200 max-w-2xl group-hover:text-white/90 transition-all duration-500 ease-in-out dark:text-white/80 dark:group-hover:text-white/90">
                Create stunning data visualizations and build powerful analytics solutions with our platform.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
    </main>
  );
}
