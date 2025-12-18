import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
  ];

  return (
    <nav className='fixed w-full h-[80px] flex justify-between items-center px-6 md:px-12 bg-[#0a192f]/85 backdrop-blur-lg text-gray-300 z-[100] border-b border-white/5'>
      
      {/* Logo */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className='text-xl md:text-2xl font-bold font-mono text-cyan-400 cursor-pointer tracking-tighter'>
          <span className='text-BLUE'>SARMAD MASOOD</span>
        </h1>
      </motion.div>

      {/* Desktop Menu */}
      <ul className='hidden md:flex items-center gap-2'>
        {navLinks.map((link, index) => (
          <motion.li 
            key={index}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className='relative group px-4 cursor-pointer font-medium hover:text-cyan-400 transition-colors duration-300'
          >
            <Link to={link.to} smooth={true} duration={500} offset={-80}>
              {link.name}
            </Link>
            {/* Underline Animation */}
            <span className='absolute bottom-[-4px] left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full'></span>
          </motion.li>
        ))}
        
        {/* Resume Button */}
        <motion.li 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className='ml-4'
        >
          <a 
            href='/Sarmad Masood CV.pdf' 
            className='px-5 py-2 border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 font-bold text-sm'
          >
            Resume
          </a>
        </motion.li>
      </ul>

      {/* Hamburger Icon */}
      <div onClick={handleClick} className='md:hidden z-[110] cursor-pointer text-2xl text-cyan-400'>
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {nav && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className='fixed top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center z-[105]'
          >
            <ul className='flex flex-col items-center gap-8'>
              {navLinks.map((link, index) => (
                <li key={index} className='text-3xl font-semibold hover:text-cyan-400 transition-colors'>
                  <Link onClick={handleClick} to={link.to} smooth={true} duration={500} offset={-80}>
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className='mt-4'>
                <a 
                  href='/Sarmad_Masood_Resume.pdf' 
                  onClick={handleClick}
                  className='px-10 py-4 border-2 border-cyan-400 text-cyan-400 text-xl rounded-xl hover:bg-cyan-400/10 transition-all'
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;