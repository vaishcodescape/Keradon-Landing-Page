"use client";

import { FaGithub, FaCode, FaUsers, FaTrophy, FaRocket, FaHandshake } from 'react-icons/fa';

export default function OSSProgram() {
  return (
    <main className="min-h-screen bg-black">
      <section className="flex flex-col items-center justify-center min-h-screen pt-32 pb-40 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-95 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/50 to-black animate-pulse"></div>
        
        <div className="w-full max-w-6xl relative z-10 animate-fade-in text-center pt-20">
          {/* Hero Section */}
          <div className="mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up text-white">
              Open Source Contributor Program
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto animate-slide-up animation-delay-200">
              Join our community of developers and help shape the future of data analytics. Contribute to Keradon and make a real impact.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {/* Recognition */}
            <div className="bg-black/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-800/30 hover:border-gray-700/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <FaTrophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Recognition
              </h3>
              <p className="text-white/80 group-hover:text-white/90 transition-colors duration-300">
                Get recognized for your contributions with public profiles and achievement badges.</p>
                <p className="text-white/80 group-hover:text-white/90 transition-colors duration-300 font-bold">Certificates of Contribution would be given by the company would be given to the contributors.</p>
            </div>

            {/* Learning */}
            <div className="bg-black/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-800/30 hover:border-gray-700/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <FaCode className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Learning
              </h3>
              <p className="text-white/80 group-hover:text-white/90 transition-colors duration-300">
                Access exclusive resources and mentorship from experienced developers.</p>
                <p className="text-white/80 group-hover:text-white/90 transition-colors duration-300 font-bold">Enhance your skills in the world of Open Source Contribution.</p>
            </div>

            {/* Community */}
            <div className="bg-black/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-800/30 hover:border-gray-700/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <FaUsers className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-orange-500 bg-clip-text text-transparent">
                Community
              </h3>
              <p className="text-white/80 group-hover:text-white/90 transition-colors duration-300">
                Join a vibrant community of developers passionate about Open Source Contribution and Data Analytics.</p>
                <p className="text-white/80 group-hover:text-white/90 transition-colors duration-300 font-bold">Enhance your Learning and Contribute to the Open Source Community.</p>
            </div>
          </div>

          {/* How to Contribute */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-white">How to Contribute</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-800/30 hover:border-gray-700/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] group">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <FaGithub className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                  Start Contributing
                </h3>
                <p className="text-white/80 group-hover:text-white/90 transition-colors duration-300 mb-4">
                  Fork our repository and start working on issues or propose new features.
                </p>
                <a 
                  href="https://github.com/vaishcodescape/Keradon-landing-page.git" 
                  className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full text-white font-medium hover:from-orange-600 hover:to-yellow-600 transition-all duration-300"
                >
                  View on GitHub
                </a>
              </div>

              <div className="bg-black/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-800/30 hover:border-gray-700/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] group">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <FaHandshake className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-green-500 bg-clip-text text-transparent">
                  Join the Program
                </h3>
                <p className="text-white/80 group-hover:text-white/90 transition-colors duration-300 mb-4">
                  Sign up for our contributor program to get access to exclusive benefits and resources.
                </p>
                <a 
                  href="#" 
                  className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-500 to-green-500 rounded-full text-white font-medium hover:from-yellow-600 hover:to-green-600 transition-all duration-300"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-black/90 backdrop-blur-xl rounded-3xl p-12 border border-gray-800/30 hover:border-gray-700/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] group">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-500">
              <FaRocket className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Ready to Make an Impact?
            </h3>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join our community of contributors and help shape the future of data analytics. Your contributions can make a real difference.
            </p>
            <a 
              href="#" 
              className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full text-white font-medium text-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 