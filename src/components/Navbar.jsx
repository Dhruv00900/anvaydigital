// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Update active link based on scroll position
      const sections = ['home', 'about', 'services', 'work', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'auto';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'auto';
    };
  }, [isOpen]);

  // Animate mobile menu
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo('.mobile-menu',
        { x: '100%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 0.5, ease: 'power3.out' }
      );
      gsap.fromTo('.mobile-link',
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.08, duration: 0.4, ease: 'back.out(0.6)' }
      );
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Work', href: '#work', id: 'work' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e, href, id) => {
    e.preventDefault();
    setActiveLink(id);
    setIsOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Adjust for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleCTAClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      const offsetTop = contactSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5 md:py-10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo Section - Responsive */}
            <a 
              href="#home" 
              className="relative z-50 group block"
              onClick={(e) => handleLinkClick(e, '#home', 'home')}
            >
              <img 
                src="/images/logos.png"
                alt="Anvaya Digital - Digital Marketing Agency in Rajkot"
                className="h-7 sm:h-8 md:h-10 lg:h-12 w-auto object-contain transition-all duration-300 group-hover:opacity-90 group-hover:scale-105"
              />
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8 xl:gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href, link.id)}
                  className={`relative text-sm lg:text-base font-medium transition-all duration-300 group whitespace-nowrap ${
                    activeLink === link.id 
                      ? 'text-yellow-400' 
                      : 'text-white/90 hover:text-yellow-400'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-yellow-400 transition-all duration-300 ${
                    activeLink === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </a>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <button 
                onClick={handleCTAClick}
                className="px-5 py-2.5 bg-yellow-400 text-black font-semibold rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105 text-sm shadow-lg hover:shadow-yellow-400/25"
              >
                Let's Talk
              </button>
            </div>

            {/* Mobile Menu Button - Improved */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 group focus:outline-none"
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ease-out ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}></span>
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ease-out ${
                isOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ease-out ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Fully Responsive */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
        isOpen ? 'visible' : 'invisible pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/95 backdrop-blur-lg transition-opacity duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu Content - Responsive width and padding */}
        <div className="mobile-menu fixed right-0 top-0 h-full w-full sm:w-96 bg-gradient-to-br from-black via-gray-900 to-black shadow-2xl transform transition-transform duration-500 overflow-y-auto">
          <div className="flex flex-col pt-24 sm:pt-28 px-6 sm:px-8 pb-8">
            {/* Mobile Logo */}
            <div className="mb-8 sm:mb-12 text-center">
              <img 
                src="/images/anvaya-logo.png"
                alt="Anvaya Digital"
                className="h-10 sm:h-12 w-auto object-contain mx-auto"
              />
              <p className="text-gray-500 text-xs sm:text-sm mt-2 sm:mt-3">Digital Agency</p>
            </div>

            {/* Mobile Navigation Links - Touch friendly */}
            <div className="flex flex-col gap-2 sm:gap-3 mb-8 sm:mb-12">
              {navLinks.map((link, idx) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="mobile-link group relative overflow-hidden"
                  onClick={(e) => handleLinkClick(e, link.href, link.id)}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className={`flex items-center justify-between py-3.5 sm:py-4 px-4 sm:px-6 rounded-xl transition-all duration-300 ${
                    activeLink === link.id 
                      ? 'bg-yellow-400/10 border border-yellow-400/30' 
                      : 'bg-white/5 hover:bg-yellow-400/5'
                  }`}>
                    <span className={`text-base sm:text-lg font-medium transition-colors duration-300 ${
                      activeLink === link.id 
                        ? 'text-yellow-400' 
                        : 'text-white group-hover:text-yellow-400'
                    }`}>
                      {link.name}
                    </span>
                    <svg 
                      className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 ${
                        activeLink === link.id 
                          ? 'text-yellow-400 translate-x-1' 
                          : 'text-gray-500 group-hover:text-yellow-400 group-hover:translate-x-1'
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>

            {/* Mobile CTA Button */}
            <div className="mobile-link pt-4 sm:pt-6 border-t border-white/10">
              <button 
                onClick={handleCTAClick}
                className="w-full py-3.5 sm:py-4 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-white transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-md"
              >
                Start a Project →
              </button>
            </div>

            {/* Mobile Social Links - Improved touch targets */}
            <div className="mobile-link mt-6 sm:mt-8 flex justify-center gap-6 sm:gap-8">
              <a 
                href="#" 
                className="text-gray-400 hover:text-yellow-400 transition-all transform hover:scale-110 p-2"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/anvaya.digital/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-yellow-400 transition-all transform hover:scale-110 p-2"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-yellow-400 transition-all transform hover:scale-110 p-2"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>

            {/* Contact Info - Responsive text sizes */}
            <div className="mobile-link mt-6 sm:mt-8 text-center text-gray-500 text-xs sm:text-sm">
              <p className="text-gray-400">Bapa Sitaram Chowk, Rajkot</p>
              <p className="mt-1 sm:mt-1.5 text-gray-400">hello@anvayadigital.com</p>
              <p className="mt-1 sm:mt-1.5 text-gray-500 text-xs">+91 12345 67890</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;