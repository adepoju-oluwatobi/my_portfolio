import React from 'react'
import Logo from '../assets/cpu.svg'

function Header() {
  return (
       <header className='bg-[#131313] bg-opacity-20 text-[#d6d6d6] flex items-center justify-between p-6'>
            <div>
                <img 
                className='w-8'
                src={Logo} 
                alt="" />
            </div>
            <nav className='flex gap-6'>
                <p>Projects</p>
                <p>Contact Me</p>
            </nav>
       </header>
  )
}

export default Header