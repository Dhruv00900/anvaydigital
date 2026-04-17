// components/CustomCursor.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const cursorTextRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    const cursorText = cursorTextRef.current;
    
    const onMouseMove = (e) => {
      // Direct positioning without lag
      gsap.set(cursor, { x: e.clientX, y: e.clientY });
      gsap.set(follower, { x: e.clientX, y: e.clientY });
    };
    
    const onMouseEnterLink = (e) => {
      const target = e.target;
      const isClickable = target.closest('a, button, [role="button"], input, textarea');
      
      if (isClickable) {
        gsap.to(cursor, { scale: 1.2, backgroundColor: '#a9a9a9', duration: 0.2 });
        gsap.to(follower, { scale: 1.2, borderColor: '#ffffff', backgroundColor: 'rgba(255,214,0,0.1)', duration: 0.2 });
        if (cursorText) gsap.to(cursorText, { opacity: 1, duration: 0.1 });
      }
    };
    
    const onMouseLeaveLink = () => {
      gsap.to(cursor, { scale: 1, backgroundColor: '#ffae00', duration: 0.2 });
      gsap.to(follower, { scale: 1, borderColor: '#ffffff', backgroundColor: 'transparent', duration: 0.2 });
      if (cursorText) gsap.to(cursorText, { opacity: 0, duration: 0.1 });
    };
    
    document.addEventListener('mousemove', onMouseMove);
    
    const links = document.querySelectorAll('a, button, [role="button"], input, textarea');
    links.forEach(link => {
      link.addEventListener('mouseenter', onMouseEnterLink);
      link.addEventListener('mouseleave', onMouseLeaveLink);
    });
    
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      links.forEach(link => {
        link.removeEventListener('mouseenter', onMouseEnterLink);
        link.removeEventListener('mouseleave', onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-3 h-3 bg-yellow-400 rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div
        ref={followerRef}
        className="fixed w-10 h-10 border-2 border-yellow-400 rounded-full pointer-events-none z-[9998] hidden md:block"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div
        ref={cursorTextRef}
        className="fixed pointer-events-none z-[9997] hidden md:block text-black text-xs font-bold whitespace-nowrap"
        style={{ transform: 'translate(-50%, -50%)', opacity: 0 }}
      >
        VIEW
      </div>
    </>
  );
};

export default CustomCursor;