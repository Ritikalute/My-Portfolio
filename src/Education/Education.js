import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import {   } from '@fortawesome/free-brands-svg-icons';
import Collegepic from './collegepic.png'
import ARCimages from './imagesARC.png'


function Education() {
    const educationData = [
        {
          field: "Bachelor of Science",
          college: "Sadabai Raisoni College, Nagpur",
          duration: "2018 - 2021",
          college_img: Collegepic,  // Example URL
          college_url: "https://www.example.com/college1",  // Example URL
        },
        {
          field: "Full Stack Development Certification",
          college: "ARC Institution & Technologies, Nagpur",
          duration: "2022-2023",
          college_img: ARCimages,  // Example URL
          college_url: "https://www.example.com/college2",  // Example URL
        },
        // Add more education details here
      ];
  return (
    <div>
    <div className="h-auto w-full  p-4 md:px-8" style={{ background: 'linear-gradient(to right, #aeebee, #6969ec)' }}>
        <div className="experience py-16 bg-[#e6f7f7]">
                
    <section className="min-h-screen bg-transparent py-12" id="education">
      <h1 className="text-4xl text-black text-center py-4 font-bold">
        <i className="fas fa-graduation-cap mr-2"></i>
        My <span className="text-black">Education</span><FontAwesomeIcon icon={faGraduationCap} className='text-black'></FontAwesomeIcon>
      </h1>

      <p
        className="text-center font-semibold font-nunito text-black text-xl mt-2 mb-6"
        style={{ color: "black" }}
      >
        Education is not the learning of facts, but the training of the mind to
        think.
      </p>

      <div className="flex flex-wrap justify-center items-center flex-col mt-12 space-y-8">
        {educationData.map((elem, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl overflow-hidden w-4/5 md:w-3/5"
          >
            <div className="flex-shrink-0 w-full md:w-1/3">
              <a href={elem.college_url}>
                <img
                  draggable="false"
                  src={elem.college_img}
                  alt={elem.college}
                  className="object-cover ml-5 mt-2"
                />
              </a>
            </div>
            <div className="p-6 flex flex-col justify-between w-full md:w-2/3">
              <h3 className="text-3xl text-blue-900 font-semibold text-left mb-2">
                {elem.field}
              </h3>
              <p className="text-lg text-purple-500 text-left mb-4">
                {elem.college}
              </p>
              <h4 className="text-2xl text-green-600 font-bold text-left">
                {elem.duration}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>

                
            </div>
            </div> 

    </div>
  )
}

export default Education
