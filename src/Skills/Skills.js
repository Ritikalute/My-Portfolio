import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle,faCircle } from '@fortawesome/free-solid-svg-icons';
import htmlimg from './1images-removebg-preview.png'
import htmlimg2 from './2CSS-Logo-removebg-preview.png'
import htmlimg3 from './3js-logo-removebg-preview.png'
import htmlimg4 from './4react.js-removebg-preview.png'
import htmlimg5 from './5Tailwindimages-removebg-preview.png'
import htmlimg6 from './6REDUX-removebg-preview.png'
import htmlimg7 from './7BOOTSTRAP-removebg-preview.png'
import htmlimg8 from './8figma.png'
import htmlimg9 from './9materialui-removebg-preview.png'
import htmlimg10 from './10mysql-removebg-preview.png'
import htmlimg11 from './11java-logo-removebg-preview.png'
import htmlimg12 from './12python-img-removebg-preview.png'






function Skills() {
  return (
    // <div>
    //       <div className='h-auto w-full flex items-center justify-center p-4 md:px-8' style={{ background: 'linear-gradient(to right, #aeebee, #6969ec)' }}>
    //           <div className='h-auto w-full max-w-5xl bg-[#e6f7f7] flex flex-col md:flex-col items-start justify-center py-10 border-4 border-solid border-white'>
    //             <h1 className='text-3xl font-bold mb-4'>Language</h1>
                
    //            <div className= 'flex flex-wrap space-x-2 space-y-2 items-center justify-center w-full sm:w-1/2  md:w-full lg:w-full p-4 border-2 border-transparent hover:border-emerald-600 rounded-md bg-gray-300'>
                  
    //               <div className=' h-auto w-1/4 p-2 border-2 border-transparent hover:border-gray-300 rounded-md bg-neutral-600'>
    //                   <img src={htmlimg} alt='' className='w-full h-36 object-cover' />
    //                   <h4 className='text-2xl font-semibold text-gray-100 font-serif'>HTML</h4>
    //                 </div>
    //                 <div className='  h-auto w-1/4 p-2  border-2 border-transparent hover:border-gray-300 rounded-md bg-neutral-600'>
    //                   <img src={htmlimg2} alt='' className='w-full h-36 object-cover' />
    //                   <h4 className='text-2xl font-semibold text-gray-100 font-serif'>CSS</h4>
    //                 </div>
    //                 <div className='h-auto w-1/4 p-2  border-2 border-transparent hover:border-gray-300 rounded-md bg-neutral-600'>
    //                   <img src={htmlimg3} alt='' className='w-full h-36 object-cover ' />
    //                   <h4 className='text-2xl font-semibold text-gray-100 font-serif'>JAVASCRIPT</h4>
    //                 </div> 
    //                 <div className='h-auto w-1/4 p-2 border-2 border-transparent hover:border-gray-300 rounded-md bg-neutral-600'>
    //                   <img src={htmlimg4} alt='' className='w-full h-36 object-cover ' />
    //                   <h4 className='text-2xl font-semibold text-gray-100 font-serif'>REACT.JS</h4>
    //                 </div> 
    //                 <div className='h-auto w-1/4 p-2  border-2 border-transparent hover:border-gray-300 rounded-md bg-neutral-600'>
    //                   <img src={htmlimg5} alt='' className='w-full h-36 object-cover ' />
    //                   <h4 className='text-2xl font-semibold text-gray-100 font-serif'>TAILWIND CSS</h4>
    //                 </div> 
    //                 <div className='h-auto w-1/4 p-2  border-2 border-transparent hover:border-gray-300 rounded-md bg-neutral-600'>
    //                   <img src={htmlimg6} alt='' className='w-full h-36 object-cover ' />
    //                   <h4 className='text-2xl font-semibold text-gray-100 font-serif'>REDUX</h4>
    //                 </div> 
    //                 <div className='h-auto w-1/4 p-2  border-2 border-transparent hover:border-gray-300 rounded-md bg-neutral-600'>
    //                   <img src={htmlimg7} alt='' className='w-full h-36 object-cover ' />
    //                   <h4 className='text-2xl font-semibold text-gray-100 font-serif'>BOOTSTRAP</h4>
    //                 </div> 
    //                 <div className='h-auto w-1/4 p-2  border-2 border-transparent hover:border-gray-300 rounded-md bg-neutral-600'>
    //                   <img src={htmlimg8} alt='' className='w-full h-36 object-cover ' />
    //                   <h4 className='text-2xl font-semibold text-gray-100 font-serif'>FIGMA</h4>
    //                 </div> 
    //                 <div className='h-auto w-1/4 p-2  border-2 border-transparent hover:border-gray-300 rounded-md bg-neutral-600'>
    //                   <img src={htmlimg9} alt='' className='w-full h-36 object-cover ' />
    //                   <h4 className='text-2xl font-semibold text-gray-100 font-serif'>MATERIALUI</h4>
    //                 </div> 
    //                 <div className='h-auto w-1/4 p-2  border-2 border-transparent hover:border-gray-300 rounded-md bg-neutral-600'>
    //                   <img src={htmlimg10} alt='' className='w-full h-36 object-cover ' />
    //                   <h4 className='text-2xl font-semibold text-gray-100 font-serif'>MYSQL</h4>
    //                 </div> 
    //                 <div className='h-auto w-1/4 p-2  border-2 border-transparent hover:border-gray-300 rounded-md bg-neutral-600'>
    //                   <img src={htmlimg11} alt='' className='w-full h-36 object-cover ' />
    //                   <h4 className='text-2xl font-semibold text-gray-100 font-serif'>JAVA</h4>
    //                 </div> 
    //                 <div className='h-auto w-1/4 p-2  border-2 border-transparent hover:border-gray-300 rounded-md bg-neutral-600'>
    //                   <img src={htmlimg12} alt='' className='w-full h-36 object-cover ' />
    //                   <h4 className='text-2xl font-semibold text-gray-100 font-serif'>PYTHON</h4>
    //                 </div> 
    //             </div> 
    //             {/*end skills  */}
                    
    //           </div>
    //       </div>
    // </div>

    <div className="h-auto w-full flex items-center justify-center p-4 md:px-8" style={{ background: 'linear-gradient(to right, #aeebee, #6969ec)' }}>
      <div className="h-auto w-full max-w-5xl bg-[#e6f7f7] flex flex-col md:flex-col items-start justify-center py-10 border-4 border-solid border-white">
        <h1 className="text-3xl font-bold mb-4">Languages</h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4 w-full p-4 border-2 border-transparent hover:border-emerald-600 rounded-md bg-gray-300">
          {[
            { img: htmlimg, label: "HTML" },
            { img: htmlimg2, label: "CSS" },
            { img: htmlimg3, label: "JavaScript" },
            { img: htmlimg4, label: "React.js" },
            { img: htmlimg5, label: "Tailwind CSS" },
            { img: htmlimg6, label: "Redux" },
            { img: htmlimg7, label: "Bootstrap" },
            { img: htmlimg8, label: "Figma" },
            { img: htmlimg9, label: "Material UI" },
            { img: htmlimg10, label: "MySQL" },
            { img: htmlimg11, label: "Java" },
            { img: htmlimg12, label: "Python" },
          ].map((skill, index) => (
            <div key={index} className="h-auto w-full p-2 border-2 border-transparent hover:border-gray-300 rounded-md bg-neutral-600 flex flex-col items-center">
              <img src={skill.img} alt={skill.label} className="w-full h-36 object-cover" />
              <h4 className="text-2xl font-semibold text-gray-100 font-serif">{skill.label}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
