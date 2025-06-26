'use client';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { Home } from 'lucide-react';
import AnimatedLogo from './AnimatedLogo';
import Link from 'next/link';
import { ThemeSwitcher } from './theme-switcher';
import { useRouter } from 'next/navigation'
import { Button } from './ui/button';
import {
  Navbar as ResizableNavbar,
  NavBody,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from './ui/resizable-navbar';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const router = useRouter();

  const programs = [
    { name: 'OSS Contributor Program', href: '/oss_program' },
    { name: 'Community', href: '#' }
  ];

  const navItems = [
    { name: 'Pricing', link: '#' },
    { name: 'Github', link: 'https://github.com/vaishcodescape/Keradon-Citadel.git' },
  ];

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  const handleHomeClick = () => {
    router.push('/');
  };

  const handleDropdownEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setActiveDropdown('programs');
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 1000);
    setDropdownTimeout(timeout);
  };

  return (
    <>
      {/* Floating Home Button */}
      <Button
        onClick={handleHomeClick}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white text-black shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-110"
        size="icon"
      >
        <Home className="h-5 w-5 sm:h-6 sm:w-6" />
      </Button>

      {/* Desktop Navbar */}
      <ResizableNavbar>
        <NavBody>
          {/* Logo */}
           
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
              <AnimatedLogo />
            </div>


          {/* Navigation Items with Programs Dropdown */}
          <div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-6 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-6 px-48">
            {navItems.map((item, idx) => (
              <Link
                key={item.name}
                href={item.link}
                className="relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  {item.name}
                </span>
              </Link>
            ))}
            
            {/* Programs Dropdown */}
            <div className="relative">
              <button 
                className="relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Programs
                  <FaChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${activeDropdown === 'programs' ? 'rotate-180' : ''}`} />
                </span>
              </button>
              <div 
                className={`absolute left-0 top-full mt-2 w-48 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-xl border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-lg py-2 z-50
                  transform transition-all duration-300 ease-out origin-top
                  ${activeDropdown === 'programs' 
                    ? 'opacity-100 scale-100 translate-y-0' 
                    : 'opacity-0 scale-95 translate-y-0 pointer-events-none'}`}
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                {programs.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300 text-sm"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Theme Switcher */}
          <div className="relative z-10 flex items-center space-x-4">
            <ThemeSwitcher />
          </div>
        </NavBody>
      </ResizableNavbar>

      {/* Mobile Navbar */}
      <MobileNav>
        <MobileNavHeader>
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 sm:space-x-4 group no-underline">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
              <AnimatedLogo />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-foreground text-lg sm:text-2xl font-bold tracking-wide group-hover:text-foreground/90 transition-all duration-300 leading-none">
                Keradon
              </span>
              <span className="text-muted-foreground text-xs sm:text-sm tracking-wide font-light leading-none mt-0.5">
                Built to Hunt
              </span>
            </div>
          </Link>

          {/* Mobile Menu Toggle */}
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        {/* Mobile Menu */}
        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={handleMobileMenuClose}
        >
          <div className="flex flex-col space-y-4 w-full">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-white transition-all duration-300 text-base sm:text-lg font-medium"
                onClick={handleMobileMenuClose}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Programs in Mobile */}
            <div className="space-y-2">
              <span className="text-neutral-600 dark:text-neutral-300 text-base sm:text-lg font-medium">Programs</span>
              {programs.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block pl-4 text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-white transition-all duration-300 text-sm sm:text-base"
                  onClick={handleMobileMenuClose}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Theme Switcher in Mobile */}
            <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
              <ThemeSwitcher />
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </>
  );
} 