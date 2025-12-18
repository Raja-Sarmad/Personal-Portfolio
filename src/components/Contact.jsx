import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="w-full min-h-screen bg-[#0a192f] flex justify-center items-center px-6 py-20 relative overflow-hidden">
      
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Main Container */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-[800px] w-full bg-slate-900/40 backdrop-blur-xl border border-white/10 p-6 md:p-12 rounded-[2.5rem] shadow-2xl flex flex-col items-center text-center z-10"
      >
        
        {/* Title */}
        <div className="pb-8">
          <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-cyan-400 text-gray-200">Contact</p>
          <p className="text-gray-400 py-6 font-mono text-sm md:text-base">
             Get in touch - let's build something amazing together!
          </p>
        </div>

        {/* The Form */}
        <form action="https://getform.io/f/YOUR_ID_HERE" method="POST" className="flex flex-col w-full max-w-[550px]">
          
          <div className="grid grid-cols-1 gap-4 mb-4">
            <input 
              className="bg-[#112240]/50 p-4 rounded-2xl border border-white/5 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none text-gray-300 transition-all duration-300 placeholder:text-gray-500" 
              type="text" 
              placeholder="Your Name" 
              name="name" 
              required
            />
            
            <input 
              className="bg-[#112240]/50 p-4 rounded-2xl border border-white/5 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none text-gray-300 transition-all duration-300 placeholder:text-gray-500" 
              type="email" 
              placeholder="Your Email" 
              name="email" 
              required
            />
          </div>
          
          <textarea 
            className="bg-[#112240]/50 p-4 rounded-2xl border border-white/5 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none text-gray-300 transition-all duration-300 mb-6 placeholder:text-gray-500" 
            name="message" 
            rows="5" 
            placeholder="Tell me about your project..."
            required
          ></textarea>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="text-[#0a192f] font-bold bg-cyan-400 px-10 py-4 rounded-2xl shadow-lg shadow-cyan-500/10 hover:bg-white transition-all duration-300 text-lg"
          >
            Send Message
          </motion.button>
        </form>

        {/* Contact Details - Fully Responsive */}
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 mt-10 text-gray-400 font-mono text-[11px] md:text-sm">
          <p className="hover:text-cyan-400 transition-colors cursor-pointer">rajasarmadaz@gmail.com</p>
          <span className="hidden md:block text-gray-600">|</span>
          <p className="hover:text-cyan-400 transition-colors cursor-pointer">+92 3182120345</p>
        </div>

      </motion.div>
    </section>
  );
};

export default Contact;