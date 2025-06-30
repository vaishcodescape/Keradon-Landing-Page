/*Keradon Landing Page*/
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { MacbookScroll } from '../components/ui/macbook-scroll';
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import FeaturesSection1 from '../components/features-section-1';
import FeaturesSection2 from '../components/features-section-2';
import { FaApple, FaMicrosoft, FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import { useState } from 'react';

export default function Home() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);


  return (
    <main className="min-h-screen bg-black dark:bg-black border border-gray-200/20 dark:border-gray-800/30 rounded-none">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen py-2 sm:py-4 md:py-8 lg:py-12 xl:py-20 px-3 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-gray-100 to-background opacity-95 animate-gradient-x dark:from-black dark:via-gray-900 dark:to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-background/50 to-background animate-pulse dark:from-transparent dark:via-black/50 dark:to-black"></div>
        
        {/* Floating Elements - Hidden on mobile */}
        <div className="absolute top-20 left-20 w-16 h-16 sm:w-32 sm:h-32 bg-blue-500/20 rounded-full blur-3xl animate-float hidden sm:block"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 sm:w-40 sm:h-40 bg-purple-500/20 rounded-full blur-3xl animate-float animation-delay-200 hidden sm:block"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 sm:w-24 sm:h-24 bg-green-500/20 rounded-full blur-3xl animate-float animation-delay-500 hidden sm:block"></div>
        
        <div className="w-full max-w-4xl relative z-10 animate-fade-in text-center pt-2 sm:pt-4 md:pt-8 lg:pt-12 xl:pt-20">
          <Card className="bg-background/90 backdrop-blur-xl border-border hover:border-border/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(0,0,0,0.15)] group dark:bg-black/90 dark:border-gray-800/30 dark:hover:border-gray-700/50 mx-2 sm:mx-4 shadow-2xl">
            <CardHeader className="px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
              <CardTitle className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-bold text-center mb-3 sm:mb-4 md:mb-6 animate-slide-up text-foreground dark:text-white leading-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent dark:from-white dark:via-primary dark:to-white">
                Dive Deep into Data with Keradon
              </CardTitle>
              <CardDescription className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground text-center mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto animate-slide-up animation-delay-200 dark:text-white/90 leading-relaxed px-2">
                Scrape the vast trench of data with our AI-powered search and visualization tool.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-3 sm:px-4 md:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-8">
              {/* Single Visit Web App Button */}
              <a
                href="https://keradon.vercel.app/sign-in" // Replace with actual web app URL if different
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex h-12 sm:h-12 w-full sm:w-auto overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 sm:px-6 py-3 text-sm font-medium text-white backdrop-blur-3xl">
                  Visit Keradon Web App
                </span>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section with Container Scroll Animation */}
      <section className="flex flex-col items-center justify-center min-h-screen py-4 sm:py-8 md:py-12 lg:py-20 px-3 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-gray-100 to-background opacity-95 animate-gradient-x-reverse dark:from-black dark:via-gray-900 dark:to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-background/50 to-background animate-pulse dark:from-transparent dark:via-black/50 dark:to-black"></div>
        
        {/* Floating Elements - Hidden on mobile */}
        <div className="absolute top-1/3 right-10 w-14 h-14 sm:w-28 sm:h-28 bg-orange-500/20 rounded-full blur-3xl animate-float animation-delay-300 hidden sm:block"></div>
        <div className="absolute bottom-1/3 left-10 w-18 h-18 sm:w-36 sm:h-36 bg-pink-500/20 rounded-full blur-3xl animate-float animation-delay-700 hidden sm:block"></div>
        
        <div className="w-full relative z-10">
          <ContainerScroll
            titleComponent={
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-transparent bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text dark:from-white dark:via-primary dark:to-white px-3 sm:px-4">
                It&apos;s Just Smart Web Scraping
              </h2>
            }
          >
            <div>
              <Image 
                src="/webscraping.png" 
                alt="Keradon" 
                width={800}
                height={600}
                className="w-full h-full object-cover" 
              />
            </div>
          </ContainerScroll>
        </div>
      </section>

      {/* About Keradon Section */}
      <section className="py-4 sm:py-8 md:py-12 lg:py-20 px-3 sm:px-4 md:px-6 lg:px-8 bg-white dark:bg-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_#000_1px,_transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,_#fff_1px,_transparent_0)] bg-[length:20px_20px]"></div>
        </div>
        
        <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-12 relative z-10">
          <div className="text-center max-w-4xl px-3 sm:px-4">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6 text-transparent dark:text-white bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent dark:from-white dark:via-primary dark:to-white">
              About Keradon
            </h3>
            <p className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl text-muted-foreground dark:text-gray-300 leading-relaxed px-2">
              Keradon provides user a simple and easy way to scrape data from websites and obtain the data they need from reliable sources
              from businesses to data scientists to students Keradon is the perfect tool you need.
            </p>
          </div>
        </div>
      </section>

      {/* Hovering Cards Section */}
      <section className="py-4 sm:py-8 md:py-12 lg:py-20 px-3 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden">
        {/* Soft blurred background for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-gray-100 to-background opacity-80 blur-2xl pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-background via-gray-100 to-background opacity-95 animate-gradient-x dark:from-black dark:via-gray-900 dark:to-black"></div>
        
        {/* Floating Elements - Hidden on mobile */}
        <div className="absolute top-1/4 left-1/4 w-10 h-10 sm:w-20 sm:h-20 bg-blue-500/30 rounded-full blur-2xl animate-float hidden sm:block"></div>
        <div className="absolute bottom-1/4 right-1/4 w-12 h-12 sm:w-24 sm:h-24 bg-purple-500/30 rounded-full blur-2xl animate-float animation-delay-400 hidden sm:block"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20 px-3 sm:px-4">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6 text-foreground dark:text-white bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent dark:from-white dark:via-primary dark:to-white">
              Why Choose Keradon?
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed dark:text-white/70 px-2">
              Discover the advantages that make Keradon the ultimate web scraping solution
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
            {/* Card 1 */}
            <div className="group relative transition-transform duration-300 hover:-translate-y-2 hover:scale-105">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-2xl sm:rounded-3xl blur-lg opacity-40 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 ease-in-out group-hover:ring-2 group-hover:ring-blue-400/40 min-h-[200px] sm:min-h-[250px] md:min-h-[300px]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6 lg:mb-8 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-foreground dark:text-white group-hover:text-blue-500 transition-colors duration-300">
                  Lightning Fast
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground dark:text-gray-300 leading-relaxed">
                  Extract data at incredible speeds with our optimized scraping engine. Process thousands of pages in minutes, not hours.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative transition-transform duration-300 hover:-translate-y-2 hover:scale-105">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400/30 to-teal-400/30 rounded-2xl sm:rounded-3xl blur-lg opacity-40 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 ease-in-out group-hover:ring-2 group-hover:ring-green-400/40 min-h-[200px] sm:min-h-[250px] md:min-h-[300px]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6 lg:mb-8 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-foreground dark:text-white group-hover:text-green-500 transition-colors duration-300">
                  No Code Required
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground dark:text-gray-300 leading-relaxed">
                  Start scraping immediately with our intuitive interface. No programming knowledge needed - just point, click, and extract.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative transition-transform duration-300 hover:-translate-y-2 hover:scale-105">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400/30 to-red-400/30 rounded-2xl sm:rounded-3xl blur-lg opacity-40 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 ease-in-out group-hover:ring-2 group-hover:ring-orange-400/40 min-h-[200px] sm:min-h-[250px] md:min-h-[300px]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6 lg:mb-8 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-foreground dark:text-white group-hover:text-orange-500 transition-colors duration-300">
                  LLM Integration
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground dark:text-gray-300 leading-relaxed">
                  Leverage the power of Large Language Models to intelligently process and analyze your scraped data with AI-driven insights and automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Middle Section*/}
      <section className="flex flex-col items-center justify-center min-h-screen py-2 sm:py-4 md:py-8 lg:py-12 xl:py-20 px-3 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-gray-100 to-background opacity-95 animate-gradient-x-reverse dark:from-black dark:via-gray-900 dark:to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-background/50 to-background animate-pulse dark:from-transparent dark:via-black/50 dark:to-black"></div>
        
        {/* Floating Elements - Hidden on mobile */}
        <div className="absolute top-1/4 right-1/4 w-16 h-16 sm:w-32 sm:h-32 bg-indigo-500/20 rounded-full blur-3xl animate-float animation-delay-600 hidden sm:block"></div>
        <div className="absolute bottom-1/4 left-1/4 w-14 h-14 sm:w-28 sm:h-28 bg-cyan-500/20 rounded-full blur-3xl animate-float animation-delay-800 hidden sm:block"></div>
        
        {/* MacbookScroll Demo */}
        <div className="w-full relative z-10 mb-2 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-12 2xl:mb-16 px-2">
           <MacbookScroll
            title="Experience the Power of Keradon"
            showGradient={true}
          />
        </div>
        
        <div className="w-full max-w-6xl relative z-10 animate-fade-in animation-delay-300 px-3 sm:px-4">
          <div className="flex justify-center">
            {/* Only the Use Data Analytics card remains */}
            <Card className="bg-background/90 backdrop-blur-xl border-border hover:border-border/50 transition-all duration-300 dark:bg-black/90 dark:border-gray-800/30 dark:hover:border-gray-700/50 shadow-xl hover:shadow-2xl w-full max-w-xl">
              <CardHeader className="px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-6 lg:py-8">
                <CardTitle className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6 animate-slide-up text-foreground dark:text-white leading-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent dark:from-white dark:via-primary dark:to-white">
                  Use Data Analytics to make your next project
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground mb-3 sm:mb-4 md:mb-6 lg:mb-8 animate-slide-up animation-delay-200 dark:text-white/90 leading-relaxed">
                  Transform your data into actionable insights with our powerful analytics tools.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-3 sm:px-4 md:px-6 lg:px-8 pb-3 sm:pb-4 md:pb-6 lg:pb-8">
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section - Demo 1 */}
      <section id="features-section" className="py-4 sm:py-8 md:py-12 lg:py-20 px-3 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden bg-white dark:bg-black">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_#000_1px,_transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,_#fff_1px,_transparent_0)] bg-[length:20px_20px]"></div>
        </div>
        
        <div className="relative z-10">
          <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 px-3 sm:px-4">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6 text-foreground dark:text-white bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent dark:from-white dark:via-primary dark:to-white">
              Core Features
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed dark:text-white/70 px-2">
              Essential tools and capabilities for powerful web scraping
            </p>
          </div>
          <FeaturesSection1 />
        </div>
      </section>

      {/* Features Section - Demo 2 */}
      <section className="py-4 sm:py-8 md:py-12 lg:py-20 px-3 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-gray-100 to-background opacity-95 animate-gradient-x dark:from-black dark:via-gray-900 dark:to-black"></div>
        
        {/* Floating Elements - Hidden on mobile */}
        <div className="absolute top-1/3 left-1/3 w-12 h-12 sm:w-24 sm:h-24 bg-yellow-500/20 rounded-full blur-3xl animate-float animation-delay-300 hidden sm:block"></div>
        <div className="absolute bottom-1/3 right-1/3 w-10 h-10 sm:w-20 sm:h-20 bg-pink-500/20 rounded-full blur-3xl animate-float animation-delay-600 hidden sm:block"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 px-3 sm:px-4">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6 text-foreground dark:text-white bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent dark:from-white dark:via-primary dark:to-white">
              Platform Benefits
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed dark:text-white/70 px-2">
              Why developers and businesses choose Keradon
            </p>
          </div>
          <FeaturesSection2 />
        </div>
      </section>

      {/* Final Section */}
      <section id="final-section" className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-2 sm:py-4 md:py-8 lg:py-12 xl:py-20 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-gray-100 to-background opacity-95 animate-gradient-x dark:from-black dark:via-gray-900 dark:to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-background/50 to-background animate-pulse dark:from-transparent dark:via-black/50 dark:to-black"></div>
        
        {/* Floating Elements - Hidden on mobile */}
        <div className="absolute top-20 left-20 w-20 h-20 sm:w-40 sm:h-40 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-float hidden sm:block"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 sm:w-48 sm:h-48 bg-gradient-to-r from-green-500/30 to-teal-500/30 rounded-full blur-3xl animate-float animation-delay-400 hidden sm:block"></div>
        
        <Card className="relative z-10 max-w-4xl w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 lg:py-12 xl:py-16 bg-background/70 backdrop-blur-xl border-border dark:bg-black/70 dark:border-gray-800/30 shadow-2xl">
          <CardHeader className="px-2 sm:px-4">
            <CardTitle className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-7xl font-extrabold text-center mb-2 sm:mb-3 md:mb-4 lg:mb-6 animate-slide-up text-foreground drop-shadow-lg dark:text-white leading-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent dark:from-white dark:via-primary dark:to-white">
              No Code.No Noise.Just Smart Web Scraping
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-muted-foreground text-center mb-3 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-10 animate-fade-in animation-delay-200 font-medium dark:text-gray-200 leading-relaxed">
              Try Keradon for free.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-3 sm:gap-4 px-2 sm:px-4">
            <a href="/oss_program" className="text-muted-foreground hover:text-foreground transition animate-fade-in block text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg underline dark:text-gray-300 dark:hover:text-white text-center hover:scale-105 transform transition-all duration-300">
              Interested in contributing?
            </a>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}