import React from 'react'
import { FaLink } from "react-icons/fa";
import { motion } from 'framer-motion'

const Resume = () => {
  return (
    <div className='grid grid-cols-1 w-full min-h-screen bg-[#e6dace] mt-20'>
      <motion.div className='max-w-6xl mx-auto px-8 mb-10'
        initial={{ opacity: 0, y:100 }}
       transition={{ duration: 1.5 }}
       whileInView={{ opacity: 1, y:0 }}
       onViewportLeave={{ once:true }}
      >
{/* Header */}
        <div className='flex items-center justify-center py-20 gap-4'>
          <div className='w-8 h-8 bg-blue-500 rounded-full text-center'></div>
          <h1 className='uppercase text-center text-4xl font-bold'>Resume/CV</h1>
        </div>

{/* Summary */}
      <div className='flex items-center justify-between flex-wrap gap-6 md:gap-96 mb-10'>
          <h1 className='text-2xl font-bold'>
            Summary<mark className='text-green-600 bg-transparent'>*</mark>
          </h1>
        <div className='relative inline-flex items-center'>
   <a href="/Fresher_Resume.pdf" download target="_blank" rel="noopener noreferrer">
  <button className='relative px-6 md:px-10 py-2 bg-blue-500 text-white rounded-full cursor-pointer hover:bg-blue-700 transition'>
    Download CV
      {/* Ping animation dot on top-right */}
      <span className='absolute -top-1 -right-1 h-3 w-3 animate-ping rounded-full  bg-sky-400 opacity-75'></span>
      <span className='absolute -top-1 -right-1 h-3 w-3 rounded-full bg-green-400'></span>
    </button>
  </a>
</div>
      </div>

        <div className='max-w-4xl mx-auto justify-between md:gap-96 gap-6 shadow-2xl mb-20 hover:shadow-blue-300'>
        <div className="w-full flex flex-col space-y-6">
          <div className="bg-white px-12 py-20 gap-4 ">

    {/* Description on the right side */}
      <p className="text-justify leading-relaxed text-xl">
        Driven MCA student specializing in Software Engineering, expected to graduate in 2026. 
        Eager to apply my foundational knowledgeand skills to contribute to innovative projects. 
        I am passionate about the tech industry and am excited to kickstart my career journey.
      </p>
    </div>
  </div>
        </div>


{/* Experience + Button */}
      <div className='max-w-4xl mx-auto mb-20'>
          <div className='flex items-center justify-between md:gap-96 gap-6'>
            <h1 className='text-2xl font-bold mb-5'>Experience<mark className='text-green-600  bg-transparent'>*</mark></h1>
          </div>
          <div className="w-full flex flex-col space-y-6 ">
            <div className="bg-white px-12 py-20 gap-4 grid md:grid-cols-2 shadow-2xl hover:shadow-blue-300">
              <div className='py-5 space-y-3'>
                <h1 className="text-blue-500 text-lg font-semibold">
                  JAN 2025   - <span className="font-normal">PRESENT</span>
                </h1>
                <h1 className="text-lg font-semibold">
                  JOB POSITION : <span className="font-normal text-blue-500">FrontEnd-FullStack Developer</span>
                </h1>
                <h1 className="text-lg font-semibold">
                Present Work: <span className="font-normal text-blue-500">Persnol</span>
                </h1>
                <h1 className="text-lg font-semibold">
                  Company Location: <span className="font-normal text-blue-500">Kota Rajasthan, India</span>
                </h1>
              </div>

    {/* Description on the right side */}
      <p className="text-justify leading-relaxed">
        As a Full-stack Development Intern at intern Internship, 2025Present), I am focused on
        developing and maintaining web applications. I leverage my skills in full-stack
        technologies to create user-friendly and efficient interfaces. My responsibilities include
        writing clean, well-documented code and collaborating with the development team. I am
        committed to contributing to innovative projects.
      </p>
  </div>
</div>
      </div>

{/* Education */}
      <div className='max-w-4xl mx-auto mb-10'>
          <h1 className='text-2xl font-bold flex items-center '>
            Education<mark className='text-green-600  bg-transparent'>*</mark></h1>
          <div className="w-full flex flex-col space-y-6 py-5">
            <div className="bg-white px-12 py-20 gap-4 grid md:grid-cols-2 shadow-2xl hover:shadow-blue-300">
              <div className='py-5 space-y-3'>
                <h1 className="text-lg font-semibold">
                  2021 - 2023 <span className="text-blue-500 font-normal"> University of Kota</span>
                </h1>
                <h1 className="text-lg font-semibold">
                  Graduation - <span className="font-normal text-blue-500">Bachelor Of Arts Computer</span>
                </h1>
                <h1 className="text-lg font-semibold">
                 2024 - 2026<span className="font-normal text-blue-500"> Modi Institute of Management & Technology, Kota</span>
                </h1>
                <h1 className="text-lg font-semibold">
                   Post Graduation: <span className="font-normal text-blue-500">(MCA) Master Of Computer Application</span>
                </h1>
              </div>

    {/* Description on the right side */}
      <p className="text-justify leading-relaxed">
         I am pursuing my MCA 2-year in Software Engineering at the Modi Institute of
        Technology, Kota, with an expected completion in 2026. This postgraduate program has
        equipped me with a robust understanding of software development principles and
        practices. I am eager to apply my knowledge and skills to contribute to innovative
        projects within the software engineering domain.
      </p>
  </div>
</div>
      </div>

{/* Skillsets */}
      <div className='max-w-4xl mx-auto mb-20'>
      <h1 className='text-2xl font-bold flex items-center space-y-6 py-5'>
        Profession Skillsets<mark className='text-green-600  bg-transparent'>*</mark></h1>

        <div className="bg-white md:px-20 px-8 py-20 gap-4 shadow-2xl hover:shadow-blue-300">
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 pb-12 max-w-xl'>
            <div className='py-5 space-y-7 justify-center text-center'>
            {["Computer Skills", "Computer-Hardwear", "HTML", "CSS", "JavaScript"].map((skill, index) => (
            <div key={index} className='flex items-center space-x-3'>
            <div className='w-4 h-4 bg-blue-500 rounded-full'></div>
            <h1 className="text-lg font-semibold">{skill}</h1>
            </div>
            ))}
          </div>

          <div className='py-5 space-y-7'>
            {["React.js", "Tailwindcss", "Front-End Development", "Full-Stack Development"].map((skill, index) => (
              <div key={index} className='flex items-center space-x-3'>
                <div className='w-4 h-4 bg-blue-500 rounded-full'></div>
                <h1 className="text-lg font-semibold">{skill}</h1>
              </div>
            ))}
            </div>
        </div>

      <div className='bg-white'>
        <h1 className='text-2xl font-bold pb-12 py-2'>Language</h1>
        <div className='max-w-xl grid grid-cols-1 md:grid-cols-2 gap-12 text-sm'>
        <div className='flex items-center gap-4'>
        <div className='w-4 h-4 bg-blue-500 rounded-full'></div>
        <h1 className='text-lg font-semibold'>English (native)</h1>
    </div>

     <div className='flex items-center gap-4'>
        <div className='w-4 h-4 bg-blue-500 rounded-full'></div>
        <h1 className='text-lg font-semibold'>Hindi (native)</h1>
    </div>
  </div>
</div>
</div>
      </div>


{/* Certification */}
      <div className='max-w-4xl mx-auto'>
          <h1 className='text-2xl font-bold flex items-center'>
            Certification<mark className='text-green-600  bg-transparent'>*</mark>
          </h1>
        <div className="w-full flex flex-col space-y-6 py-5">
          <div className="bg-white px-12 py-20 gap-4 shadow-2xl mb-20 hover:shadow-blue-300">
            <div className='space-y-6'>

{/* STP Computer Education */}
              <div className='flex items-start space-x-3 mb-10'>
                <FaLink className='mt-2 shrink-0 text-[#1a0dab]'/>
                <div>
                   <a className="text-lg font-semibold hover:underline"
                    href="/web development.pdf"target="_blank"rel="noopener noreferrer">
                    STP Computer Education</a>
                  <p className="text-base">
                    Certifications of 12 months duration from STP COMPUTER EDUCATION (March 2024 – March 2025)
                  </p>
                </div>
              </div>

{/* Unified Mentor */}
              <div className='flex items-start space-x-3 mb-10'>
                <FaLink className='mt-2 shrink-0 text-[#1a0dab]' />
                <div>
                   <a className="text-lg font-semibold hover:underline"
                    href="/Intern-certificate.pdf" target="_blank" rel="noopener noreferrer">
                    Unified Mentor</a>
                  <p className="text-base">
                    Completed 1 Month Intern Certification in Full Stack Development from Unified Mentor.
                  </p>
                </div>
              </div>

{/* InlighnTech */}
              <div className='flex items-start space-x-3 mb-10'>
                <FaLink className='mt-2 shrink-0 text-[#1a0dab]' />
                <div>
               <a className="text-lg font-semibold hover:underline"
                    href="/Experience Letter.pdf" target="_blank" rel="noopener noreferrer">
                    InlighnTec </a>
                  <p className="text-base">
                    Completed 2 Month Internship Certification in Full Stack Development from InlighnTech.
                  </p>
                </div>
              </div>

{/* Software Engineering_certificate */}
                <div className='flex items-start space-x-3 mb-10'>
                <FaLink className='mt-2 shrink-0 text-[#1a0dab]' />
                <div>
                  <a className="text-lg font-semibold hover:underline"
                    href="/Software Engineering_certificate.pdf" target="_blank" rel="noopener noreferrer">
                    Electronic Arts Forage</a>
                  <p className="text-base">
                    Certificate	of	Completion Over	the	period	of	July	2025,	has	completed	practical	tasks	in Software Engineering_.
                  </p>
                </div>
              </div>

{/* GenAI Powered Data Analytics */}
              <div className='flex items-start space-x-3 mb-10'>
                <FaLink className='mt-2 shrink-0 text-[#1a0dab]' />
                <div>
                  <a className="text-lg font-semibold hover:underline"
                    href="/GenAI Powered Data Analytics 1751124230928.pdf" target="_blank" rel="noopener noreferrer">
                     Data Analytics TATA Forage</a>
                  <p className="text-base">
                    Certificate of Completion Over the period of June 2025, Nitesh Prajapati has completed practical tasks GenAI Powered Data Analytics.
                  </p>
                </div>
              </div>

{/* Edureka - Internship Certificate */}
              <div className='flex items-start space-x-3 mb-5'>
                <FaLink className='mt-2 shrink-0 text-[#1a0dab]' />
                <div>
                  <a className="text-lg font-semibold hover:underline"
                    href="/Edureka - Internship Certificate.pdf" target="_blank" rel="noopener noreferrer">
                    Edureka!</a>
                  <p className="text-base">
                    Completed Demo Session Full Stack Development Internship Program from Edureka.
                  </p>
                </div>
              </div>




            </div>
          </div>
        </div>
      </div>


{/* Projects */}
      <div className='max-w-4xl mx-auto mb-5'>
            <div className='flex flex-wrap items-center justify-between'>
              <h1 className='text-2xl font-bold'>Projects<mark className='text-green-600  bg-transparent'>*</mark></h1>
            </div>
                <div className="w-full flex flex-col space-y-6 py-5">
                <div className="bg-white px-4 sm:px-6 md:px-12 py-10 gap-4 grid grid-cols-1 shadow-2xl mb-20 hover:shadow-blue-300">
                <div className="space-y-5">
                <h1 className="text-lg sm:text-xl md:text-2xl font-semibold flex justify-center text-center mb-12 text-gray-600">
                  ✨ Welcome to My Project Showcase ✨ 
                </h1>


                <div className="flex items-start space-x-3 break-all">
                  <FaLink className='mt-2 text-[#1a0dab] shrink-0'/>
                  <a className="text-[16px] font-semibold hover:underline" 
                  href="https://elithosting-iota.vercel.app/">https://elithosting-iota.vercel.app/ </a>
                </div>

                <div className="flex items-start space-x-3 break-all">
                  <FaLink className='mt-2 text-[#1a0dab] shrink-0'/>
                  <a className="text-[16px] font-semibold hover:underline" 
                  href="https://estate-great-stack.vercel.app/">https://estate-great-stack.vercel.app/</a>
                </div>

                <div className="flex items-start space-x-3 break-all">
                  <FaLink className='mt-2 text-[#1a0dab] shrink-0' />
                    <a className="text-[17px] font-semibold hover:underline" 
                  href="https://liveweatherapp-tawny.vercel.app/">https://liveweatherapp-tawny.vercel.app/</a> 
                </div>

          

                <div className="flex items-start space-x-3 break-all">
                  <FaLink className='mt-2 text-[#1a0dab] shrink-0'/>
                  <a className="text-[16px] font-semibold hover:underline" 
                  href="https://sweetshop801.netlify.app/">https://sweetshop801.netlify.app/</a>
              </div>

                <div className="flex items-start space-x-3 break-all">
                  <FaLink className='mt-2 text-[#1a0dab] shrink-0' />
                  <a className="text-[16px] font-semibold hover:underline" 
                  href="https://random-password-generator-psi-olive.vercel.app/">
                    https://random-password-generator-psi-olive.vercel.app/</a>
                </div>

              <div className="flex items-start space-x-3 break-all">
                <FaLink className="mt-2 text-[#1a0dab] shrink-0" />
                <a className="md:text-[15px] font-semibold hover:underline break-all"
                href="https://quickcode2.github.io/Developer-introduce/">
                https://quickcode2.github.io/Developer-introduce/
                </a>
                </div>
              </div> <br />

          {/* Description on the right side */}
            <p className="text-justify leading-relaxed font-serif">
            <mark className='text-current bg-transparent font-serif font-bold'>Thank you..</mark> for taking the time to explore my work. This space is a reflection of my journey as a front-end developer, where creativity meets code and every pixel has a purpose. I invite you to browse through my collection of projects, each thoughtfully built using a blend of foundational web technologies and modern frameworks.
            My development process begins with the essentials: HTML, CSS, and JavaScript — the building blocks of the web. These tools allow me to structure content, style interfaces, and bring interactivity to life. But I don’t stop there. I embrace the power of modern frameworks like React.js, which enables me to build modular, scalable, and dynamic user interfaces. With Tailwind CSS, I craft visually appealing layouts with speed and precision, leveraging its utility-first approach to maintain consistency and flexibility across designs.
            Each project I create is more than just a technical exercise — it’s a story. Whether it's a sleek landing page, a responsive portfolio, or a fully interactive web application, I focus on delivering experiences that are intuitive, accessible, and engaging. I pay close attention to responsiveness, ensuring that my designs adapt seamlessly across devices, from desktops to smartphones.
            </p>
        </div>
      </div>
      </div>
  </motion.div>
</div>
  )
}

export default Resume

