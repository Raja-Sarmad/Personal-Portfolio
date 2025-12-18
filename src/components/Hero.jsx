import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import profileIMG from '../assets/ProfileIMG.png';

const Hero = () => {
  const bgImage = "https://png.pngtree.com/thumb_back/fh260/background/20240610/pngtree-computer-of-a-programmer-with-lines-code-of-software-image_15746003.jpg";

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="home" 
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0a192f]"
    >
      
      {/* Background with optimized opacity */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-[#0a192f]/85 md:bg-[#0a192f]/70"></div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 md:px-6 pt-28 pb-10 md:py-24 flex items-center justify-center">
        
        {/* Glass Card */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95, y: 30 }}
           animate={{ opacity: 1, scale: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 md:p-0 md:pl-12 shadow-2xl max-w-[1000px] w-full relative overflow-hidden h-auto md:h-[500px] lg:h-[580px] flex items-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-between w-full h-full">
            
            {/* LEFT SIDE: Text Content */}
            <div className="text-center md:text-left flex-1 z-10 py-8 md:py-0">
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-cyan-400 font-mono mb-2 text-xs md:text-sm tracking-[0.3em] uppercase"
              >
                Sarmad Masood
              </motion.p>
              
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-[#ccd6f6] leading-tight mb-4"
              >
                MERN Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Developer</span>
              </motion.h1>
              
              <div className="text-lg md:text-2xl font-bold text-slate-300 h-[40px] flex items-center justify-center md:justify-start gap-2">
                <span className="text-blue-400">
                  <Typewriter
                    options={{
                      strings: ["Scalable Apps.", "React Dev.", "Node.js Logic."],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 50,
                    }}
                  />
                </span>
              </div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-[#8892b0] py-4 max-w-[450px] text-sm md:text-base lg:text-lg leading-relaxed mx-auto md:mx-0"
              >
                Building high-performance, responsive web applications with the modern MERN stack.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start"
              >
                <button className="px-8 py-3 font-bold text-black bg-cyan-400 rounded-xl hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/30 active:scale-95">
                  Browse Work
                </button>
                <button className="px-8 py-3 font-bold text-cyan-400 border-2 border-cyan-400 rounded-xl hover:bg-cyan-400/10 hover:scale-105 transition-all duration-300 active:scale-95">
                  Let's Talk
                </button>
              </motion.div>
            </div>

            {/* RIGHT SIDE: Profile Picture */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative flex-shrink-0 self-end h-full flex items-end overflow-hidden group cursor-pointer mt-4 md:mt-0"
            >
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/10 group-hover:bg-cyan-500/20 rounded-full blur-[100px] transition-all duration-500"></div>
              
              <motion.img 
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
                src={profileIMG} 
                alt="Sarmad Masood" 
                className="w-[260px] sm:w-[320px] md:w-[400px] lg:w-[460px] h-full object-contain object-bottom relative z-10 transition-all duration-500 group-hover:drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]"
              />
            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center"
      >
        <div className="w-[26px] h-[40px] border-2 border-cyan-400/20 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 bg-cyan-400 rounded-full"
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;