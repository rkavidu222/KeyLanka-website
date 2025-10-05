import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon, ShieldCheckIcon } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll background effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'benefits' },
    { name: 'Management', id: 'team' },
    { name: 'Contact', id: 'contact' },
  ];

  // Smooth scroll to section
  const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMenuOpen(false);
  }
};


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollToSection('hero')} className="flex items-center group">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform shadow-md hover:shadow-xl">
            <ShieldCheckIcon className="h-6 w-6 text-white" />
          </div>
          <div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent transition-transform group-hover:scale-105">
              KEY LANKA
            </span>
            <span className="text-2xl font-bold text-blue-900 ml-1 transition-transform group-hover:scale-105">
              SOLUTIONS
            </span>
          </div>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative text-gray-800 font-medium transition-all hover:text-blue-600 px-2 py-1 rounded-lg
                after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all
                hover:after:w-full hover:scale-105 hover:shadow-sm active:scale-95"
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-2.5 rounded-full font-medium transition-all hover:shadow-lg hover:scale-105 active:scale-95"
          >
            Get a Quote
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 focus:outline-none bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors shadow-sm hover:shadow-md"
          >
            {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-[500px] opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="bg-white shadow-lg rounded-b-2xl mx-4 px-4 py-4 flex flex-col space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-800 font-medium py-2 px-4 rounded-lg hover:text-blue-600 hover:bg-blue-50
                transition-all hover:scale-105 shadow-sm hover:shadow-md active:scale-95 text-left"
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-center font-medium
              transition-all hover:scale-105 shadow-sm hover:shadow-md active:scale-95"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </header>
  );
}
