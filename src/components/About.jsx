import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Background movement logic
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} id="about" className="relative w-full min-h-screen bg-[#0a192f] py-20 flex items-center overflow-hidden">
      
      {/* Moving Background Image */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" 
          alt="bg-parallax" 
          className="w-full h-[130%] object-cover grayscale"
        />
      </motion.div>

      <div className="max-w-[1100px] mx-auto px-6 w-full relative z-10">
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ staggerChildren: 0.2 }}
           viewport={{ once: true }}
           className="flex flex-col items-center w-full"
        >
          {/* Centered Heading with Line */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-200 mb-4">
              About <span className="text-cyan-400">Me</span>
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-cyan-400 mx-auto rounded-full"
            />
          </motion.div>

          {/* Glass Box with YOUR Original Content */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-12 shadow-2xl w-full grid md:grid-cols-2 gap-10 md:gap-16 items-start"
          >
            <div className="md:text-right text-2xl md:text-3xl font-bold text-[#ccd6f6] leading-snug">
              <p>I'm <span className="text-cyan-400">Sarmad Masood</span>, a developer dedicated to building high-performance web applications.</p>
            </div>
            
            <div className="text-[#8892b0] space-y-6">
              <p className="text-base md:text-lg leading-relaxed">
                I am a highly organized and skilled Web Application Developer with a strong track record in 
                <span className="text-white font-medium"> building scalable applications</span>. 
                I focus on performance, security, and providing a seamless user experience using the modern MERN stack.
              </p>
              
              {/* Education Block (Original) */}
              <div className="p-5 md:p-7 bg-[#112240]/40 rounded-2xl border border-cyan-400/20">
                <h3 className="text-xl font-bold text-cyan-400 mb-6 flex items-center gap-3">Education</h3>
                <div className="space-y-6">
                  <div className="relative pl-6 border-l-2 border-cyan-400">
                    <p className="text-lg font-bold text-gray-200 uppercase">University of Karachi</p>
                    <p className="text-sm text-cyan-400/80 font-medium">BS Computer Technology | 2022 - Present</p>
                  </div>
                  <div className="relative pl-6 border-l-2 border-slate-600">
                    <p className="text-lg font-bold text-gray-200 uppercase">Karachi Board</p>
                    <p className="text-sm text-gray-500 font-medium">Intermediate (Pre-Engineering) | 2020 - 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;