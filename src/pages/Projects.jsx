import React from 'react'
import { motion } from 'framer-motion'

const projectDatas = [
  {
    title: 'Project Alpha',
    description: 'A SaaS platform for HR analytics.',
  },
  {
    title: 'Fintech Flow',
    description: 'A mobile-first solution for digital payments.',
  },
   {
    title: 'Fintech Flow',
    description: 'A mobile-first solution for digital payments.',
  },
   {
    title: 'Fintech Flow',
    description: 'A mobile-first solution for digital payments.',
  },
  // Add more projects here
]

const Projects = () => {
  return (
   <motion.div
         initial={{ opacity: 0, y:100 }}
         transition={{ duration: 1.5 }}
         whileInView={{ opacity: 1, y:0 }}
         onViewportLeave={{ once:true }}
    className='min-h-screen bg-[#e6dace] pb-30'>
      <div className='max-w-5xl mx-auto px-4'>
        <div className='flex items-center justify-center gap-4 pb-20 pt-40'>
          <div className='w-6 h-6 bg-blue-500 rounded-full'></div>
          <h1 className='text-2xl md:text-3xl text-center font-bold'>Projects</h1>
        </div>
        <p className='font-serif'>
          Over the years, I have successfully led and contributed to a variety of projects across industries including SaaS, fintech,
          e-commerce, human resources, and education. My role as a project manager has involved end-to-end planning,
          team coordination, stakeholder communication, and timely delivery of high-impact solutions.
          Below are some of the key projects that reflect my ability to align business goals with technical execution,
          ensuring both user satisfaction and strategic value.
        </p>
{/* Project-1 */}
        <div className='grid grid-cols-1 gap-6 mt-12 mb-30 shadow-2xl  hover:shadow-blue-300'>
            <div className='w-full flex flex-col md:flex-row'>
              <div className="bg-white pt-20 pb-10"> 
                <div className="border-l-8 border-l-blue-500">
                <div className='px-6'>
                  <h1 className='text-xl font-semibold font-serif text-blue-600'>1.Project Title & Overview</h1>
                  <p className=' text-xl  mt-2 font-bold text-gray-500'>Smart Hosting Dashboard</p>
                  </div>
                  </div>
              <p className='px-8 mt-12'>
                <h1 className='font-bold'>Tech Stack: React, Tailwind CSS, Node.js, Express, MongoDB.</h1>
                A responsive hosting service UI with Shared, VPS, and Dedicated Server sections. 
                Includes dynamic domain cards, 
                image optimization, and backend integration for user management and hosting plans.
              </p>
                </div>
                <div className='w-full'>
                <img className='w-full h-90 object-cover'
                  src="https://img.freepik.com/free-photo/genermal-suit-conducting-inspection-solar-panel-plant_482257-126011.jpg?semt=ais_incoming&w=740&q=80" alt="" />
                </div>
                </div>
        </div>

{/* Project-2 */}
        <div className='grid grid-cols-1 gap-6 mt-12 mb-30 shadow-2xl  hover:shadow-blue-300'>
            <div className='w-full flex flex-col md:flex-row'>
              <div className="bg-white pt-20 pb-10"> 
                <div className="border-l-8 border-l-blue-500">
                <div className='px-6'>
                  <h1 className='text-xl font-semibold font-serif text-blue-600'>2. Key Features</h1>
                  </div>
                  </div>
               <ul className='list-disc marker:text-green-600 space-y-4 px-8 mt-12 text-gray-700'>
                <li>Pixel-perfect layout across devices using Tailwind CSS</li>
                <li>Integrated HD transparent icons and SVGs for visual clarity</li>
                <li>Backend APIs for user authentication, hosting plan selection, and domain management</li>
                <li>Image editing for optimized asset delivery</li>
                <li>Scrollbar and overflow bug fixes for seamless UX</li>
              </ul>
               </div>
                <div className=''>
                <img className='md:w-xl h-[100%] object-cover'
                 src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*2Xt4cSpau09wInDXwYj7rQ.png" alt="" />
               </div>
               </div>
        </div>

 {/* Project-3 */}
        <div className='grid grid-cols-1 gap-6 mt-12 mb-30 shadow-2xl  hover:shadow-blue-300'>
            <div className='w-full flex flex-col md:flex-row'>
              <div className="w-full bg-white pt-20 pb-10"> 
                <div className="border-l-8 border-l-blue-500">
                <div className='px-6'>
                  <h1 className='text-xl font-semibold font-serif text-blue-600'>3.Role & Contribution</h1>
                  </div>
                  </div>
               <ul className='list-disc marker:text-green-600 space-y-4 px-8 mt-12 text-gray-700'>
                <li>Designed and implemented responsive UI components</li>
                <li>Removed image backgrounds and enhanced clarity for seamless integration</li>
                <li>Diagnosed layout bugs and applied root-level fixes</li>
                <li>Built RESTful APIs for backend functionality</li>
                <li>Collaborated on iterative UI refinement and debugging</li>
              </ul>
               </div>
                <div>
                <img className='md:w-xl h-[100%] object-cover'
                 src="https://library.gabia.com/wp-content/uploads/2020/03/API_image-1.jpg" alt="" />
               </div>
               </div>
        </div>

 {/* Project-4 */}
         <div className='grid grid-cols-1 gap-6 mt-12 mb-30 shadow-2xl  hover:shadow-blue-300'>
            <div className='w-full flex flex-col md:flex-row'>
              <div className="w-full bg-white pt-20 pb-10"> 
                <div className="border-l-8 border-l-blue-500">
                <div className='px-6'>
                  <h1 className='text-xl font-semibold font-serif text-blue-600'>4. Visuals & Attachments</h1>
                  <p className=' text-xl  mt-2 font-bold text-gray-500'>Include:</p>
                  </div>
                  </div>
               <ul className='list-disc marker:text-green-600 space-y-4 px-8 mt-12 text-gray-700'>
                <li>Screenshots of the UI sections (Shared Hosting, VPS, Dedicated Server)</li>
                <li>Before/after images showing asset enhancements</li>
                <li>Backend architecture diagram (optional)</li>
                <li>GitHub repo link or live demo (if available)</li>
              </ul>
               </div>
                <div className=''>
                <img className='w-full h-96 object-cover'
                 src="https://opencirrus.org/wp-content/uploads/2017/05/16389741442_45374e44a1_b.jpg" alt="" />
               </div>
               </div>
        </div>

 {/* Project-5 */}
        <div className='grid grid-cols-1 gap-6  shadow-2xl hover:shadow-blue-300'>
            <div className='w-full flex flex-col md:flex-row'>
              <div className="w-full bg-white pt-20"> 
                <div className="border-l-8 border-l-blue-500">
                <div className='px-6'>
                  <h1 className='text-xl font-semibold font-serif text-blue-600'>5. Learnings & Impact</h1>
                  <p className=' text-xl  mt-2 font-bold text-gray-500'>Include:</p>
                  </div>
                  </div>
               <ul className='list-disc marker:text-green-600 space-y-4 px-8 mt-12 text-gray-700'>
                <li>Strengthened skills in React, Tailwind CSS, and backend integration</li>
                <li>Gained hands-on experience with image optimization and layout debugging</li>
                <li>	Improved collaboration and iterative development workflow</li>
                <li>Delivered a polished, real-world hosting interface with professional design</li>
              </ul>
               </div>
                <div className=''>
                <img className='w-full h-96 object-cover'
                 src="https://res.cloudinary.com/highereducation/images/f_auto,q_auto/v1662131506/ComputerScience.org/Woman-typing-laptop-writing-notebook-desk-lamp_9273e62d4/Woman-typing-laptop-writing-notebook-desk-lamp_9273e62d4.jpg?_i=AA" alt="" />
               </div>
               </div>
        </div>
 
    </div>
</motion.div>
  )
}

export default Projects