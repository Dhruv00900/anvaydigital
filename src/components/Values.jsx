// components/Values.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const values = [
  { title: "Discipline", description: "Rigorous process, exceptional results" },
  { title: "Trust", description: "Built through transparency and delivery" },
  { title: "Passion", description: "Fuel for creative excellence" },
  { title: "Devotion", description: "Committed to your success" },
  { title: "Promise", description: "We keep our word, always" }
];

const Values = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, idx) => {
        gsap.fromTo(card,
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            delay: idx * 0.1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm tracking-wider text-gray-400">/ OUR VALUES</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mt-4">What drives us</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, idx) => (
            <div
              key={idx}
              ref={el => cardsRef.current[idx] = el}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 opacity-0"
            >
              <div className="text-6xl font-bold text-gray-200 mb-4 group-hover:text-black transition-colors duration-300">
                {String(idx + 1).padStart(2, '0')}
              </div>
              <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;