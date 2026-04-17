// components/Hero.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedSphere from './AnimatedSphere';

const Hero = () => {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create timeline for hero entrance
      const tl = gsap.timeline();
      
      // Animate headline words
      const words = headlineRef.current.querySelectorAll('.word');
      tl.fromTo(words,
        { 
          y: 200, 
          opacity: 0,
          rotateX: -90,
          transformOrigin: "50% 50%"
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          stagger: 0.04,
          ease: "back.out(1.2)",
        }
      );
      
      // Animate subtitle
      tl.fromTo(subtitleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      );
      
      // Animate CTA button
      tl.fromTo(ctaRef.current,
        { y: 30, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "back.out(0.8)" },
        "-=0.3"
      );
      
      // Scroll indicator animation
      gsap.to(scrollIndicatorRef.current, {
        y: 12,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
      
      // Parallax effect for sphere on scroll
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const sphere = document.querySelector('.animated-sphere-container');
          if (sphere) {
            gsap.to(sphere, {
              y: self.progress * 100,
              scale: 1 - self.progress * 0.2,
              duration: 0.1,
              overwrite: true
            });
          }
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    
    <section 
     id="home"  // ADD THIS LINE
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#000000', color: '#FFFFFF' }}
    >
      {/* 3D Sphere Background */}
      <div className="absolute inset-0 z-0 animated-sphere-container">
        <AnimatedSphere />
      </div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 z-10" />
      
      <div className="relative z-20 text-center px-6 max-w-7xl mx-auto">
        <div className="mb-8 overflow-hidden">
          <span className="inline-block text-sm tracking-[0.3em] uppercase text-yellow-400 animate-fade-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Anvaya Digital
          </span>
        </div>
        
        <h1 
          ref={headlineRef}
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[1.05] md:leading-[1.1]"
        >
          We Grow<br />
          Brands <span className="text-yellow-400">Digitally</span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="mt-10 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto opacity-0"
        >
          We craft digital experiences that transform businesses and create lasting impact in the digital landscape.
        </p>
        
        <div 
          ref={ctaRef}
          className="mt-12 opacity-0"
        >
          <button className="group relative px-10 py-5 bg-yellow-400 text-black font-semibold rounded-full overflow-hidden transition-all hover:shadow-2xl hover:shadow-yellow-400/40">
            <span className="relative z-10 flex items-center gap-2">
              Explore Our Work
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.2,0.9,0.4,1.1)]" />
          </button>
        </div>
      </div>
      
      <div 
        ref={scrollIndicatorRef}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        {/* <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-[0.2em] text-gray-400">SCROLL</span>
          <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
            <div className="w-1.5 h-2.5 bg-yellow-400 rounded-full mt-2" />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;