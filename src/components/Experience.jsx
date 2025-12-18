import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Web Application Developer',
      company: 'Techdot Solutions',
      period: 'Jan 2024 - Present',
      color: 'from-cyan-500/20',
      description: [
        'Building scalable MERN stack applications.',
        'Developed 5-8 websites with modern UI/UX.',
        'Optimizing backend performance.'
      ],
    },
    {
      title: 'Web Designer (Intern)',
      company: 'Techxudo',
      period: 'Jun 2023 - Dec 2023',
      color: 'from-purple-500/20',
      description: [
        'Created 4+ professional web designs.',
        'Focused on responsive layouts.',
        'Collaborated on frontend implementation.'
      ],
    },
  ];

  return (
    <section id="experience" className="relative w-full min-h-screen bg-[#0a192f] py-16 md:py-24 overflow-hidden">
      
      {/* Background Glow Blobs for Depth */}
      <div className="absolute top-1/4 -left-20 w-60 md:w-80 h-60 md:h-80 bg-cyan-500/10 rounded-full blur-[100px] md:blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-60 md:w-80 h-60 md:h-80 bg-blue-500/10 rounded-full blur-[100px] md:blur-[120px] animate-pulse"></div>

      <div className="max-w-[1200px] mx-auto px-5 md:px-6 relative z-10">
        
        {/* Title Section */}
        <div className="text-center mb-12 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Professional <span className="text-cyan-400">Experience</span>
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-cyan-400 mx-auto rounded-full"
            />
            <p className="py-4 md:py-6 text-gray-400 font-mono tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs uppercase opacity-70">
              // My professional journey in tech
            </p>
          </motion.div>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
              whileHover={{ y: -8 }}
              className={`relative group p-[1px] rounded-[2rem] bg-gradient-to-b ${exp.color} to-transparent border border-white/10 shadow-2xl transition-all duration-500 h-full`}
            >
              {/* Inner Card Content */}
              <div className="bg-[#0d1e36]/90 backdrop-blur-3xl p-6 md:p-10 rounded-[calc(2rem-1px)] h-full flex flex-col justify-between">
                
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4 md:mb-6">
                    <div className="flex-1 pr-2">
                      <span className="text-cyan-400 font-mono text-[9px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] mb-2 block">
                        {exp.period}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                        {exp.title}
                      </h3>
                    </div>
                    {/* Floating Brand Initial */}
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:rotate-[15deg] group-hover:border-cyan-400/30 transition-all duration-500 shrink-0">
                      <span className="text-cyan-400 font-black text-xl md:text-2xl">{exp.company[0]}</span>
                    </div>
                  </div>

                  <h4 className="text-base md:text-lg font-medium text-slate-300 mb-6 flex items-center gap-2">
                      @ <span className="text-blue-400 italic group-hover:underline decoration-cyan-400/30 transition-all">{exp.company}</span>
                  </h4>

                  <ul className="space-y-3 md:space-y-4 flex-grow">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start text-slate-400 text-[13px] md:text-base leading-relaxed group-hover:text-slate-200 transition-colors">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 mt-2 mr-3 md:mr-4 shrink-0 shadow-[0_0_12px_rgba(34,211,238,0.9)]"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Decorative Subtle Light */}
                <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-cyan-500/5 blur-[50px] rounded-full group-hover:bg-cyan-400/10 transition-all pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;