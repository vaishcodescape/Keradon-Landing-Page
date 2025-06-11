'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import NextImage from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const resources = [
    { name: 'Documentation', href: '#' },
    { name: 'API Reference', href: '#' },
    { name: 'Blog', href: '#' }
  ];

  const programs = [
    { name: 'OSS Contributer Program', href: '#' },
    { name: 'Community', href: '#' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <NextImage src="/logo.png" alt="WebShark Logo" width={36} height={36} className="h-15 w-15 object-contain bg-white rounded-full p-1" />
            <span className="text-white text-2xl font-bold">WebShark</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105">Features</a>
            <a href="#" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105">Pricing</a>
            
            {/* Resources Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center text-white/80 hover:text-white transition-all duration-300 hover:scale-105"
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
                className="flex items-center text-white/80 hover:text-white transition-all duration-300 hover:scale-105"
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

            <a href="#" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105">About</a>
            <a href="#" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
} 