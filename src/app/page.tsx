/*Keradon Landing Page*/
'use client';
import Button from '../components/Button';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-95 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/50 to-black animate-pulse"></div>
        <div className="bg-black/90 backdrop-blur-xl rounded-3xl shadow-[0_0_30px_rgba(255,255,255,0.1)] p-12 w-full max-w-4xl flex flex-col items-center relative z-10 border border-gray-800/30 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 animate-slide-up text-white">
            Dive Deep into Data with Keradon 
          </h1>
          <p className="text-xl md:text-2xl text-white/90 text-center mb-8 max-w-2xl animate-slide-up animation-delay-200">
            Navigate the vast ocean of data with our AI-powered search and visualization tool.
          </p>
          <Button />
        </div>
      </section>

      {/*Middle Section*/}
      <section className="flex flex-col items-center justify-center min-h-screen py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-95 animate-gradient-x-reverse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/50 to-black animate-pulse"></div>
        <div className="w-full max-w-6xl relative z-10 animate-fade-in animation-delay-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/* Left Box */}
            <div className="bg-black/90 backdrop-blur-xl rounded-3xl shadow-[0_0_30px_rgba(255,255,255,0.1)] p-10 border border-gray-800/30 hover:border-gray-700/50 transition-all duration-300">
              <div className="flex flex-col justify-center h-full">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up text-white">
                  Hunt for Insights
                </h1>
                <p className="text-xl text-white/90 mb-8 animate-slide-up animation-delay-200">
                  Like a shark in the water, swiftly find and analyze the data you need.
                </p>
                <button className="bg-white text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 animate-bounce-subtle shadow-[0_0_20px_rgba(255,255,255,0.3)] self-start">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Box */}
            <div className="bg-black/90 backdrop-blur-xl rounded-3xl shadow-[0_0_30px_rgba(255,255,255,0.1)] p-10 border border-gray-800/30 hover:border-gray-700/50 transition-all duration-300">
              <div className="flex flex-col justify-center h-full">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up text-white">
                  Use Data Analytics to make your next project
                </h1>
                <p className="text-xl text-white/90 mb-8 animate-slide-up animation-delay-200">
                  Transform your data into actionable insights with our powerful analytics tools.
                </p>
                <button className="bg-white text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 animate-bounce-subtle shadow-[0_0_20px_rgba(255,255,255,0.3)] self-start">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        {/* Subtle Monochrome Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800 opacity-90 animate-gradient-x"></div>
        {/* Glassmorphism Card */}
        <div className="relative z-10 max-w-2xl w-full mx-auto px-6 py-16 rounded-3xl bg-black/70 backdrop-blur-xl shadow-2xl border border-white/10 flex flex-col items-center">
          <h2 className="text-5xl md:text-7xl font-extrabold text-center mb-6 animate-slide-up text-white drop-shadow-lg">
            No Noise.No Cloud.Just Smart WebScraping
          </h2>
          <p className="text-2xl text-gray-200 text-center mb-10 animate-fade-in animation-delay-200 font-medium">
            Try Keradon for free.
          </p>
          <button className="bg-white text-black px-12 py-4 rounded-full font-semibold text-lg mb-4 hover:bg-gray-100 transition animate-pulse-glow shadow-xl focus:outline-none focus:ring-4 focus:ring-white/30">
            Download
          </button>
          <a href="#" className="text-gray-300 hover:text-white transition animate-fade-in block text-lg underline">
            Interested in contributing?
          </a>
        </div>
        {/* Decorative Floating Blobs (Monochrome) */}
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-24 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float animation-delay-200"></div>
      </section>
    </main>
  );
}