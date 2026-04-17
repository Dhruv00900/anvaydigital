// components/InstagramSection.jsx - Using oEmbed API
import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const InstagramSection = () => {
  const sectionRef = useRef(null);
  const marqueeRef = useRef(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Your Instagram post URLs (replace with your actual post URLs)
  const postUrls = [
    'https://www.instagram.com/p/YOUR_POST_ID_1/',
    'https://www.instagram.com/p/YOUR_POST_ID_2/',
    'https://www.instagram.com/p/YOUR_POST_ID_3/',
    'https://www.instagram.com/p/YOUR_POST_ID_4/',
    'https://www.instagram.com/p/YOUR_POST_ID_5/',
    'https://www.instagram.com/p/YOUR_POST_ID_6/'
  ];

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        // You need a Client Access Token from Meta Developers
        // Format: APP_ID|CLIENT_TOKEN (pipe separated)
        const accessToken = 'YOUR_APP_ID|YOUR_CLIENT_TOKEN';
        
        const fetchPromises = postUrls.map(async (url) => {
          const oembedUrl = `https://graph.facebook.com/v25.0/instagram_oembed?url=${encodeURIComponent(url)}&access_token=${accessToken}&omitscript=true`;
          
          const response = await fetch(oembedUrl);
          const data = await response.json();
          
          return {
            id: url.split('/').pop(),
            html: data.html,
            thumbnail: data.thumbnail_url,
            author: data.author_name
          };
        });
        
        const postsData = await Promise.all(fetchPromises);
        setPosts(postsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  useEffect(() => {
    if (posts.length === 0) return;
    
    // Load Instagram embed library
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };
    document.body.appendChild(script);

    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        x: '-50%',
        duration: 30,
        repeat: -1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [posts]);

  if (loading) {
    return (
      <section className="py-32 px-6 md:px-12 lg:px-20 bg-black text-white">
        <div className="text-center">Loading Instagram feed...</div>
      </section>
    );
  }

  return (
    <section 
      ref={sectionRef}
      className="py-32 px-6 md:px-12 lg:px-20 section-transition overflow-hidden"
      style={{ backgroundColor: '#000000', color: '#FFFFFF' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.3em] uppercase text-yellow-400 block mb-4">/ INSTAGRAM</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
            Follow <span className="text-yellow-400">@anvaya.digital</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mt-6 mb-6" />
          <a 
            href="https://www.instagram.com/anvaya.digital/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors group"
          >
            <span>View Instagram Profile</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
      
      <div className="relative overflow-hidden mt-8">
        <div ref={marqueeRef} className="flex gap-4 w-max">
          {posts.map((post, idx) => (
            <div
              key={post.id}
              className="w-[300px] md:w-[350px] flex-shrink-0"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;