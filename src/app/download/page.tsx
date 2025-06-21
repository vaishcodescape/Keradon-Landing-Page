"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { FaDownload, FaGithub } from 'react-icons/fa';

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-black dark:bg-black">
      <section className="flex flex-col items-center justify-center min-h-screen pt-32 pb-40 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-95 animate-gradient-x dark:from-black dark:via-gray-900 dark:to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/50 to-black animate-pulse dark:from-transparent dark:via-black/50 dark:to-black"></div>
        
        <div className="w-full max-w-4xl relative z-10 animate-fade-in text-center pt-20">
          <Card className="bg-black/90 backdrop-blur-xl border-gray-800/30 hover:border-gray-700/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] group dark:bg-black/90 dark:border-gray-800/30 dark:hover:border-gray-700/50 mx-4 shadow-2xl">
            <CardHeader className="px-4 sm:px-6 md:px-8 py-6 sm:py-8">
              <CardTitle className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-center mb-4 sm:mb-6 animate-slide-up text-white dark:text-white leading-tight">
                Download Keradon
              </CardTitle>
              <CardDescription className="text-lg sm:text-xl md:text-2xl text-white/80 text-center mb-6 sm:mb-8 max-w-2xl mx-auto animate-slide-up animation-delay-200 dark:text-white/80 leading-relaxed px-2">
                Get started with the most powerful web scraping tool available.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row justify-center gap-4 px-4 sm:px-6 md:px-8 pb-6 sm:pb-8">
              <Button 
                variant="secondary"
                size="lg"
                className="bg-white text-black hover:bg-gray-100 flex items-center gap-2"
                onClick={() => window.open('https://github.com/vaishcodescape/Keradon-Citadel.git', '_blank')}
              >
                <FaGithub className="h-5 w-5" />
                Download from GitHub
              </Button>
              <Button 
                variant="secondary"
                size="lg"
                className="bg-white text-black hover:bg-gray-100 flex items-center gap-2"
                onClick={() => window.open('/oss_program', '_self')}
              >
                <FaDownload className="h-5 w-5" />
                Join OSS Program
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
} 