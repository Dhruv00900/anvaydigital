// components/Stats.jsx
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const statsData = [
  { value: 150, suffix: "%", label: "Average Growth", prefix: "+", description: "Year over year" },
  { value: 1200, suffix: "+", label: "Leads Generated", prefix: "", description: "For our clients" },
  { value: 98, suffix: "%", label: "Client Retention", prefix: "", description: "Yearly retention rate" },
  { value: 10, suffix: "M", label: "Impressions", prefix: "+", description: "Total reach" }
];

const Counter = ({ target, suffix, prefix, delay }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 2500;
          const increment = target / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    
    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={counterRef} className="text-center group">
      <div className="text-6xl md:text-7xl font-black mb-3">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
    </div>
  );
};

const Stats = () => {
  const sectionRef = useRef(null);

  return (
    <section 
      ref={sectionRef}
      className="py-32 px-6 md:px-12 lg:px-20 section-transition"
      style={{ backgroundColor: '#DD8519', color: '#000000' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm tracking-[0.3em] uppercase text-black/50 block mb-4">/ IMPACT</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
            Numbers That <span className="border-b-8 border-black">Matter</span>
          </h2>
          <div className="w-20 h-1 bg-black mx-auto mt-6" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {statsData.map((stat, idx) => (
            <div key={idx} className="text-center">
              <Counter target={stat.value} suffix={stat.suffix} prefix={stat.prefix} delay={idx * 0.2} />
              <p className="text-black/70 font-semibold mt-4 text-lg">{stat.label}</p>
              <p className="text-black/50 text-sm mt-1">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;