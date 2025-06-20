'use client';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { Home } from 'lucide-react';
import AnimatedLogo from './AnimatedLogo';
import Link from 'next/link';
import { ThemeSwitcher } from './theme-switcher';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Navbar as ResizableNavbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from '@/components/ui/resizable-navbar';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router = useRouter();

  const programs = [
    { name: 'OSS Contributor Program', href: '/oss_program' },
    { name: 'Community', href: '#' }
  ];

  const navItems = [
    { name: 'Features', link: '/features' },
    { name: 'Pricing', link: '#' },
    { name: 'About', link: '/about' },
    { name: 'Github', link: 'https://github.com/vaishcodescape/Keradon-Citadel.git' },
  ];

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  const handleHomeClick = () => {
    router.push('/');
  };

  return (
    <>
      {/* Floating Home Button */}
      <Button
        onClick={handleHomeClick}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-foreground text-background shadow-lg hover:bg-foreground/90 transition-all duration-300 hover:scale-110"
        size="icon"
      >
        <Home className="h-6 w-6" />
      </Button>

      {/* Desktop Navbar */}
      <ResizableNavbar>
        <NavBody>
          {/* Logo */}
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

          {/* Navigation Items with Programs Dropdown */}
          <div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-6 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-6 px-48">
            {navItems.map((item, idx) => (
              <Link
                key={item.name}
                href={item.link}
                className="relative px-4 py-2 text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-white transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Programs Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-white transition-all duration-300 text-sm font-medium px-4 py-2 rounded-full"
                onMouseEnter={() => setActiveDropdown('programs')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Programs
                <FaChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${activeDropdown === 'programs' ? 'rotate-180' : ''}`} />
              </button>
              <div 
                className={`absolute left-0 mt-2 w-48 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-xl border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-lg py-2 z-50
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
                className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-white transition-all duration-300 text-lg font-medium"
                onClick={handleMobileMenuClose}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Programs in Mobile */}
            <div className="space-y-2">
              <span className="text-neutral-600 dark:text-neutral-300 text-lg font-medium">Programs</span>
              {programs.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block pl-4 text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-white transition-all duration-300 text-base"
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