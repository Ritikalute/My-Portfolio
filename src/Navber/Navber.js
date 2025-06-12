import React, { useState } from 'react';
import Rituimg from './ritu pic.jpg';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navber() {
  const [isOpen, setIsOpen] = useState(false); // State to track menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu visibility
  };

  return (
    <div>
      <div className='h-auto w-full flex flex-col md:flex-row items-center justify-between p-4 md:px-8' style={{ background: 'linear-gradient(to right, #aeebee, #6969ec)' }}>
        <div className='flex flex-col sm:flex-row items-center mb-2 sm:mb-0'>
          <h1 className='text-[#faf9fb] font-[Montserrat] text-2xl font-semibold'>Ritika</h1>
        </div>

        {/* Hamburger Icon for Small Screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none">
            {isOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
          </button>
        </div>

        {/* Navigation Links (show/hide based on state) */}
        {/* <div className={`flex-col md:flex-row md:flex items-center justify-center md:space-x-4 ${isOpen ? 'flex' : 'hidden'} w-full md:w-auto`}>
          <a href="#home" className='text-[#eee4f5] font-semibold text-lg sm:text-base font-[Montserrat] hover:text-cyan-400 transition-colors duration-300'>Home</a>
          <a href="#about" className='text-[#eee4f5] font-semibold text-lg sm:text-base font-[Montserrat] hover:text-cyan-400'>About</a>
          <a href="#skills" className='text-[#eee4f5] font-bold text-lg sm:text-base  font-[Montserrat] hover:text-cyan-400'>Skills</a>
          <Link to="/experience" className='text-[#eee4f5] font-bold text-lg sm:text-base font-[Montserrat] hover:text-cyan-400'>Experience</Link>
          <a href="#project" className='text-[#eee4f5] font-bold text-lg sm:text-base font-[Montserrat] hover:text-cyan-400'>Project</a>
          <a href="#education" className='text-[#eee4f5] font-bold text-lg sm:text-base font-[Montserrat] hover:text-cyan-400'>Education</a>
          <a href="#contact" className='text-[#eee4f5] font-bold text-lg sm:text-base font-[Montserrat] hover:text-cyan-400'>Contact</a>
        </div> */}
        <div className={`flex-col md:flex-row md:flex items-center justify-center md:space-x-4 ${isOpen ? 'flex' : 'hidden'} w-full md:w-auto`}>
          <Link to="/home" className='text-[#eee4f5] font-semibold text-lg sm:text-base font-[Montserrat] hover:text-cyan-400 transition-colors duration-300'>Home</Link>
          <Link to="/about" className='text-[#eee4f5] font-semibold text-lg sm:text-base font-[Montserrat] hover:text-cyan-400'>About</Link>
          <Link to="/skills" className='text-[#eee4f5] font-bold text-lg sm:text-base font-[Montserrat] hover:text-cyan-400'>Skills</Link>
          <Link to="/experience" className='text-[#eee4f5] font-bold text-lg sm:text-base font-[Montserrat] hover:text-cyan-400'>Experience</Link>
          <Link to="/project" className='text-[#eee4f5] font-bold text-lg sm:text-base font-[Montserrat] hover:text-cyan-400'>Project</Link>
          <Link to="/education" className='text-[#eee4f5] font-bold text-lg sm:text-base font-[Montserrat] hover:text-cyan-400'>Education</Link>
          <Link to="/contact" className='text-[#eee4f5] font-bold text-lg sm:text-base font-[Montserrat] hover:text-cyan-400'>Contact</Link>
        </div>
       {/* Nav Links */}


        <div className='flex justify-center mt-2 md:mt-0'>
          <img src={Rituimg} alt='' className='ml-2 w-10 h-10 sm:w-12 sm:h-12 rounded-full' />
        </div>
      </div>
    </div>
  );
}

export default Navber;
