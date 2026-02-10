import React, { useState, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiMail, FiSend } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-headline", {
        scrollTrigger: {
          trigger: ".contact-headline",
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      gsap.from(".contact-form", {
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 70%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert(`Thank you, ${formData.name}! Your message has been sent (simulated).`);
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" ref={containerRef} className="py-32 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="contact-headline text-5xl md:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-none hover:font-thin transition-all duration-700 cursor-default">
              Let's<br />Talk.
            </h2>
            <p className="contact-headline text-xl text-gray-600 dark:text-gray-400 max-w-md leading-relaxed hover:font-bold transition-all duration-300">
              Have a project in mind or just want to chat? Feel free to send me a message.
            </p>
            
            <div className="contact-headline mt-12">
               <div className="flex items-center space-x-4 text-2xl font-medium text-gray-900 dark:text-white group">
                 <div className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                   <FiMail className="text-blue-600" />
                 </div>
                 <span className="group-hover:font-black transition-all duration-300">contact@yukizaki.dev</span>
               </div>
            </div>
          </div>

          <div className="contact-form bg-white dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="group">
                <label htmlFor="name" className="block text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400 group-focus-within:font-black transition-all">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-4 bg-transparent border-b-2 border-gray-200 dark:border-gray-700 text-xl font-medium text-gray-900 dark:text-white focus:border-blue-600 dark:focus:border-blue-500 outline-none transition-all placeholder-gray-300 dark:placeholder-gray-600 focus:font-bold"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="group">
                <label htmlFor="email" className="block text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400 group-focus-within:font-black transition-all">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-4 bg-transparent border-b-2 border-gray-200 dark:border-gray-700 text-xl font-medium text-gray-900 dark:text-white focus:border-blue-600 dark:focus:border-blue-500 outline-none transition-all placeholder-gray-300 dark:placeholder-gray-600 focus:font-bold"
                  placeholder="john@example.com"
                />
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400 group-focus-within:font-black transition-all">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-0 py-4 bg-transparent border-b-2 border-gray-200 dark:border-gray-700 text-xl font-medium text-gray-900 dark:text-white focus:border-blue-600 dark:focus:border-blue-500 outline-none transition-all resize-none placeholder-gray-300 dark:placeholder-gray-600 focus:font-bold"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold text-lg py-5 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed mt-4 hover:font-black"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FiSend />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
