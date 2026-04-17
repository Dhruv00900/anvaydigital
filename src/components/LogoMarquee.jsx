// components/LogoMarquee.jsx
import React from 'react';

const logos = [
  "https://logo.clearbit.com/google.com", 
  "https://logo.clearbit.com/microsoft.com",
  "https://logo.clearbit.com/apple.com",
  "https://logo.clearbit.com/amazon.com",
  "https://logo.clearbit.com/netflix.com",
  "https://logo.clearbit.com/spotify.com",
  "https://logo.clearbit.com/adobe.com",
  "https://logo.clearbit.com/salesforce.com"
];

const LogoMarquee = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="text-center mb-12">
        <span className="text-sm tracking-wider text-gray-400">/ TRUSTED BY</span>
      </div>
      
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((logo, idx) => (
            <div key={idx} className="mx-12 inline-flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <img src={logo} alt={`Client ${idx}`} className="h-8 md:h-12 w-auto opacity-50 hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          width: fit-content;
        }
      `}</style>
    </section>
  );
};

export default LogoMarquee;