// components/Contact.jsx

import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Animate button
    gsap.to('.submit-btn', {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1
    });
    
    // Prepare WhatsApp message
    const message = `*New Contact Form Submission*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Message:* ${formData.message}`;
    
    // WhatsApp number (without + symbol)
    const whatsappNumber = "917201060345"; // Your WhatsApp number
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleFocus = (field) => setFocusedField(field);
  const handleBlur = () => setFocusedField(null);

  // Handle map click - opens in new tab
  const handleMapClick = () => {
    window.open('https://maps.google.com/?q=Anvaya+Digital+Marketing+Agency+508+Real+Point+Bapa+Sitaram+Chowk+Mavdi+Rajkot+Gujarat+360004', '_blank');
  };

  // SVG Icons
  const LocationIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );

  const EmailIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );

  const FollowIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );

  const PhoneIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );

  return (
    <section 
      id="contact"
      className="py-32 px-6 md:px-12 lg:px-20 section-transition"
      style={{ backgroundColor: '#DD8519', color: '#000000' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="animate-slide-left opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <span className="text-sm tracking-[0.3em] uppercase text-black/50 block mb-6">/ LET'S TALK</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">
              Let's Create Something <span className="border-b-8 border-black">Amazing</span>
            </h2>
            <p className="text-black/70 text-xl mb-12 leading-relaxed">
              Ready to transform your digital presence? Get in touch with our team and let's start a conversation.
            </p>
            
            <div className="space-y-8">
              {[
                { 
                  icon: <LocationIcon />, 
                  title: "Visit Us", 
                  content: "Anvaya Digital Marketing Agency\n508, Real Point, Bapa Sitaram Chowk, Mavdi, Rajkot, Gujarat 360004\n\n1st Floor, Block A, Inner Circle, Connaught Place\nNew Delhi, Delhi – 110001",
                  action: "map",
                  link: "https://maps.google.com/?q=Anvaya+Digital+Marketing+Agency+508+Real+Point+Bapa+Sitaram+Chowk+Mavdi+Rajkot+Gujarat+360004"
                },
                { 
                  icon: <PhoneIcon />, 
                  title: "Call Us", 
                  content: "+91 9998055336",
                  action: "phone",
                  link: "tel:+919998055336"
                },
                { 
                  icon: <EmailIcon />, 
                  title: "Email Us", 
                  content: "anvayadigi@gmail.com",
                  action: "email",
                  link: "mailto:anvayadigi@gmail.com"
                },
                { 
                  icon: <FollowIcon />, 
                  title: "Follow Us", 
                  content: "Instagram",
                  action: "social",
                  socialLinks: {
                    instagram: "https://instagram.com/anvayadigital",
                    linkedin: "#",
                    twitter: "#"
                  }
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-yellow-400">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">{item.title}</div>
                    <div className="text-black/70 whitespace-pre-line">
                      {item.action === "phone" && (
                        <a href={item.link} className="hover:text-black transition-colors">
                          {item.content}
                        </a>
                      )}
                      {item.action === "email" && (
                        <a href={item.link} className="hover:text-black transition-colors">
                          {item.content}
                        </a>
                      )}
                      {item.action === "map" && (
                        <button 
                          onClick={handleMapClick}
                          className="hover:text-black transition-colors text-left"
                        >
                          {item.content}
                        </button>
                      )}
                      {item.action === "social" && (
                        <div className="flex gap-3 mt-1">
                          <a 
                            href={item.socialLinks.instagram} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-black transition-colors"
                          >
                            Instagram
                          </a>
                          <span>|</span>
                          <a 
                            href={item.socialLinks.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-black transition-colors"
                          >
                            LinkedIn
                          </a>
                          <span>|</span>
                          <a 
                            href={item.socialLinks.twitter} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-black transition-colors"
                          >
                            Twitter
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div 
            ref={formRef}
            className="animate-slide-right opacity-0" 
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            <form onSubmit={handleSubmit} className="space-y-8 bg-white p-10 rounded-3xl shadow-2xl">
              <div className="relative">
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  onFocus={() => handleFocus('name')}
                  onBlur={handleBlur}
                  className="w-full bg-transparent border-b-2 border-gray-200 py-4 focus:outline-none focus:border-yellow-400 transition-colors peer text-lg"
                  placeholder=" "
                />
                <label className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                  focusedField === 'name' || formData.name
                    ? '-top-6 text-sm text-yellow-500'
                    : 'top-4 text-gray-400 text-lg'
                }`}>
                  Your Name
                </label>
              </div>
              
              <div className="relative">
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  className="w-full bg-transparent border-b-2 border-gray-200 py-4 focus:outline-none focus:border-yellow-400 transition-colors peer text-lg"
                  placeholder=" "
                />
                <label className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                  focusedField === 'email' || formData.email
                    ? '-top-6 text-sm text-yellow-500'
                    : 'top-4 text-gray-400 text-lg'
                }`}>
                  Email Address
                </label>
              </div>
              
              <div className="relative">
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  onFocus={() => handleFocus('phone')}
                  onBlur={handleBlur}
                  className="w-full bg-transparent border-b-2 border-gray-200 py-4 focus:outline-none focus:border-yellow-400 transition-colors peer text-lg"
                  placeholder=" "
                />
                <label className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                  focusedField === 'phone' || formData.phone
                    ? '-top-6 text-sm text-yellow-500'
                    : 'top-4 text-gray-400 text-lg'
                }`}>
                  Phone Number
                </label>
              </div>
              
              <div className="relative">
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  className="w-full bg-transparent border-b-2 border-gray-200 py-4 focus:outline-none focus:border-yellow-400 transition-colors peer text-lg resize-none"
                  placeholder=" "
                />
                <label className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                  focusedField === 'message' || formData.message
                    ? '-top-6 text-sm text-yellow-500'
                    : 'top-4 text-gray-400 text-lg'
                }`}>
                  Your Message
                </label>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-btn w-full relative overflow-hidden group bg-black text-yellow-400 px-8 py-5 rounded-full font-semibold text-lg transition-all hover:shadow-2xl"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>Sent! ✓</>
                  ) : (
                    <>Send Message →</>
                  )}
                </span>
              </button>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                By submitting this form, you agree to our terms and conditions. Your information will be sent via WhatsApp.
              </p>
            </form>
          </div>
        </div>
        
        {/* Map Embed - Clickable */}
        <div className="mt-20 rounded-3xl overflow-hidden shadow-2xl animate-fade-up opacity-0 cursor-pointer" 
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          onClick={handleMapClick}
        >
          <iframe
            title="Anvaya Digital Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.4663222527633!2d70.7816194!3d22.2603187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb9ee6b3ff77%3A0x94216d72ec17dab7!2sAnvaya%20Digital%20Marketing%20Agency!5e0!3m2!1sen!2sin!4v1776364473320!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0, pointerEvents: 'none' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors" />
        </div>
      </div>
    </section>
  );
};

export default Contact;