'use client';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import AnimatedLogo from './AnimatedLogo';
import Link from 'next/link';
import { ThemeSwitcher } from './theme-switcher';

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const resources = [
    { name: 'Documentation', href: '#' },
    { name: 'API Reference', href: '#' },
    { name: 'Blog', href: '#' }
  ];

  const programs = [
    { name: 'OSS Contributor Program', href: '/oss_program' },
    { name: 'Community', href: '#' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-4 group no-underline">
            <div className="w-14 h-14 flex items-center justify-center">
              <AnimatedLogo />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-foreground text-2xl font-bold tracking-wide group-hover:text-foreground/90 transition-all duration-300 leading-none">
                Keradon
              </span>
              <span className="text-muted-foreground text-sm tracking-wide font-light leading-none mt-0.5">
                Built to Hunt
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            <Link href="/features" className="text-muted-foreground hover:text-foreground transition-all duration-300 text-sm font-medium">
              Features
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-all duration-300 text-sm font-medium">
              Pricing
            </Link>
            
            {/* Resources Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center text-muted-foreground hover:text-foreground transition-all duration-300 text-sm font-medium"
                onMouseEnter={() => setActiveDropdown('resources')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Resources
                <FaChevronDown className={`ml-1 h-3 w-3 transition-transform duration-300 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>
              <div 
                className={`absolute left-0 mt-2 w-48 bg-background/95 backdrop-blur-xl border border-border rounded-lg shadow-lg py-2
                  transform transition-all duration-300 ease-out origin-top
                  ${activeDropdown === 'resources' 
                    ? 'opacity-100 scale-100 translate-y-0' 
                    : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
                onMouseEnter={() => setActiveDropdown('resources')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {resources.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-300 text-sm"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Programs Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center text-muted-foreground hover:text-foreground transition-all duration-300 text-sm font-medium"
                onMouseEnter={() => setActiveDropdown('programs')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Programs
                <FaChevronDown className={`ml-1 h-3 w-3 transition-transform duration-300 ${activeDropdown === 'programs' ? 'rotate-180' : ''}`} />
              </button>
              <div 
                className={`absolute left-0 mt-2 w-48 bg-background/95 backdrop-blur-xl border border-border rounded-lg shadow-lg py-2
                  transform transition-all duration-300 ease-out origin-top
                  ${activeDropdown === 'programs' 
                    ? 'opacity-100 scale-100 translate-y-0' 
                    : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
                onMouseEnter={() => setActiveDropdown('programs')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {programs.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-300 text-sm"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/about" className="text-muted-foreground hover:text-foreground transition-all duration-300 text-sm font-medium">
              About
            </Link>
            <Link href="https://github.com/vaishcodescape/Keradon-landing-page.git" className="text-muted-foreground hover:text-foreground transition-all duration-300 text-sm font-medium">
              Github
            </Link>
          </div>

          {/* Theme Switcher */}
          <div className="flex items-center space-x-4">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
} 