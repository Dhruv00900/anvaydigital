// components/Footer.jsx
import React from 'react';

const Footer = () => {
  // SVG Icons for social media and contact
  const InstagramIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );

  const LinkedInIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.222 0 22.225 0z"/>
    </svg>
  );

  const TwitterIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.913-12.084c0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
    </svg>
  );

  const EmailIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );

  const LocationIcon = () => (
    <svg className="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );

  return (
    <footer className="bg-black text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-black mb-6">
              Anvaya <span className="text-yellow-400">Digital</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Creating digital experiences that transform businesses and create lasting impact in the digital landscape.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-yellow-400 transition-colors flex items-center gap-2 group">Home <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span></a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors flex items-center gap-2 group">About Us <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span></a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors flex items-center gap-2 group">Services <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span></a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors flex items-center gap-2 group">Portfolio <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span></a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Social Media handling</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Branding</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Printing</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Video Editing</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Graphic designing</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Packaging design</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Connect</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="https://www.instagram.com/anvaya.digital/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors flex items-center gap-2">
                  <InstagramIcon />
                  anvaya.digital
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors flex items-center gap-2">
                  <LinkedInIcon />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors flex items-center gap-2">
                  <TwitterIcon />
                  Twitter
                </a>
              </li>
              <li>
               <a 
  href="https://mail.google.com/mail/?view=cm&fs=1&to=anvayadigi@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-yellow-400 transition-colors flex items-center gap-2"
>
  <EmailIcon />
  anvayadigi@gmail.com
</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>
            
            &copy; 2024 Anvaya Digital. All rights reserved.| Rajkot | Delhi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;