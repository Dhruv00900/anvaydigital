import React, { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Simple intersection observer instead of GSAP ScrollTrigger
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Professional SVG Icons
  const ProjectIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 12H17M8 12L6 10H2L4 12L2 14H6L8 12ZM17 12L15 10M17 12L15 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 22.5C18.7614 22.5 21 17.799 21 12C21 6.20101 18.7614 1.5 16 1.5C13.2386 1.5 11 6.20101 11 12C11 17.799 13.2386 22.5 16 22.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const SatisfactionIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M13.6672 1.71213C13.8263 1.32969 14.2653 1.14863 14.6477 1.30772C15.0302 1.46682 15.2112 1.90582 15.0521 2.28826L14.0121 4.78826C13.8531 5.17071 13.414 5.35176 13.0316 5.19267C12.6492 5.03357 12.4681 4.59457 12.6272 4.21213L13.6672 1.71213ZM17.3136 1.6973C17.4808 1.31837 17.9236 1.1468 18.3026 1.31408C18.6815 1.48137 18.8531 1.92416 18.6858 2.30309L15.251 10.0834C17.3366 11.2319 18.7497 13.451 18.7497 16.0002C18.7497 19.7281 15.7276 22.7502 11.9997 22.7502C8.27175 22.7502 5.24968 19.7281 5.24968 16.0002C5.24968 13.6261 6.47537 11.5382 8.32849 10.3349L4.32886 2.33561C4.14361 1.96512 4.29378 1.51462 4.66427 1.32938C5.03475 1.14413 5.48525 1.2943 5.6705 1.66479L9.66966 9.66314C10.2603 9.44589 10.8898 9.30887 11.5448 9.26528L8.16062 2.32906C7.979 1.9568 8.13354 1.50777 8.50581 1.32614C8.87808 1.14452 9.3271 1.29906 9.50873 1.67133L13.2641 9.36843C13.4675 9.40697 13.6676 9.45463 13.8641 9.51097L17.3136 1.6973ZM12.0499 12.9C12.2771 12.7296 12.5812 12.7021 12.8353 12.8292C13.0894 12.9562 13.2499 13.2159 13.2499 13.5V18.5C13.2499 18.9142 12.9141 19.25 12.4999 19.25C12.0856 19.25 11.7499 18.9142 11.7499 18.5V15L10.9499 15.6C10.6185 15.8485 10.1484 15.7814 9.89986 15.45C9.65134 15.1186 9.71849 14.6485 10.0499 14.4L12.0499 12.9Z" fill="currentColor"/>
    </svg>
  );

  const AwardIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <section 
     id="about"  // ADD THIS
      ref={sectionRef}
      className="py-32 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: '#DD8519', color: '#000000' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <div className="reveal-on-scroll opacity-0">
            <span className="text-sm tracking-[0.3em] uppercase text-black/50 mb-6 block">/ ABOUT ANVAYA</span>
          </div>
          
          <h2 className="reveal-on-scroll opacity-0 text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-10 leading-[1.15]">
            We don't just build brands.
            <br />
            We build <span className="border-b-8 border-black">legacies</span>.
          </h2>
          
          <p className="reveal-on-scroll opacity-0 text-black/70 text-xl md:text-2xl leading-relaxed mb-8 max-w-3xl">
            Anvaya Digital is a India-based creative agency that specializes in crafting 
            digital experiences that resonate, engage, and convert.
          </p>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="reveal-on-scroll opacity-0 bg-black/5 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-black/10 transition-all duration-500">
            <div className="flex justify-center mb-4 text-black/70">
              <ProjectIcon />
            </div>
            <div className="text-5xl md:text-6xl font-black mb-2">420+</div>
            <div className="text-black/60 font-medium">Projects Completed</div>
          </div>
          
          <div className="reveal-on-scroll opacity-0 bg-black/5 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-black/10 transition-all duration-500">
            <div className="flex justify-center mb-4 text-black/70">
              <SatisfactionIcon />
            </div>
            <div className="text-5xl md:text-6xl font-black mb-2">100%</div>
            <div className="text-black/60 font-medium">Client Satisfaction</div>
          </div>
          
          <div className="reveal-on-scroll opacity-0 bg-black/5 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-black/10 transition-all duration-500">
            <div className="flex justify-center mb-4 text-black/70">
              <AwardIcon />
            </div>
            <div className="text-5xl md:text-6xl font-black mb-2">9+</div>
            <div className="text-black/60 font-medium">Industry Awards</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;