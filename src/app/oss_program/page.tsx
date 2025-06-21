"use client";

import { FaGithub, FaCode, FaUsers, FaTrophy, FaRocket, FaHandshake } from 'react-icons/fa';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

export default function OSSProgram() {
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
                Open Source Contributor Program
              </CardTitle>
              <CardDescription className="text-xl text-white/80 max-w-3xl mx-auto animate-slide-up animation-delay-200 dark:text-white/80">
                Join our community of developers and help shape the future of data analytics. Contribute to Keradon and make a real impact.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {/* Recognition */}
            <Card className="bg-black/90 backdrop-blur-xl border-gray-800/30 hover:border-gray-700/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] group dark:bg-black/90 dark:border-gray-800/30 dark:hover:border-gray-700/50">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <FaTrophy className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold mb-4 text-white">
                  Recognition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/80 group-hover:text-white/90 transition-colors duration-300 dark:text-white/80 dark:group-hover:text-white/90">
                  Get recognized for your contributions and build your portfolio.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Learning */}
            <Card className="bg-black/90 backdrop-blur-xl border-gray-800/30 hover:border-gray-700/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] group dark:bg-black/90 dark:border-gray-800/30 dark:hover:border-gray-700/50">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <FaCode className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold mb-4 text-white">
                  Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/80 group-hover:text-white/90 transition-colors duration-300 dark:text-white/80 dark:group-hover:text-white/90">
                  Access exclusive resources and mentorship from experienced developers.
                </CardDescription>
                <CardDescription className="text-white/80 group-hover:text-white/90 transition-colors duration-300 font-bold dark:text-white/80 dark:group-hover:text-white/90">
                  Enhance your skills in the world of Open Source Contribution.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Community */}
            <Card className="bg-black/90 backdrop-blur-xl border-gray-800/30 hover:border-gray-700/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] group dark:bg-black/90 dark:border-gray-800/30 dark:hover:border-gray-700/50">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <FaUsers className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold mb-4 text-white">
                  Community
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/80 group-hover:text-white/90 transition-colors duration-300 dark:text-white/80 dark:group-hover:text-white/90">
                  Join a vibrant community of developers passionate about Open Source Contribution and Data Analytics.
                </CardDescription>
                <CardDescription className="text-white/80 group-hover:text-white/90 transition-colors duration-300 font-bold dark:text-white/80 dark:group-hover:text-white/90">
                  Enhance your Learning and Contribute to the Open Source Community.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* How to Contribute */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-white dark:text-white">How to Contribute</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-black/90 backdrop-blur-xl border-gray-800/30 hover:border-gray-700/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] group dark:bg-black/90 dark:border-gray-800/30 dark:hover:border-gray-700/50">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <FaGithub className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold mb-4 text-white">
                    Start Contributing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/80 group-hover:text-white/90 transition-colors duration-300 mb-4 dark:text-white/80 dark:group-hover:text-white/90">
                    Fork our repository and start working on issues or propose new features.
                  </CardDescription>
                  <a href="https://github.com/vaishcodescape/Keradon-Citadel.git" target="_blank" rel="noopener noreferrer">
                    <Button variant="default" size="lg" className="bg-white text-black hover:bg-gray-100">
                      View on GitHub
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-black/90 backdrop-blur-xl border-gray-800/30 hover:border-gray-700/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] group dark:bg-black/90 dark:border-gray-800/30 dark:hover:border-gray-700/50">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <FaHandshake className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold mb-4 text-white">
                    Join the Program
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/80 group-hover:text-white/90 transition-colors duration-300 mb-4 dark:text-white/80 dark:group-hover:text-white/90">
                    Sign up for our contributor program to get access to exclusive benefits and resources.
                  </CardDescription>
                  <Button variant="default" size="lg" className="bg-white text-black hover:bg-gray-100">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <Card className="bg-black/90 backdrop-blur-xl border-gray-800/30 hover:border-gray-700/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] group dark:bg-black/90 dark:border-gray-800/30 dark:hover:border-gray-700/50">
            <CardHeader>
              <div className="w-20 h-20 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-500">
                <FaRocket className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold mb-6 text-white">
                Ready to Make an Impact?
              </CardTitle>
              <CardDescription className="text-xl text-white/80 mb-8 max-w-2xl mx-auto dark:text-white/80">
                Join our community of contributors and help shape the future of data analytics. Your contributions can make a real difference.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="default" size="lg" className="bg-white text-black hover:bg-gray-100">
                Get Started Today
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
} 