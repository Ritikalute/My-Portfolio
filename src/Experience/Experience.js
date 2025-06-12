import React from 'react'

function Experience() {
    const experiences = [
        {
          company: 'Sajal Technologies',
          position: 'Frontend Developer',
          duration: 'March 2024 - August',
          description: ['Developed UI components', 'Enginered responsive web application using html,css,javascript,Reactjs,and Tailwind css,bootsting user engagement by 20%','integrated RESTFUL API is to enhance functionality and performance,reducing page load times by30%','Partnered with senior developers to create Figma designs and live projects,driving a 25% increase in mobile traffic','Utilized Agile methodologies to manage project tasks and meet deadline, improving project delivery time by 15%'],
        },
        {
          company: 'Unified Mentor',
          position: 'Trainer Web Developer',
          duration: 'Nov 2023 - Jan 2024',
          description: ['Led frontend development for training projects using React.js,Tailwind CSS ,and HTML5,Completing projects 10% ahead of schedule.', 'Led training sessions on responsive design,enhancing team effeciency in UI/UX design by 25% and reducing project completion time by 10%'],
        },
        // {
        //   company: 'Company C',
        //   position: 'Full Stack Developer',
        //   duration: 'July 2019 - Dec 2019',
        //   description: ['Worked on both frontend and backend development', 'Implemented security protocols'],
        // },
      ];
    
  return (
    <div>
    <div className="h-auto w-full  p-4 md:px-8" style={{ background: 'linear-gradient(to right, #aeebee, #6969ec)' }}>

    <section className="experience py-16 bg-[#e6f7f7]">
      <h1 className='text-black text-2xl font-medium'>Experience</h1>
      <div className="timeline relative max-w-5xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 w-[4px] bg-blue-900 top-0 bottom-0 transform -translate-x-1/2 z-0"></div>

        {experiences.map((exp, idx) => (
          <div key={idx} className={`w-full md:w-1/2 px-4 py-6 relative ${idx % 2 === 0 ? 'md:left-0' : 'md:left-1/2'}`}>
            {/* Circle on the timeline (directly on the vertical line) */}
            <div className="absolute top-1/2 left-1/2 w-[30px] h-[30px] bg-white border-4 border-red-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
            
            {/* Experience Details */}
            <div className="bg-white shadow-lg p-6 rounded-lg relative z-20">
              <div className="pl-8">
                <h2 className="text-lg font-bold text-blue-900">{exp.company}</h2>
                <h3 className="text-xl font-semibold">{exp.position}</h3>
                <p className="text-gray-600">{exp.duration}</p>
                <ol className="list-disc pl-2 mt-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-gray-700">
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Arrow pointing left or right */}
            <div className={`absolute top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ${idx % 2 === 0 ? 'right-full border-r-[10px] border-r-blue-900' : 'left-full border-l-[10px] border-l-blue-900'}`}></div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-8 flex justify-center">
        <button className="py-4 px-8 text-white bg-blue-600 rounded-lg hover:bg-blue-800 shadow-lg transition-all">
          <span className="text-lg font-semibold">View All</span>
        </button>
      </div>
    </section>
        </div>
    </div>
  )
}


export default Experience
