'use client';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import AnimatedLogo from './AnimatedLogo';
import Link from 'next/link';

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const resources = [
    { name: 'Documentation', Link: '#' },
    { name: 'API Reference', Link: '#' },
    { name: 'Blog', href: '#' }
  ];

  const programs = [
    { name: 'OSS Contributer Program', Link: '#' },
    { name: 'Community', href: '#' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3 group no-underline">
              <AnimatedLogo />
              <div className="flex flex-col">
                <span className="text-white text-3xl font-Space Grotesk sans-serif tracking-wider animate-fade-in shadow-white/20 shadow-lg group-hover:text-white/90 transition-all duration-300">
                  Keradon
                </span>
                <span className="text-white/60 text-sm tracking-wider font-light italic animate-fade-in">
                  Built to Hunt
                </span>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Features</a>
            <a href="#" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Pricing</a>
            
            {/* Resources Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center text-white/80 hover:text-white transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                onMouseEnter={() => setActiveDropdown('resources')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Resources
                <FaChevronDown className={`ml-1 h-3 w-3 transition-transform duration-300 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>
              <div 
                className={`absolute left-0 mt-2 w-48 bg-black/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-lg py-2
                  transform transition-all duration-300 ease-out origin-top
                  ${activeDropdown === 'resources' 
                    ? 'opacity-100 scale-100 translate-y-0' 
                    : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
                onMouseEnter={() => setActiveDropdown('resources')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {resources.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300
                      hover:translate-x-1 hover:scale-105"
                    style={{ animationDelay: `${index * 2000}ms` }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Programs Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center text-white/80 hover:text-white transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                onMouseEnter={() => setActiveDropdown('programs')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Programs
                <FaChevronDown className={`ml-1 h-3 w-3 transition-transform duration-300 ${activeDropdown === 'programs' ? 'rotate-180' : ''}`} />
              </button>
              <div 
                className={`absolute left-0 mt-2 w-48 bg-black/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-lg py-2
                  transform transition-all duration-300 ease-out origin-top
                  ${activeDropdown === 'programs' 
                    ? 'opacity-100 scale-100 translate-y-0' 
                    : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
                onMouseEnter={() => setActiveDropdown('programs')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {programs.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300
                      hover:translate-x-1 hover:scale-105"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <a href="#" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">About</a>
            <a href="https://github.com/vaishcodescape/Keradon-landing-page.git" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Github</a>
          </div>
        </div>
      </div>
    </nav>
  );
} 