import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleDot, faDotCircle, faGreaterThan, faLessThan, faListDots, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import {   } from '@fortawesome/free-brands-svg-icons';
import ritikaphoto from "./ritika3photo.jpg"
import Ritikaresume from "./Ritika Lute-resume.pdf"

function About() {
  return (


<div className='w-full h-auto flex items-center justify-center' style={{ background: 'linear-gradient(to right, #aeebee, #6969ec)',backgroundSize: '', 
        animation: 'gradientAnimation 5s ease infinite'  }}>
      <div className='h-auto w-full max-w-5xl bg-[rgb(230,247,247)] flex flex-raw  items-center justify-between py-10 border-4 border-solid border-white'>
          <div className='ml-4 mb-4 md:mb-0 '>
            <img src={ritikaphoto} alt=''  className='h-90 w-full  rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out hover:grayscale'/>
          </div>
        <div className='flex flex-col items-start w-full px-4 md:px-10 '>
          <h1 className='text-2xl md:text-5xl font-serif text-cyan-600'>About<span> Me</span></h1>
          <p className='font-serif mt-4 text-start'>
            Hi, I'm <span className='text-black font-semibold'>Ritka Lute,</span> a dedicated web developer with a passion for creating dynamic and responsive websites. With hands-on experience from my internship, I have developed a strong foundation in front-end development and collaborative project work.
          </p>
          <p className='font-serif mt-4 text-start'>
          I have solved over 100 problems using my skills, showcasing a strong grasp of web development technologies such as Html, CSS5, ReactJS,TailwindCSS and others.
          </p>
          <p className='font-serif mt-4 text-start'>
          My practical experience includes developing real-world applications that enhance efficiency and productivity. I am passionate about mentoring and supporting others in their web development journeys.
            </p>
            <p className='font-serif mt-4 text-start'>
              Email :<a href='ritikalute06@gmail.com' className='text-sky-600'>ritikalute06@gmail.com</a>
            </p>
            <p className='font-serif mt-4 text-start text-cyan-600' >
              <span className='text-slate-900'>Place:</span>Nagpur ,Maharashtra India
            </p>
            <a href={Ritikaresume} target='_blank' rel='noopener noreferrer'>

              <button className='font-serif w-auto mt-4 text-start text-white bg-cyan-700'>
                Resume <FontAwesomeIcon icon={faGreaterThan}></FontAwesomeIcon>
              </button>
            </a>


        </div>
      </div>
      
      {/* Internship Experience */}
        {/* <div className='mt-5 flex flex-col items-center w-full px-4 md:px-10'>
          <h3 className='text-sm md:text-2xl font-serif font-bold text-cyan-500'>Internship Experience</h3>
          <p className='font-serif mt-2'>
            During my web development internship at [Sajal Tech], I had the opportunity to work on real-world projects that honed my technical skills and professional abilities. Here's a brief overview of my experience:
          </p>
          
          <div className='mt-4 space-y-4'>
            <div className='font-serif'>
              <FontAwesomeIcon icon={faDotCircle} className='text-cyan-300' />
              <span className='text-black font-semibold ml-2'>HTML, CSS, and JavaScript:</span> Developed and maintained website features, ensuring a seamless user experience across various devices and browsers.
            </div>
            <div className='font-serif'>
              <FontAwesomeIcon icon={faDotCircle} className='text-cyan-300' />
              <span className='text-black font-semibold ml-2'>React:</span> Contributed to front-end projects using React, implementing new features and optimizing existing components for better performance.
            </div>
            <div className='font-serif'>
              <FontAwesomeIcon icon={faDotCircle} className='text-cyan-300' />
              <span className='text-black font-semibold ml-2'>Team Collaboration:</span> Worked closely with a team of developers and designers, participating in code reviews, project planning, and design discussions to deliver high-quality web solutions.
            </div>
            <div className='font-serif'>
              <FontAwesomeIcon icon={faDotCircle} className='text-cyan-300' />
              <span className='text-black font-semibold ml-2'>Version Control with Git:</span> Managed code versions using Git, collaborating with team members to merge changes, resolve conflicts, and maintain a clean codebase.
            </div>
            <div className='font-serif'>
              <FontAwesomeIcon icon={faDotCircle} className='text-cyan-300' />
              <span className='text-black font-semibold ml-2'>Debugging and Optimization:</span> Identified and resolved bugs, optimized website performance, and ensured cross-browser compatibility for a consistent user experience.
            </div>
          </div>
        </div> */}
      {/* end experience */}


      {/* skill  */}
        {/* <div className='mt-8 w-full flex flex-col items-center px-4 md:px-10'>
          <h3 className='text-sm md:text-2xl font-serif font-bold text-cyan-500'>Skills and Tools</h3>
          <div className='flex flex-col sm:flex-row flex-wrap justify-between mt-4 w-full  space-y-4 sm:space-y-0'>
            <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 border-2 border-transparent hover:border-emerald-600 rounded-md bg-gray-300'>
              <h1 className='text-[#0d0d0d] text-xl font-semibold'>Programming Languages:</h1>
              <ul className='mt-2 space-y-2'>
                <li className='font-serif hover:text-cyan-500'><FontAwesomeIcon icon={faCircle} className='text-cyan-300' /> HTML5</li>
                <li className='font-serif hover:text-cyan-500'><FontAwesomeIcon icon={faCircle} className='text-cyan-300' /> CSS</li>
                <li className='font-serif hover:text-cyan-500'><FontAwesomeIcon icon={faCircle} className='text-cyan-300' /> JavaScript</li>
                <li className='font-serif hover:text-cyan-500'><FontAwesomeIcon icon={faCircle} className='text-cyan-300' /> Tailwind CSS</li>
                <li className='font-serif hover:text-cyan-500'><FontAwesomeIcon icon={faCircle} className='text-cyan-300' /> MySQL</li>
                <li className='font-serif hover:text-cyan-500'><FontAwesomeIcon icon={faCircle} className='text-cyan-300' /> Java</li>
              </ul>
            </div>

            <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 border-2 border-transparent hover:border-emerald-600 rounded-md bg-gray-300'>
              <h1 className='text-[#0d0d0d] text-xl font-semibold'>Frameworks and Libraries:</h1>
              <ul className='mt-2 space-y-2'>
                <li className='font-serif hover:text-cyan-500'><FontAwesomeIcon icon={faCircle} className='text-cyan-300' /> ReactJS</li>
              </ul>
            </div>

            <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 border-2 border-transparent hover:border-emerald-600 rounded-md bg-gray-300'>
              <h1 className='text-[#0d0d0d] text-xl font-semibold'>Version Control:</h1>
              <ul className='mt-2 space-y-2'>
                <li className='font-serif hover:text-cyan-500'><FontAwesomeIcon icon={faCircle} className='text-cyan-300' /> Git</li>
              </ul>
            </div>

            <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 border-2 border-transparent hover:border-emerald-600 rounded-md bg-gray-300'>
              <h1 className='text-[#0d0d0d] text-xl font-semibold'>Web Development Tools:</h1>
              <ul className='mt-2 space-y-2'>
                <li className='font-serif hover:text-cyan-500'><FontAwesomeIcon icon={faCircle} className='text-cyan-300' /> VS Code</li>
                <li className='font-serif hover:text-cyan-500'><FontAwesomeIcon icon={faCircle} className='text-cyan-300' /> Chrome DevTools</li>
              </ul>
            </div>

            <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 border-2 border-transparent hover:border-emerald-600 rounded-md bg-gray-300'>
              <h1 className='text-[#0d0d0d] text-xl font-semibold'>Soft Skills:</h1>
              <ul className='mt-2 space-y-2'>
                <li className='font-serif hover:text-cyan-500'><FontAwesomeIcon icon={faCircle} className='text-cyan-300' /> Effective communication</li>
                <li className='font-serif hover:text-cyan-500'><FontAwesomeIcon icon={faCircle} className='text-cyan-300' /> Teamwork</li>
                <li className='font-serif hover:text-cyan-500'><FontAwesomeIcon icon={faCircle} className='text-cyan-300' /> Problem-solving</li>
                <li className='font-serif hover:text-cyan-500'><FontAwesomeIcon icon={faCircle} className='text-cyan-300' /> Continuous learning</li>
              </ul>
            </div>
          </div> 
        </div>*/}
      {/* end skills */}



      {/* Education */}
        {/* <div className='mt-8 w-full flex flex-col items-center px-4 md:px-10'>
          <h3 className='text-sm md:text-2xl font-serif font-bold text-cyan-500 flex items-center'>
            Education <FontAwesomeIcon icon={faUserGraduate} className='text-black ml-2' />
          </h3>
          <p className='font-serif mt-2'>
            I hold a <span className='font-semibold'>Bachelor of Science in Information Technologies</span> from [Sadabai Raisoni College, Nagpur], where I gained a strong theoretical foundation and practical skills in software development.
          </p>
          <p className='font-serif'>2021 | CGPA: 9.53</p>
        </div> */}
      {/* end education */}


      {/* Project start */}
        {/* <div className='mt-8 w-full flex flex-col items-start px-4 md:px-10'>
          <h3 className='text-sm md:text-2xl font-serif font-bold text-cyan-500'>Project</h3>
          
          <div className='mt-4 flex items-start flex-col'>
            <h1 className='font-semibold text-lg'>1. Bandage Shopping E-Commerce Website | HTML5, ReactJS & Tailwind CSS</h1>
            <a href='https://github.com/Ritikalute/Shopping-Website-Bandage' className='text-blue-500 hover:underline'>GitHub Project link</a> 
            <a href='https://shopping-website-bandage.vercel.app/' className='text-blue-500 hover:underline'>Public URL</a>
            <p className='font-serif'><FontAwesomeIcon icon={faCircle} /> Built and deployed a responsive e-commerce site featuring product displays, add-to-cart, and delete functionalities, with API integration for efficient data management.</p>
          </div>
          
          <div className='mt-4 flex items-start flex-col'>
            <h1 className='font-semibold text-lg'>2. Animated Login-Form | HTML5, ReactJS & Tailwind CSS</h1>
            <a href='https://github.com/Ritikalute/LoginFrom' className='text-blue-500 hover:underline'>GitHub Project link</a>
            <p className='font-serif'><FontAwesomeIcon icon={faCircle} /> Enhanced user interaction with smooth transition and responsive design principles.</p>
          </div>
        </div> */}

        {/* end project */}

      
    </div> 
  );
}


export default About;
