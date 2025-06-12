import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputer } from '@fortawesome/free-solid-svg-icons';
import Projec1 from './project.1.png'
import { Link } from 'react-router-dom';



function Project() {
  return (
    <div className="h-auto w-full  p-4 md:px-8" style={{ background: 'linear-gradient(to right, #aeebee, #6969ec)' }}>

    <div className="experience py-16 bg-[#e6f7f7]">
    <section className="min-h-screen bg-transparent py-12" id="education">

        <h1 className="text-4xl text-black text-center py-4 font-bold">
                <i className="fas fa-graduation-cap mr-2"></i>
                My <span className="text-black">Project's </span> <FontAwesomeIcon icon={faComputer} className='text-black'></FontAwesomeIcon>
        </h1>
        <p
        className="text-center font-semibold font-nunito text-black text-xl mt-2 mb-6"
        style={{ color: "black" }}
      >
        Bandage Shopping E-Commerce Website
      </p>
      <div className="flex flex-wrap justify-center items-center flex-col mt-12 space-y-8">
         <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl overflow-hidden w-4/5 md:w-3/5"
          >

          <img src={Projec1} />
        </div>
        <div className="flex-shrink-0 w-full md:w-1/3">
             <h1> Projec URL </h1>
             <Link
              to="/https://shopping-website-bandage.vercel.app/home"
              className="text-blue-600 underline hover:text-blue-800"
               >
              Go to Project Page
              </Link>
            </div>
      </div>
        </section>
    </div>
    </div>
  )
}

export default Project
