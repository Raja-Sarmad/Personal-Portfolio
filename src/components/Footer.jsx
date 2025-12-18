import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#081221] border-t border-white/5 py-12 text-gray-400 relative overflow-hidden">
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>

      <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center">
        
        {/* Social Icons with Neon Hover */}
        <div className="flex gap-8 mb-10">
          <a href="https://github.com/Sarmad-masood" target="_blank" rel="noreferrer" 
             className="hover:text-cyan-400 transition-all duration-300 transform hover:-translate-y-2 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
            <FaGithub size={28} />
          </a>
          <a href="https://linkedin.com/in/sarmad-masood" target="_blank" rel="noreferrer" 
             className="hover:text-cyan-400 transition-all duration-300 transform hover:-translate-y-2 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
            <FaLinkedin size={28} />
          </a>
          <a href="https://wa.me/923182120345" target="_blank" rel="noreferrer" 
             className="hover:text-cyan-400 transition-all duration-300 transform hover:-translate-y-2 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
            <FaWhatsapp size={28} />
          </a>
        </div>

        {/* Back to Top - Interactive Button */}
        <div className="mb-10">
          <Link to="home" smooth={true} duration={800} className="group cursor-pointer flex flex-col items-center">
            <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-cyan-400/5 transition-all duration-500 shadow-lg">
              <FaArrowUp className="text-gray-500 group-hover:text-cyan-400 group-hover:animate-bounce transition-colors" />
            </div>
            <span className="text-[9px] mt-3 font-mono uppercase tracking-[0.4em] text-gray-600 group-hover:text-cyan-400 transition-colors">Back to Top</span>
          </Link>
        </div>

        {/* Copyright & Branding */}
        <div className="text-center space-y-3">
          <p className="text-xs md:text-sm tracking-[0.2em] font-mono uppercase">
            Designed & Built by <span className="text-cyan-400 font-bold hover:text-white transition-colors cursor-default">Sarmad Masood</span>
          </p>
          <div className="flex items-center justify-center gap-2 opacity-40">
             <div className="h-[1px] w-8 bg-gray-500"></div>
             <p className="text-[10px] font-mono">
               &copy; {currentYear} All rights reserved.
             </p>
             <div className="h-[1px] w-8 bg-gray-500"></div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;