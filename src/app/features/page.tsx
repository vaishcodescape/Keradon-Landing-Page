"use client";

import { FaChartLine, FaRobot, FaDatabase, FaTools, FaShieldAlt, FaUsers } from 'react-icons/fa';
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

export default function Features() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <section className="flex flex-col items-center justify-center min-h-screen pt-32 pb-40 px-4 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-secondary/20 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="w-full max-w-7xl relative z-10 animate-fade-in">
          {/* Enhanced header section */}
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent dark:from-white dark:via-primary dark:to-white">
              Features
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed dark:text-white/70">
              Discover the powerful tools and capabilities that make our platform the ultimate solution for your data needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 align-middle">
            {/* Advanced Analytics */}
            <CardContainer className="w-full group">
              <CardBody className="bg-gradient-to-br from-background/95 via-background/90 to-background/95 backdrop-blur-xl border border-border/50 rounded-3xl p-8 hover:border-primary/50 transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-primary/10 group-hover:scale-[1.02] dark:from-black/95 dark:via-black/90 dark:to-black/95 dark:border-gray-800/50 dark:hover:border-primary/50">
                <CardItem translateZ="75" className="w-full">
                  <div className="w-20 h-20 bg-gradient-to-br from-foreground/10 to-foreground/5 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500 group-hover:rotate-3">
                    <FaChartLine className="w-10 h-10 text-foreground dark:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground dark:text-white group-hover:text-primary transition-colors duration-300">
                    Advanced Analytics
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300 dark:text-white/70 dark:group-hover:text-white/90 leading-relaxed">
                    Powerful analytics tools with real-time data processing and visualization capabilities that transform your insights into actionable intelligence.
                  </p>
                </CardItem>
              </CardBody>
            </CardContainer>

            {/* AI-Powered Insights */}
            <CardContainer className="w-full group">
              <CardBody className="bg-gradient-to-br from-background/95 via-background/90 to-background/95 backdrop-blur-xl border border-border/50 rounded-3xl p-8 hover:border-primary/50 transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-primary/10 group-hover:scale-[1.02] dark:from-black/95 dark:via-black/90 dark:to-black/95 dark:border-gray-800/50 dark:hover:border-primary/50">
                <CardItem translateZ="75" className="w-full">
                  <div className="w-20 h-20 bg-gradient-to-br from-foreground/10 to-foreground/5 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500 group-hover:rotate-3">
                    <FaRobot className="w-10 h-10 text-foreground dark:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground dark:text-white group-hover:text-primary transition-colors duration-300">
                    AI-Powered Insights
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300 dark:text-white/70 dark:group-hover:text-white/90 leading-relaxed">
                    Leverage cutting-edge artificial intelligence to uncover hidden patterns and predictive insights that drive smarter business decisions.
                  </p>
                </CardItem>
              </CardBody>
            </CardContainer>

            {/* Data Integration */}
            <CardContainer className="w-full group">
              <CardBody className="bg-gradient-to-br from-background/95 via-background/90 to-background/95 backdrop-blur-xl border border-border/50 rounded-3xl p-8 hover:border-primary/50 transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-primary/10 group-hover:scale-[1.02] dark:from-black/95 dark:via-black/90 dark:to-black/95 dark:border-gray-800/50 dark:hover:border-primary/50">
                <CardItem translateZ="75" className="w-full">
                  <div className="w-20 h-20 bg-gradient-to-br from-foreground/10 to-foreground/5 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500 group-hover:rotate-3">
                    <FaDatabase className="w-10 h-10 text-foreground dark:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground dark:text-white group-hover:text-primary transition-colors duration-300">
                    Data Integration
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300 dark:text-white/70 dark:group-hover:text-white/90 leading-relaxed">
                    Seamlessly connect and integrate data from multiple sources with automated workflows for comprehensive, unified analysis.
                  </p>
                </CardItem>
              </CardBody>
            </CardContainer>

            {/* Data Extraction Tools */}
            <CardContainer className="w-full group">
              <CardBody className="bg-gradient-to-br from-background/95 via-background/90 to-background/95 backdrop-blur-xl border border-border/50 rounded-3xl p-8 hover:border-primary/50 transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-primary/10 group-hover:scale-[1.02] dark:from-black/95 dark:via-black/90 dark:to-black/95 dark:border-gray-800/50 dark:hover:border-primary/50">
                <CardItem translateZ="75" className="w-full">
                  <div className="w-20 h-20 bg-gradient-to-br from-foreground/10 to-foreground/5 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500 group-hover:rotate-3">
                    <FaTools className="w-10 h-10 text-foreground dark:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground dark:text-white group-hover:text-primary transition-colors duration-300">
                    Data Extraction Tools
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300 dark:text-white/70 dark:group-hover:text-white/90 leading-relaxed">
                    Advanced extraction tools tailored to your specific needs, with intelligent parsing and automated data cleaning capabilities.
                  </p>
                </CardItem>
              </CardBody>
            </CardContainer>

            {/* Security & Privacy */}
            <CardContainer className="w-full group">
              <CardBody className="bg-gradient-to-br from-background/95 via-background/90 to-background/95 backdrop-blur-xl border border-border/50 rounded-3xl p-8 hover:border-primary/50 transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-primary/10 group-hover:scale-[1.02] dark:from-black/95 dark:via-black/90 dark:to-black/95 dark:border-gray-800/50 dark:hover:border-primary/50">
                <CardItem translateZ="75" className="w-full">
                  <div className="w-20 h-20 bg-gradient-to-br from-foreground/10 to-foreground/5 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500 group-hover:rotate-3">
                    <FaShieldAlt className="w-10 h-10 text-foreground dark:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground dark:text-white group-hover:text-primary transition-colors duration-300">
                    Security & Privacy
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300 dark:text-white/70 dark:group-hover:text-white/90 leading-relaxed">
                    Enterprise-grade security with advanced encryption, compliance controls, and privacy protection that you can trust.
                  </p>
                </CardItem>
              </CardBody>
            </CardContainer>

            {/* Collaboration */}
            <CardContainer className="w-full group">
              <CardBody className="bg-gradient-to-br from-background/95 via-background/90 to-background/95 backdrop-blur-xl border border-border/50 rounded-3xl p-8 hover:border-primary/50 transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-primary/10 group-hover:scale-[1.02] dark:from-black/95 dark:via-black/90 dark:to-black/95 dark:border-gray-800/50 dark:hover:border-primary/50">
                <CardItem translateZ="75" className="w-full">
                  <div className="w-20 h-20 bg-gradient-to-br from-foreground/10 to-foreground/5 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500 group-hover:rotate-3">
                    <FaUsers className="w-10 h-10 text-foreground dark:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground dark:text-white group-hover:text-primary transition-colors duration-300">
                    Collaboration
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300 dark:text-white/70 dark:group-hover:text-white/90 leading-relaxed">
                    Work together seamlessly with real-time collaboration, shared workspaces, and powerful team management features.
                  </p>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </section>
    </main>
  );
}