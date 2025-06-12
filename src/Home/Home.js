import React from 'react'
import Ritikahomeimg from './ritu pic.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHand, faHandHoldingWater, faHandsWash, faHouse, faLink, faLinkSlash, faPhone } from '@fortawesome/free-solid-svg-icons';
import {  faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom'; // Import useNavigate




function Home() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleMoreAboutMeClick = () => {
    navigate('/about'); // Navigate to the About page
  };
  return (

    // <div className='h-[400px] w-full flex items-center justify-center p-4 md:px-8 relative' style={{ background: 'linear-gradient(to right, #aeebee, #6969ec)' }}>
    //     <div className='h-auto w-auto bg-[#e6f7f7]  flex flex-row items-center justify-center  py-10 mt-20 border-4 border-solid border-white absolute z-10'>
    //         <div className='ml-4'>
    //             <img src={Ritikahomeimg} alt='' className='ml-2'/>

    //         </div>
    //         <div className='flex flex-col items-start ml-10 mr-4'>
    //             <div className='flex flex-col items-start'>
    //                 <h1 className='text-5xl ml-2 font-serif'>RITKA LUTE</h1>

    //                 <h6 className='ml-2 mt-4 font-serif text-sm'>Building Responsive and Dynamic Websites with Cutting-Edge Technologies.</h6>
    //                 <h6 className='ml-2 font-serif text-sm'> Discover my projects to see how I bring innovative web solutions to life.</h6>
    //             </div>
    //             <div className='flex flex-col items-start ml-2 mt-6'>
    //                 <h1 className=''><FontAwesomeIcon icon={faPhone} className='mr-2 text-sky-600' /> 9284701274</h1>
    //                 <a href=''className='mt-2' ><FontAwesomeIcon icon={faEnvelope} className='mr-2 text-sky-600' /> ritikalute06@gmail.com</a>
    //                 <a href=''className='mt-2' ><FontAwesomeIcon icon={faHouse} className='mr-2 text-sky-600' /> Nagpur, Maharashtra India</a>
    //                 <a href=''className='mt-2' ><FontAwesomeIcon icon={faLinkedin} className='mr-2 text-sky-600' />www.linkedin.com/in/ritika-lute-433090192</a>
    //                 <a href=''className='mt-2' ><FontAwesomeIcon icon={faGithub} className='mr-2 text-sky-600' /> https://github.com/Ritikalute</a>
    //                 <a href=''className='mt-2' ><FontAwesomeIcon icon={faLink} className='mr-2 text-sky-600' /> https://vercel.com/ritika-lutes-projects</a>
    //                 <button className='mt-2 bg-sky-500 text-slate-50 text-2xl font-serif rounded-full h-auto w-auto border-2 border-solid border-sky-500 hover:text-cyan-400 transition-colors duration-300'>More About Me</button>

                
    //             </div>
    //         </div>

    //     </div>
    // </div>


    <div className='h-screen w-full flex items-center justify-center p-4 md:px-8' style={{ background: 'linear-gradient(to right, #aeebee, #6969ec)' }}>
      <div className='h-auto w-full max-w-5xl bg-[#e6f7f7] flex flex-col md:flex-row items-center justify-center py-10 border-4 border-solid border-white'>
        <div className='ml-4 mb-4 md:mb-0'>
          <img src={Ritikahomeimg} alt='' className='w-40 h-40 md:w-60 md:h-60 ' />
        </div>
        <div className='flex flex-col items-start ml-10 mr-4'>
          <div className='flex flex-col items-start space-y-2'>
          <h1 className='text-3xl md:text-5xl ml-2 font-serif'> Hi There 👋<FontAwesomeIcon ></FontAwesomeIcon></h1>
            <h1 className='text-3xl md:text-5xl ml-2 font-serif'>I'm Ritika Lute </h1>
            <h1 className='text-3xl md:text-2xl ml-2 font-serif text-cyan-500 hover:text-sky-700 hover:underline'>I'm FrontEnd Developer </h1>
            <h6 className='ml-2 mt-2 font-serif text-sm md:text-lg'>Building Responsive and Dynamic Websites with Cutting-Edge Technologies.</h6>
            <h6 className='ml-2 font-serif text-sm md:text-lg'>Discover my projects to see how I bring innovative web solutions to life.</h6>
          </div>
          <div className='flex flex-col items-start ml-2 mt-4'>
            <h1 className='text-sm md:text-base'><FontAwesomeIcon icon={faPhone} className='mr-2 text-sky-600' /> 9284701274</h1>
            <a href='mailto:ritikalute06@gmail.com' className='mt-2 text-sm md:text-base'><FontAwesomeIcon icon={faEnvelope} className='mr-2 text-sky-600' /> ritikalute06@gmail.com</a>
            <a href='#' className='mt-2 text-sm md:text-base'><FontAwesomeIcon icon={faHouse} className='mr-2 text-sky-600' /> Nagpur, Maharashtra India</a>
            <a href='https://www.linkedin.com/in/ritika-lute' className='mt-2 text-sm md:text-base'><FontAwesomeIcon icon={faLinkedin} className='mr-2 text-sky-600' /> www.linkedin.com/in/ritika-lute-433090192</a>
            <a href='https://github.com/Ritikalute' className='mt-2 text-sm md:text-base'><FontAwesomeIcon icon={faGithub} className='mr-2 text-sky-600' /> https://github.com/Ritikalute</a>
            <button onClick={handleMoreAboutMeClick} className='mt-2 bg-sky-500 text-slate-50 text-sm md:text-2xl font-serif rounded-full h-auto w-auto border-2 border-solid border-sky-500 hover:text-cyan-400 transition-colors duration-300'>More About Me</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
