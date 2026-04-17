import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Professional SVG Icon Components
const SocialMediaIcon = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 8V12L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="17" cy="7" r="1.5" fill="currentColor"/>
    <circle cx="7" cy="17" r="1.5" fill="currentColor"/>
    <path d="M17 17L7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const BrandingIcon = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15 8L22 9L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9L9 8L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 12V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="10" r="1" fill="currentColor"/>
  </svg>
);

const PrintingIcon = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="16" width="12" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M6 9V5C6 3.89543 6.89543 3 8 3H16C17.1046 3 18 3.89543 18 5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M18 9H6C4.34315 9 3 10.3431 3 12V15C3 16.1046 3.89543 17 5 17H19C20.1046 17 21 16.1046 21 15V12C21 10.3431 19.6569 9 18 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="18" cy="12" r="1" fill="currentColor"/>
    <circle cx="6" cy="12" r="1" fill="currentColor"/>
  </svg>
);

const VideoEditingIcon = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="5" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M16 9L21 6V18L16 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 9L10 12L7 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13 9V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const GraphicDesignIcon = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3H21V21H3V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="7.5" cy="7.5" r="1.5" fill="currentColor"/>
    <circle cx="16.5" cy="7.5" r="1.5" fill="currentColor"/>
    <path d="M7 17L10 14L13 16L18 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 21V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 3V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const WebDevIcon = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="3" width="20" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 21V8M16 21V8M3 8H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="16" r="1" fill="currentColor"/>
    <path d="M7 12H8M11 12H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const services = [
  { icon: <SocialMediaIcon />, title: "Social Media Handling", description: "Strategic social media management that builds engaged communities and drives meaningful connections." },
  { icon: <BrandingIcon />, title: "Branding", description: "Create a distinctive brand identity that tells your story and resonates with your audience." },
  { icon: <PrintingIcon />, title: "Printing", description: "High-quality printing solutions for business cards, brochures, banners, and marketing materials." },
  { icon: <VideoEditingIcon />, title: "Video Editing", description: "Professional video editing and post-production that brings your vision to life." },
  { icon: <GraphicDesignIcon />, title: "Graphic Designing", description: "Eye-catching graphic design for logos, social media posts, and marketing collateral." },
  { icon: <WebDevIcon />, title: "Web Development", description: "Custom, responsive websites that deliver exceptional user experiences and drive conversions." }
];

const Services = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current?.children || [],
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%", toggleActions: "play none none reverse" }
        }
      );
      
      gsap.fromTo(cardsRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%", toggleActions: "play none none reverse" }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services"  // ADD THIS
    ref={sectionRef} className="py-32 px-6 md:px-12 lg:px-20 min-h-screen bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="text-center mb-20">
          <span className="text-sm tracking-[0.3em] uppercase text-gray-400 block mb-4 opacity-0">/ WHAT WE DO</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 opacity-0">
            Our <span className="text-yellow-500">Services</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mt-6 opacity-0" />
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg opacity-0">
            Comprehensive digital solutions tailored to your unique needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              ref={el => cardsRef.current[idx] = el}
              className="group relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-3xl transition-all duration-500 border border-gray-100 hover:border-yellow-200 opacity-0"
            >
              <div className="relative z-10">
                <div className="text-yellow-500 mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 inline-block">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <div className="mt-8 inline-flex items-center gap-2 text-yellow-500 font-medium group-hover:gap-4 transition-all cursor-pointer">
                  Learn More →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;