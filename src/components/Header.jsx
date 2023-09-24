import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import Logo from '../assets/cpu.svg';

function Header() {
  // Define hover animation variants for the logo
  const logoVariants = {
    hover: {
      rotate: 360, // Rotate 360 degrees on hover (1 full rotation)
      transition: {
        duration: 0.3, // Adjust the duration as needed
      },
    },
    initial: {
      rotate: 0, // Initial rotation (no rotation)
    },
  };

  // Define hover animation variants for the navigation items
  const itemVariants = {
    hover: {
      color: '#FFF', // Change to your desired hover color
      y: -5, // Move text 5 pixels upward on hover
      transition: {
        duration: 0.3, // Adjust the duration as needed
      },
    },
    initial: {
      color: '#d6d6d6', // Initial color
      y: 0, // Initial position (no translation)
    },
  };

  return (
    <header className='bg-[#131313] bg-opacity-10 text-[#d6d6d6] flex items-center justify-between p-6'>
      <div>
        {/* Apply motion to add the hover effect to the logo */}
        <motion.img
          className='w-8 cursor-pointer'
          src={Logo}
          alt=""
          variants={logoVariants} // Apply the animation variants
          whileHover='hover' // Trigger animation on hover
          initial='initial'
        />
      </div>
      <nav className='flex gap-6'>
        {/* Apply motion to add the hover effect to the navigation items */}
        <motion.p
          className='cursor-pointer'
          variants={itemVariants} // Apply the animation variants
          whileHover='hover' // Trigger animation on hover
          initial='initial'
        >
          Projects
        </motion.p>
        <motion.p
          className='cursor-pointer'
          variants={itemVariants} // Apply the animation variants
          whileHover='hover' // Trigger animation on hover
          initial='initial'
        >
          Contact Me
        </motion.p>
      </nav>
    </header>
  );
}

export default Header;
