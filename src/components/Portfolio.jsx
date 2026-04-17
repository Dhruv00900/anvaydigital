// components/Portfolio.jsx - WITH SMOOTH SCROLL ANIMATIONS
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import only the web.png file (make sure the extension matches exactly)
import webDevImg from '../assets/web.png'; // or '../assets/web.PNG' if extension is uppercase
import billImg from '../assets/bill.png';
import wedoImg from '../assets/wedo.jpg';
import brandImg from '../assets/brand.jpeg';
const projects = [
  { 
    id: 1, 
    title: "Logo | Business Card | Brochure | Packaging Design", 
    category: "Branding", 
    image: brandImg
  },
  { 
    id: 2, 
    title: "Web | Ui/Ux | App", 
    category: "Web Development", 
    image: webDevImg // Using your local web.png here
  },
  { 
    id: 3, 
    title: "Social Media Handling | SEO | Google ads (PPC) | Lead Generation ", 
    category: "Digital Marketing", 
    image: wedoImg
  },
  { 
    id: 4, 
    title: "Bill board | Cinema | Radio | TV", 
    category: "Outdoor Marketing", 
    image: billImg 
  }
];
 
const Portfolio = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="work" 
      ref={sectionRef}
      className="py-32 px-6 md:px-12 lg:px-20 section-transition"
      style={{ backgroundColor: '#000000', color: '#FFFFFF' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm tracking-[0.3em] uppercase text-yellow-400 block mb-4">/ OUR WORK</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
            Featured <span className="text-yellow-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mt-6" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              ref={el => cardsRef.current[idx] = el}
              className="group cursor-pointer opacity-0"
            >
              <div className="relative overflow-hidden rounded-3xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-yellow-400 text-sm mb-2">{project.category}</div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;