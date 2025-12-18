import React from 'react';
import { motion } from 'framer-motion';
// Icons Import
import { 
  FaReact, 
  FaNodeJs, 
  FaJsSquare, 
  FaWordpress, 
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiTailwindcss, 
  SiFlutter, 
  SiExpress 
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'React', icon: <FaReact />, color: 'shadow-blue-500/20', text: 'text-blue-400' },
    { name: 'Node.js', icon: <FaNodeJs />, color: 'shadow-green-500/20', text: 'text-green-500' },
    { name: 'MongoDB', icon: <SiMongodb />, color: 'shadow-emerald-500/20', text: 'text-emerald-500' },
    { name: 'Express', icon: <SiExpress />, color: 'shadow-gray-400/20', text: 'text-gray-300' },
    { name: 'Tailwind', icon: <SiTailwindcss />, color: 'shadow-cyan-400/20', text: 'text-cyan-400' },
    { name: 'JavaScript', icon: <FaJsSquare />, color: 'shadow-yellow-400/20', text: 'text-yellow-400' },
    { name: 'Flutter', icon: <SiFlutter />, color: 'shadow-blue-600/20', text: 'text-blue-600' },
    { name: 'WordPress', icon: <FaWordpress />, color: 'shadow-blue-700/20', text: 'text-blue-700' },
  ];

  // Duplicating for infinite effect
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <section id="skills" className="w-full bg-[#0a192f] py-20 md:py-24 overflow-hidden">
      
      {/* Centered Title Section */}
      <div className="max-w-[1200px] mx-auto px-6 mb-12 flex flex-col items-center justify-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-200 mb-4">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "60%" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-cyan-400 mx-auto rounded-full"
          />
          
          <p className="py-6 text-gray-500 uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs font-mono">
            // Expertise & Technologies
          </p>
        </motion.div>
      </div>

      {/* Slider Container */}
      <div className="relative flex overflow-hidden py-8">
        {/* Fade Edges - Reduced width on mobile */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-[#0a192f] to-transparent z-20"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-[#0a192f] to-transparent z-20"></div>

        {/* Moving Track */}
        <motion.div 
          className="flex whitespace-nowrap gap-6 md:gap-10"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ 
            ease: "linear", 
            duration: 20, // Adjusted speed
            repeat: Infinity 
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <div 
              key={index}
              className={`flex-shrink-0 w-[140px] md:w-[200px] h-[140px] md:h-[200px] bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-[2rem] md:rounded-[2.5rem] shadow-xl transition-all duration-300 flex flex-col items-center justify-center space-y-3 md:space-y-4 ${skill.color} hover:border-cyan-400/30 hover:bg-slate-800/60 group cursor-default`}
            >
              <div className={`text-4xl md:text-6xl ${skill.text} group-hover:scale-110 transition-transform duration-300`}>
                {skill.icon}
              </div>
              <p className="font-bold text-[10px] md:text-sm tracking-widest text-gray-400 group-hover:text-white transition-colors">
                {skill.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.p 
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="text-center text-cyan-400/30 mt-12 md:mt-16 font-mono text-[8px] md:text-[10px] tracking-[0.4em] md:tracking-[0.6em] uppercase px-4"
      >
        ••• Continuously Learning & Evolving •••
      </motion.p>
    </section>
  );
};

export default Skills;