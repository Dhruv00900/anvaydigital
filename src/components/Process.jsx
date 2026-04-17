// components/Process.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We dive deep into your business, goals, and audience to create a strategic foundation.",
    icon: "🔍"
  },
  {
    number: "02",
    title: "Strategy",
    description: "Data-driven planning that aligns with your vision and market opportunities.",
    icon: "📊"
  },
  {
    number: "03",
    title: "Creation",
    description: "Bringing ideas to life through innovative design and cutting-edge technology.",
    icon: "🎨"
  },
  {
    number: "04",
    title: "Launch",
    description: "Seamless deployment with rigorous testing and optimization.",
    icon: "🚀"
  },
  {
    number: "05",
    title: "Growth",
    description: "Continuous improvement and scaling based on performance data.",
    icon: "📈"
  }
];

const ProcessStep = ({ step, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex items-start gap-6"
    >
      {/* Connecting Line */}
      {index < steps.length - 1 && (
        <div className="absolute left-8 top-20 w-0.5 h-24 bg-gradient-to-b from-purple-500 to-transparent" />
      )}
      
      <div className="flex-shrink-0 w-16 h-16 rounded-full glass-card flex items-center justify-center text-2xl font-bold">
        {step.icon}
      </div>
      
      <div className="flex-1 pb-12">
        <div className="text-purple-400 text-sm mb-2">{step.number}</div>
        <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
        <p className="text-gray-400 leading-relaxed">{step.description}</p>
      </div>
    </motion.div>
  );
};

const Process = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section ref={sectionRef} className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-purple-400 block mb-4">/ OUR PROCESS</span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            How We <span className="gradient-text">Work</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto" />
        </motion.div>
        
        <div className="relative">
          {steps.map((step, idx) => (
            <ProcessStep key={idx} step={step} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;