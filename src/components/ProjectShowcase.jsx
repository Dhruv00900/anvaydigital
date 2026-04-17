import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const projects = [
  {
    id: 1,
    title: "SKYLINE SOCIAL",
    category: "Social Media Handling",
    // Professional image: High-end lifestyle/content creation setup
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1400&h=900&fit=crop",
    color: "#000000"
  },
  {
    id: 2,
    title: "LUMINA SPACE",
    category: "Digital Experience",
    // Professional image: Minimalist modern architecture/tech
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&h=900&fit=crop",
    color: "#1a1a1a"
  },
  {
    id: 3,
    title: "ECHO STUDIO",
    category: "Brand Identity",
    // Professional image: Premium stationery/branding mockup
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?w=1400&h=900&fit=crop",
    color: "#2a2a2a"
  },
  {
    id: 4,
    title: "VERTEX AI",
    category: "Product Design",
    // Professional image: Futuristic interface/clean workspace
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1400&h=900&fit=crop",
    color: "#333333"
  }
];

const ProjectShowcase = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.project-slide');
      
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          // Base the end trigger on the number of slides
          end: () => `+=${containerRef.current.offsetWidth * sections.length}`,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const index = Math.round(self.progress * (sections.length - 1));
            setActiveIndex(index);
          }
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden bg-black">
      {/* Dynamic Header Info */}
      <div className="absolute top-12 left-12 z-30 text-white mix-blend-difference pointer-events-none">
        <span className="text-xs tracking-[0.4em] uppercase opacity-60">Selected Work</span>
        <div className="text-3xl font-black mt-2">
          {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
        </div>
      </div>
      
      <div className="flex h-full">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className="project-slide relative w-screen h-full flex-shrink-0 flex items-center justify-center overflow-hidden"
          >
            {/* Background Image with Zoom Effect */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out"
              style={{ 
                backgroundImage: `url(${project.image})`,
                transform: activeIndex === idx ? 'scale(1.1)' : 'scale(1.2)'
              }}
            />
            
            {/* Overlay Gradient for Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
            
            {/* Text Content */}
            <div 
              className="relative z-20 text-center text-white px-6 max-w-4xl"
              onMouseEnter={() => setIsHovering(idx)}
              onMouseLeave={() => setIsHovering(null)}
            >
              <p className="text-sm md:text-base tracking-[0.5em] uppercase mb-6 opacity-0 translate-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-forwards" style={{ animationDelay: '0.2s' }}>
                {project.category}
              </p>
              <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter mb-8 leading-none">
                {project.title}
              </h2>
              
              <button className="group relative overflow-hidden px-8 py-4 border border-white/30 rounded-full transition-all hover:bg-white hover:text-black">
                <span className="relative z-10 text-sm font-bold tracking-widest">VIEW PROJECT →</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Custom Navigation Dots */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-30">
        {projects.map((_, idx) => (
          <div
            key={idx}
            className={`transition-all duration-500 rounded-full ${
              idx === activeIndex 
                ? 'w-12 h-1.5 bg-yellow-500' 
                : 'w-2 h-2 bg-white/30'
            }`}
          />
        ))}
      </div>

      {/* Side Decorative Text */}
      <div className="absolute right-12 bottom-12 z-30 text-white mix-blend-difference hidden md:block">
        <span className="text-[10px] tracking-[0.8em] uppercase vertical-text opacity-40">
          Anvaya Digital © 2026
        </span>
      </div>
    </section>
  );
};

export default ProjectShowcase;