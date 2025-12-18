import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Full Stack",
      description: "A complete MERN stack shop with Redux, Stripe integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2066&auto=format&fit=crop"
    },
    {
      title: "Real Estate Portal",
      description: "Property listing platform with advanced filters and user authentication.",
      tech: ["React", "Firebase", "Tailwind", "Google Maps API"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop"
    },
    {
      title: "AI Image SaaS",
      description: "A modern web app using OpenAI API to generate and share creative images.",
      tech: ["Next.js", "OpenAI", "Cloudinary", "Prisma"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1675557009452-946044491040?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  // Container variants for staggering children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  // Individual card item variants
  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section id="projects" className="w-full min-h-screen bg-[#0a192f] text-gray-300 py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Centered Heading Section (Matching About/Skills) */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-200 mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-cyan-400 mx-auto rounded-full"
          />
          
          <p className="py-6 text-gray-500 font-mono tracking-[0.3em] text-xs uppercase opacity-70">
             My recent development work
          </p>
        </motion.div>

        {/* Projects Grid with Staggered Animation */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -15 }} // Extra lift on hover
              className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-[2.5rem] overflow-hidden group shadow-2xl hover:border-cyan-400/30 transition-all duration-500 flex flex-col h-full relative"
            >
              {/* Project Image Container with Reveal Effect */}
              <div className="relative overflow-hidden h-52 md:h-60">
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.8, ease: "circOut" }}
                  className="w-full h-full"
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                {/* Floating Tech Overlay on Image */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="bg-[#0a192f]/80 backdrop-blur-md p-2 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <FaExternalLinkAlt className="text-cyan-400 text-xs" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-80"></div>
              </div>

              {/* Card Content with Staggered Inner Elements */}
              <div className="p-8 flex flex-col flex-grow relative">
                <h3 className="text-xl md:text-2xl font-bold text-gray-100 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm md:text-base mt-4 mb-6 leading-relaxed flex-grow opacity-90">
                  {project.description}
                </p>
                
                {/* Tech Badges with Hover Pop */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <motion.span 
                      key={i} 
                      whileHover={{ y: -3, backgroundColor: "rgba(34, 211, 238, 0.2)" }}
                      className="text-[10px] md:text-[11px] font-mono px-3 py-1 bg-cyan-400/5 text-cyan-400 rounded-full border border-cyan-400/20"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>

                {/* Footer Links with Animated Underline */}
                <div className="flex items-center gap-8 pt-4 border-t border-white/5">
                  <motion.a 
                    href={project.github} 
                    whileHover={{ scale: 1.1, color: "#22d3ee" }}
                    className="flex items-center gap-2 text-sm text-gray-400 transition-colors"
                  >
                    <FaGithub size={20} /> <span className="font-medium">Code</span>
                  </motion.a>
                  <motion.a 
                    href={project.demo} 
                    whileHover={{ scale: 1.1, color: "#22d3ee" }}
                    className="flex items-center gap-2 text-sm text-gray-400 transition-colors"
                  >
                    <FaExternalLinkAlt size={18} /> <span className="font-medium">Live</span>
                  </motion.a>
                </div>
              </div>

              {/* Corner Accent Light */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-cyan-500/10 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;