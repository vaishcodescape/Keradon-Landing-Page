"use client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { EvervaultCard } from "@/components/ui/evervault-card";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-black dark:bg-black">
      
      {/* Container Scroll Animation Section */}
      <section className="flex flex-col items-center justify-center min-h-screen py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-gray-100 to-background opacity-95 animate-gradient-x-reverse dark:from-black dark:via-gray-900 dark:to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-background/50 to-background animate-pulse dark:from-transparent dark:via-black/50 dark:to-black"></div>
        
        <div className="w-full relative z-10">
          <ContainerScroll
            titleComponent={
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground dark:text-white">
                Just Smart Web Scraping
              </h2>
            }
          >
            <Image 
              src="/placeholder-image.jpg" 
              alt="Web scraping illustration"
              fill
              className="object-cover"
            />
          </ContainerScroll>
        </div>
      </section>

      {/* Evervault Card Section */}
      <section className="py-20 px-4 bg-white dark:bg-black">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4 text-foreground dark:text-white">
              About Keradon
            </h3>
            <p className="text-lg text-muted-foreground dark:text-gray-300 max-w-2xl">
              Keradon provides user a simple and easy way to scrape data from websites and obtain the data they need from reliable sources
              from businesses to data scientists to students Keradon is the perfect tool you need.
            </p>
          </div>
          <EvervaultCard text="Keradon" className="w-80 h-80" />
        </div>
      </section>
      
    </main>
  );
}
