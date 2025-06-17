"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <main className="min-h-screen">
      <section className="flex flex-col items-center justify-center min-h-screen pt-32 pb-40 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-gray-100 to-background opacity-95 animate-gradient-x dark:from-black dark:via-gray-900 dark:to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-background/50 to-background animate-pulse dark:from-transparent dark:via-black/50 dark:to-black"></div>
        
        <div className="w-full max-w-4xl relative z-10 animate-fade-in text-center pt-20 flex flex-col items-center">
          <Card className="w-full bg-background/90 backdrop-blur-xl border-border animate-fade-in hover:border-border/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(0,0,0,0.15)] group dark:bg-black/90 dark:border-gray-800/30 dark:hover:border-gray-700/50">
            <CardHeader className="flex flex-col items-center">
              <CardTitle className=" flex justify-center items-center text-5xl md:text-7xl font-bold text-center mb-6 animate-slide-up text-foreground dark:text-white">
                The Best Platform for Data Analytics
              </CardTitle>
              <CardDescription className="text-xl text-muted-foreground animate-slide-up animation-delay-200 max-w-2xl group-hover:text-foreground/90 transition-all duration-500 ease-in-out dark:text-white/80 dark:group-hover:text-white/90">
                Transform your data into actionable insights with our powerful analytics platform.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="w-full bg-background/90 backdrop-blur-xl border-border animate-fade-in mt-12 hover:border-border/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(0,0,0,0.15)] group dark:bg-black/90 dark:border-gray-800/30 dark:hover:border-gray-700/50">
            <CardHeader className="flex flex-col items-center">
              <CardTitle className="text-5xl md:text-7xl font-bold text-center mb-6 animate-slide-up text-foreground dark:text-white">
                AI-Powered Analysis
              </CardTitle>
              <CardDescription className="text-xl text-muted-foreground animate-slide-up animation-delay-200 max-w-2xl group-hover:text-foreground/90 transition-all duration-500 ease-in-out dark:text-white/80 dark:group-hover:text-white/90">
                Leverage cutting-edge AI technology to analyze and visualize your data like never before.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="w-full bg-background/90 backdrop-blur-xl border-border animate-fade-in mt-12 hover:border-border/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(0,0,0,0.15)] group dark:bg-black/90 dark:border-gray-800/30 dark:hover:border-gray-700/50">
            <CardHeader className="flex flex-col items-center">
              <CardTitle className="text-5xl md:text-7xl font-bold text-center mb-6 animate-slide-up text-foreground dark:text-white">
                Built for Everyone
              </CardTitle>
              <CardDescription className="text-xl text-muted-foreground animate-slide-up animation-delay-200 max-w-2xl group-hover:text-foreground/90 transition-all duration-500 ease-in-out dark:text-white/80 dark:group-hover:text-white/90">
                Whether you&apos;re a student, data scientist, or business analyst, Keradon has the tools you need.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="w-full bg-background/90 backdrop-blur-xl border-border animate-fade-in mt-12 hover:border-border/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(0,0,0,0.15)] group dark:bg-black/90 dark:border-gray-800/30 dark:hover:border-gray-700/50">
            <CardHeader className="flex flex-col items-center">
              <CardTitle className="text-5xl md:text-7xl font-bold text-center mb-6 animate-slide-up text-foreground dark:text-white">
                Build Mind Blowing Projects
              </CardTitle>
              <CardDescription className="text-xl text-muted-foreground animate-slide-up animation-delay-200 max-w-2xl group-hover:text-foreground/90 transition-all duration-500 ease-in-out dark:text-white/80 dark:group-hover:text-white/90">
                Create stunning data visualizations and build powerful analytics solutions with our platform.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
    </main>
  );
}
