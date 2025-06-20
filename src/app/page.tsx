/*Keradon Landing Page*/
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from '@/components/ContactForm';
import { MacbookScroll } from '@/components/ui/macbook-scroll';

export default function Home() {
  const scrollToFinalSection = () => {
    const finalSection = document.getElementById('final-section');
    if (finalSection) {
      finalSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <main className="min-h-screen bg-black dark:bg-black">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-gray-100 to-background opacity-95 animate-gradient-x dark:from-black dark:via-gray-900 dark:to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-background/50 to-background animate-pulse dark:from-transparent dark:via-black/50 dark:to-black"></div>
        <div className="w-full max-w-3xl relative z-10 animate-fade-in text-center pt-20">
          <Card className="bg-background/90 backdrop-blur-xl border-border hover:border-border/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(0,0,0,0.15)] group dark:bg-black/90 dark:border-gray-800/30 dark:hover:border-gray-700/50">
            <CardHeader>
              <CardTitle className="text-5xl md:text-7xl font-bold text-center mb-6 animate-slide-up text-foreground dark:text-white">
                Dive Deep into Data with Keradon
              </CardTitle>
              <CardDescription className="text-xl md:text-2xl text-muted-foreground text-center mb-8 max-w-2xl mx-auto animate-slide-up animation-delay-200 dark:text-white/90">
                Navigate the vast ocean of data with our AI-powered search and visualization tool.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button 
                variant="default" 
                size="lg" 
                className="bg-foreground text-background hover:bg-foreground/90"
                onClick={scrollToFinalSection}
              >
                Get Started
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/*Middle Section*/}
      <section className="flex flex-col items-center justify-center min-h-screen py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-gray-100 to-background opacity-95 animate-gradient-x-reverse dark:from-black dark:via-gray-900 dark:to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-background/50 to-background animate-pulse dark:from-transparent dark:via-black/50 dark:to-black"></div>
        
        {/* MacbookScroll Demo */}
        <div className="w-full relative z-10 mb-16">
          <MacbookScroll
            src=""
            title="Experience the Power of Keradon"
            showGradient={true}
          />
        </div>
        
        <div className="w-full max-w-6xl relative z-10 animate-fade-in animation-delay-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/* Left Box */}
            <Card className="bg-background/90 backdrop-blur-xl border-border hover:border-border/50 transition-all duration-300 dark:bg-black/90 dark:border-gray-800/30 dark:hover:border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up text-foreground dark:text-white">
                  Hunt for Insights
                </CardTitle>
                <CardDescription className="text-xl text-muted-foreground mb-8 animate-slide-up animation-delay-200 dark:text-white/90">
                  Like a shark in the water, swiftly find and analyze the data you need.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="default" size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Right Box */}
            <Card className="bg-background/90 backdrop-blur-xl border-border hover:border-border/50 transition-all duration-300 dark:bg-black/90 dark:border-gray-800/30 dark:hover:border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up text-foreground dark:text-white">
                  Use Data Analytics to make your next project
                </CardTitle>
                <CardDescription className="text-xl text-muted-foreground mb-8 animate-slide-up animation-delay-200 dark:text-white/90">
                  Transform your data into actionable insights with our powerful analytics tools.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="default" 
                  size="lg" 
                  className="bg-foreground text-background hover:bg-foreground/90"
                  onClick={scrollToFinalSection}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section id="final-section" className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-gray-100 to-background opacity-95 animate-gradient-x dark:from-black dark:via-gray-900 dark:to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-background/50 to-background animate-pulse dark:from-transparent dark:via-black/50 dark:to-black"></div>
        <Card className="relative z-10 max-w-4xl w-full mx-auto px-6 py-16 bg-background/70 backdrop-blur-xl border-border dark:bg-black/70 dark:border-gray-800/30">
          <CardHeader>
            <CardTitle className="text-5xl md:text-7xl font-extrabold text-center mb-6 animate-slide-up text-foreground drop-shadow-lg dark:text-white">
              No Code.No Noise.Just Smart Web Scraping
            </CardTitle>
            <CardDescription className="text-2xl text-muted-foreground text-center mb-10 animate-fade-in animation-delay-200 font-medium dark:text-gray-200">
              Try Keradon for free.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <Button variant="default" size="lg" className="bg-foreground text-background hover:bg-foreground/90">
              Download
            </Button>
            <a href="/oss_program" className="text-muted-foreground hover:text-foreground transition animate-fade-in block text-lg underline dark:text-gray-300 dark:hover:text-white">
              Interested in contributing?
            </a>
          </CardContent>
        </Card>
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-background/10 rounded-full blur-3xl animate-float dark:bg-background/10"></div>
        <div className="absolute -bottom-24 right-0 w-80 h-80 bg-background/10 rounded-full blur-3xl animate-float animation-delay-200 dark:bg-background/10"></div>
      </section>

      {/* Contact Section */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-gray-100 to-background opacity-95 animate-gradient-x dark:from-black dark:via-gray-900 dark:to-black"></div>
        <div className="relative z-10 w-full mx-auto px-6 py-16 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-foreground dark:text-white">
            Get in Touch
          </h2>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}