"use client";

export default function About() {
  return (
    <main className="min-h-screen bg-black">
      <section className="flex flex-col items-center justify-center min-h-screen pt-32 pb-40 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-95 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/50 to-black animate-pulse"></div>
        
        <div className="w-full max-w-4xl relative z-10 animate-fade-in text-center pt-20">
          <div className="bg-black/90 backdrop-blur-xl rounded-3xl shadow-[0_0_30px_rgba(255,255,255,0.1)] p-12 w-full max-w-4xl flex flex-col items-center relative z-10 border border-gray-800/30 animate-fade-in hover:border-gray-700/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] group hover:bg-black/95">
            <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 animate-slide-up bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:via-purple-600 group-hover:to-pink-600 transition-all duration-700 ease-in-out">
              The Best Platform for Data Analytics
            </h1>
            <p className="text-xl text-white/80 animate-slide-up animation-delay-200 max-w-2xl group-hover:text-white/90 transition-all duration-500 ease-in-out">
              Transform your data into actionable insights with our powerful analytics platform.
            </p>
          </div>

          <div className="bg-black/90 backdrop-blur-xl rounded-3xl shadow-[0_0_30px_rgba(255,255,255,0.1)] p-12 w-full max-w-4xl flex flex-col items-center relative z-10 border border-gray-800/30 animate-fade-in mt-12 hover:border-gray-700/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] group hover:bg-black/95">
            <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 animate-slide-up bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent group-hover:from-purple-500 group-hover:via-pink-600 group-hover:to-orange-600 transition-all duration-700 ease-in-out">
              AI-Powered Analytics Tools
            </h1>
            <p className="text-xl text-white/80 animate-slide-up animation-delay-200 max-w-2xl group-hover:text-white/90 transition-all duration-500 ease-in-out">
              Leverage cutting-edge AI technology to analyze and visualize your data like never before.
            </p>
          </div>

          <div className="bg-black/90 backdrop-blur-xl rounded-3xl shadow-[0_0_30px_rgba(255,255,255,0.1)] p-12 w-full max-w-4xl flex flex-col items-center relative z-10 border border-gray-800/30 animate-fade-in mt-12 hover:border-gray-700/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] group hover:bg-black/95">
            <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 animate-slide-up bg-gradient-to-r from-pink-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent group-hover:from-pink-500 group-hover:via-orange-600 group-hover:to-yellow-600 transition-all duration-700 ease-in-out">
              Built for Everyone
            </h1>
            <p className="text-xl text-white/80 animate-slide-up animation-delay-200 max-w-2xl group-hover:text-white/90 transition-all duration-500 ease-in-out">
              Whether you&apos;re a student, data scientist, or business analyst, Keradon has the tools you need.
            </p>
          </div>

          <div className="bg-black/90 backdrop-blur-xl rounded-3xl shadow-[0_0_30px_rgba(255,255,255,0.1)] p-12 w-full max-w-4xl flex flex-col items-center relative z-10 border border-gray-800/30 animate-fade-in mt-12 hover:border-gray-700/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] group hover:bg-black/95">
            <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 animate-slide-up bg-gradient-to-r from-orange-400 via-yellow-500 to-green-500 bg-clip-text text-transparent group-hover:from-orange-500 group-hover:via-yellow-600 group-hover:to-green-600 transition-all duration-700 ease-in-out">
              Build Mind Blowing Projects
            </h1>
            <p className="text-xl text-white/80 animate-slide-up animation-delay-200 max-w-2xl group-hover:text-white/90 transition-all duration-500 ease-in-out">
              Keradon has been tailored for data hunting and data analysis by which you can build mind blowing data projects.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
