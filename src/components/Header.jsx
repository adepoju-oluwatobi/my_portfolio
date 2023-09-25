import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../assets/cpu.svg';
import { Link } from 'react-router-dom';

function Header() {
  const logoVariants = {
    hover: {
      rotate: 360,
      transition: {
        duration: 0.3,
      },
    },
    initial: {
      rotate: 0,
    },
  };

  const itemVariants = {
    hover: {
      color: '#FFF',
      y: -5,
      transition: {
        duration: 0.3,
      },
    },
    initial: {
      color: '#d6d6d6',
      y: 0,
    },
  };

  return (
    <header
      className='bg-[#131313] bg-opacity-30 text-[#d6d6d6] flex items-center justify-between p-6'
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        backdropFilter: 'blur(5px)', // Apply the blur effect
        WebkitBackdropFilter: 'blur(10px)', // For compatibility with Safari
      }}
    >
      <Link to="/">
        <div>
          <motion.img
            className='w-8 cursor-pointer'
            src={Logo}
            alt=''
            variants={logoVariants}
            whileHover='hover'
            initial='initial'
          />
        </div>
      </Link>
      <nav className='flex gap-6'>
        <Link to="/projects">
          <motion.p
            className='cursor-pointer'
            variants={itemVariants}
            whileHover='hover'
            initial='initial'
          >
            Projects
          </motion.p>
        </Link>
        <Link to="/contact-me">
          <motion.p
            className='cursor-pointer'
            variants={itemVariants}
            whileHover='hover'
            initial='initial'
          >
            Contact Me
          </motion.p>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
